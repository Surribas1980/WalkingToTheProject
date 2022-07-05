import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-JFk-0O3oVUZZbhj-sEkk1w2WwznfLv4",
    authDomain: "proba0-bc33f.firebaseapp.com",
    databaseURL: "https://proba0-bc33f-default-rtdb.firebaseio.com",
    projectId: "proba0-bc33f",
    storageBucket: "proba0-bc33f.appspot.com",
    messagingSenderId: "220664389556",
    appId: "1:220664389556:web:8a607945979f353510dce1",
    measurementId: "G-SM3FBZYJLP"
  };
  
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://proba0-bc33f.firebaseapp.com/',
    // This must be true.
    handleCodeInApp: true,
  
    dynamicLinkDomain: 'https://proba0-bc33f.firebaseapp.com/',
  };
  const creoUser = function (autorizacion, email, password) {
    createUserWithEmailAndPassword(autorizacion, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
  
        console.log('user creado? ', user);
        console.log('userCredential: ', userCredential);
        sendEmailVerification(autorizacion.currentUser)
          .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            console.log('en pricipio enviado???');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  
  const signInFirebase = function (autorizacion, email, password) {
    signInWithEmailAndPassword(autorizacion, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
  
        console.log('logueado ?', user.emailVerified);
        return user.emailVerified;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  
  const saLir = function (autorizacion) {
    signOut(autorizacion)
      .then(() => {
        // Sign-out successful.
        console.log('salida');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  export {firebaseConfig, creoUser, signInFirebase, saLir}