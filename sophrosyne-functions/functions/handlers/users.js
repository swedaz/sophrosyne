const { admin, db } = require('../util/admin');

const config = require('../util/config');

const firebase = require('firebase');
firebase.initializeApp(config);

const { validateSignupData, validateLoginData, reduceUserDetails } = require('../util/validators');

exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };

  const { valid, errors } = validateSignupData(newUser);

  if (!valid) return res.status(400).json(errors);

  const noImg = "no-image.png";

  let token, userId;
  db.doc(`/users/${newUser.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({ handle: "this handle is already taken" });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        //TODO Append token to imageUrl. Work around just add token from image in storage.
        imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
        userId,
      };
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "Email is already is use" });
      } else {
        return res
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }
    });
};

exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, errors } = validateLoginData(user);

  if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((err) => {
      console.error(err);
      // auth/wrong-password
      // auth/user-not-user
      return res
        .status(403)
        .json({ general: "Wrong credentials, please try again" });
    });
};

//Get user details
exports.addUserDetails = (req, res) => {
    let userDetails = reduceUserDetails(req.body);
  
    db.doc(`/users/${req.user.handle}`)
      .update(userDetails)
      .then(() => {
        return res.json({ message: "Details added successfully" });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
  };

exports.addSurveyDetails = (req, res) => {
  db.doc(`/users/${req.user.handle}`)
      .update(req.body)
      .then(() => {
        return res.json({ message: "Details added successfully" });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });

}

exports.getAuthenticatedUser = (req, res) => {
    let userData = {};
    db.doc(`/users/${req.user.handle}`).get()
      .then((doc) => {
        if (doc.exists) {
          userData.credentials = doc.data();
          return db.collection('likes')
            .where("userHandle", "==", req.user.handle)
            .get();
        }
      })
      .then(data => {
        userData.likes = [];
        data.forEach(doc => {
          userData.push(doc.data());
        });
        return res.json(userData);
      })
      .catch(err => {
          console.error(err);
          return res.status(500).json({ error: err.code })
      })
  };

exports.uploadImage = (req, res) => {
  const BusBoy = require('busboy');
  const path = require('path');
  const os = require('os');
  const fs = require('fs');

  const busboy = new BusBoy({ headers: req.headers });

  let imageToBeUploaded = {};
  let imageFileName;
  // String for image token
  //let generatedToken = uuid();

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
      return res.status(400).json({ error: 'Wrong file type submitted' });
    }
    // my.image.png => ['my', 'image', 'png']
    const imageExtension = filename.split('.')[filename.split('.').length - 1];
    // 32756238461724837.png
    imageFileName = `${Math.round(Math.random() * 1000000000000).toString()}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on('finish', () => {
    admin.storage().bucket().upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
            //firebaseStorageDownloadTokens: generatedToken
          },
        },
      })
      .then(() => {
        // Append token to url
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/users/${req.user.handle}`).update({ imageUrl });
      })
      .then(() => {
        return res.json({ message: 'image uploaded successfully' });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
  });
  busboy.end(req.rawBody);
};




// exports.getBIPOCusers = (req, res) => {
//   db.doc(`/users/${req.user.handle}`).get()
//     .then((me) => {
//       if(me.exists) {
//         let ids = me.data().identities
//       }else{

//       }
//       db.collection("users").where('identities','array-contains', 'BIPOC' ).get()
//       .then((BIPOCusers) => {
//         if(BIPOCusers.docs.length === 0){
//           res.json({message: "No results", results: []})
//         }else{
//           res.json({results:[BIPOCusers.docs[0].id]})
//         }
        
      
//       })
//     })
// }

exports.getUsers = (req, res) => {
  db.doc(`/users/${req.user.handle}`).get()
    .then((me) => {
      if(me.exists && "identities" in me.data()) {
        db.collection("users").get()
        .then((matchedUsers) => {
          if(matchedUsers.docs.length === 0){
            res.json({message: "No results", results: []})
          }else{
            let ids = []
            let idsQuery = me.data().identities
            matchedUsers.docs.forEach(user => {
              let userData = user.data()
              if("identities" in userData){
                let commonIdentities = []
                for(identity of idsQuery){
                  if(userData.identities.includes(identity)){
                    commonIdentities.push(identity)
                  }
                  
                }
                if(commonIdentities.length > 0 && user.id !== me.id){
                  let profileData = {id: user.id, bio: user.data().bio, identities: user.data().identities, commonIdentities: commonIdentities, pronouns: user.data().genders, imageUrl: user.data().imageUrl}
                  ids.push(profileData)
                }
                //if(userData.identities.includes("BIPOC") && userData.identities.includes("LGBTQ+"))
                //ids.push(user.id)
              }

            })
            res.json({message: "Matched Users", results:ids})
          }
        })
        
      }else{
        res.json({message: "No id found"})
      }
    
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });

      // db.collection("users").where('identities','array-contains', 'BIPOC' ).get()
      // .then((BIPOCusers) => {
      //   if(BIPOCusers.docs.length === 0){
      //     res.json({message: "No results", results: []})
      //   }else{
      //     res.json({message: "BIPOC", results:[BIPOCusers.docs[0].id]})
      //     res.json({results:[BIPOCusers.docs[1].id]})
      //   }
      // })

      // db.collection("users").where('identities','array-contains', 'International Student' ).get()
      // .then((internationalStudentUser) => {
      //   if(internationalStudentUser.docs.length === 0){
      //     res.json({message: "No results", results: []})
      //   }else{
      //     res.json({message: "International Student", results:[internationalStudentUser.docs[0].id]})
      //     res.json({results:[internationalStudentUser.docs[1].id]})
      //   }
      // })

      // db.collection("users").where('identities','array-contains', 'Anyone' ).get()
      // .then((anyoneUser) => {
      //   if(anyoneUser.docs.length === 0){
      //     res.json({message: "No results", results: []})
      //   }else{
      //     res.json({message: "Anyone", results:[anyoneUser.docs[0].id]})
      //     res.json({results:[anyoneUser.docs[1].id]})
      //   }
      //})

    }

exports.sendChat = (req, res) => {
  console.log(req.body)
  let chat = {
    users: [req.user.handle,  req.body.toUser],
   //user2: req.body.toUser, 
    message: req.body.message, 
    //time: firebase.firestore.FieldValue.serverTimestamp()
    //time: firebase.firestore.Timestamp.now()
    //time: firebase.firestore.Timestamp.fromDate(new Date())
    time: (new Date()).getTime()

  }
  db.collection(`messages`).add(chat)
  //.then((ref) => db.doc(`/messages/${ref.id}`).update({time: firebase.firestore.FieldValue.serverTimestamp()}))
  .then (() => {
    res.json({message: "Sent chat"})
  })
  .catch((err) => {
    console.error(err);
    return res.status(500).json({ error: err.code });
  })
}

exports.getChat = (req, res) => {
  let me = req.user.handle
  let other = req.body.user
  db.collection("messages").where("users", "in", [[me, other],[other, me]])  //("user1", "in", [me, other]).where  //("user2", "in", [me, other])
  .get()
  .then ((msgs) => {
    let ms = msgs.docs.map(d => d.data())
    ms.sort((a,b) => a.time - b.time)
    res.json({messages: ms})
  })
  .catch((err) => {
    console.error(err);
    return res.status(500).json({ error: err.code });
  })

}
