import firebase from './secret.js';

export function crateAccountWithEmail() {
  const formRegistro = document.querySelector('#formRegistro');
  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.querySelector('#c-electronico').value;
    console.log(correo);
    const contraseña = document.querySelector('.contraseña').value;
    console.log(contraseña);
    firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        formRegistro.reset();
        console.log(user);
        // ...
      });
  })
    .catch((error) => {
      console.log(error);
    // ..
    });
}

const providerGoogle = new firebase.auth.GoogleAuthProvider();

export function googleBotonFun() {
  firebase.auth()
    .signInWithPopup(providerGoogle)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(credential);
    // ...
    }).catch((error) => {
      console.log(error);
      // Handle Errors here.
      /* const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    // ... */
    });
}
