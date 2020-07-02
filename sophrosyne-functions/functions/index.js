const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users');

// Add user details
app.post('/user', FBAuth, addUserDetails);
//app.get('/user', FBAuth, getAuthenticatedUser);

// Sign up route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest(app);
