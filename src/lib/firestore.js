import firebase from './secret.js';

const db = firebase.firestore();
export const post = (texto) => {
  db.collection('publicaciones').doc().set({
    texto,
  });
};
