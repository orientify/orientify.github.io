// Initialize Firebase
var config = {
    apiKey: "AIzaSyALh9SrPLPXUJuRW2dVtR_dKVvQXDhmRS0",
    authDomain: "suva-6c5b6.firebaseapp.com",
    databaseURL: "https://suva-6c5b6.firebaseio.com",
    projectId: "suva-6c5b6",
    storageBucket: "suva-6c5b6.appspot.com",
    messagingSenderId: "69179275064"
};
firebase.initializeApp(config);
console.log("ssd");
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("signed in");
    } else {
        window.location = "https://orientify.github.io/index.html";
    }});



var provider = new firebase.auth.GoogleAuthProvider();
function signInToGoogle() {
    firebase.auth().signInWithRedirect(provider);
};
function signOutFromGoogle() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    }); 
}
