const functions = require('firebase-functions');
const dataUpload = require("./dataUpload")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.test = functions.https.onRequest((request, response) => {
    dataUpload.testConnection(response);
});
