/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-cycle
import { post } from '../lib/firestore.js';
import { signOut } from '../lib/firebaseAuth.js';

export const muro = () => {
  const homeDiv = document.createElement('div');
  homeDiv.id = 'homeDiv';
  const tituloHome = document.createElement('h1');
  tituloHome.id = 'marcaMuro';
  tituloHome.textContent = 'TRANSMUTA';
  const publicar = document.createElement('textarea');
  publicar.className = 'publicar';
  const botonPublicar = document.createElement('button');
  botonPublicar.textContent = 'Publicar';
  botonPublicar.id = 'boton-publicar';
  botonPublicar.addEventListener('click', () => {
    post(publicar.value);
    console.log(publicar.value);
  });

  const publicarDiv = document.createElement('div');
  publicarDiv.id = 'publicarDiv';
  const botonSalir = document.createElement('button');
  botonSalir.textContent = 'Cerrar sesión';
  botonSalir.id = 'boton-salir';
  botonSalir.addEventListener('click', () => {
    signOut();
  });
  homeDiv.appendChild(tituloHome);
  homeDiv.appendChild(publicar);
  homeDiv.appendChild(botonPublicar);
  homeDiv.appendChild(publicarDiv);
  homeDiv.appendChild(botonSalir);

  return homeDiv;
};
