import firebase from './secret.js';

const db = firebase.firestore();
export const getData = () => db.collection('muta')
  .get();

export const post = (texto) => {
  db.collection('muta').doc().set({
    texto,
  });
};
