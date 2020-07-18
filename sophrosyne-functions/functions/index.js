const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { signup, login, uploadImage, addUserDetails, addSurveyDetails, getAuthenticatedUser, getUsers, sendChat } = require('./handlers/users');

// Sign up route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage)
app.post('/user/survey', FBAuth, addSurveyDetails)

// Add user details
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

app.get('/user/search', FBAuth, getUsers);

app.post('/user/chat', sendChat)



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest(app);
