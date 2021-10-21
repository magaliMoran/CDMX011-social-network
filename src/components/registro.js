/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/named
import { crateAccountWithEmail } from '../lib/firebaseAuth.js';
// import { onSingIn } from '../lib/authGoogle.js';

export const registro = () => {
  const registroDiv = document.createElement('div');
  registroDiv.id = 'divRegistro';
  const titulo = document.createElement('h1');
  titulo.id = 'titulo';
  titulo.textContent = 'Transmuta';
  const registrate = document.createElement('h2');
  registrate.textContent = 'Registrate';
  registrate.id = 'registrate';
  const imagenInicioDeSesion = document.createElement('img');
  imagenInicioDeSesion.id = 'imagenInicioDeSesion';
  imagenInicioDeSesion.src = '/Assets/mounstruo.png';
  const formRegistro = document.createElement('form');
  formRegistro.id = 'formRegistro';
  const nombre = document.createElement('input');
  nombre.placeholder = 'Nombre';
  nombre.id = 'nombreRegistro';
  nombre.type = 'text';
  apellido.type = 'text';
  const correoElectronico = document.createElement('input');
  correoElectronico.placeholder = 'Correo electronico';
  correoElectronico.id = 'c-electronico';
  correoElectronico.type = 'email';
  const contraseña = document.createElement('input');
  contraseña.placeholder = 'Contraseña';
  contraseña.type = 'password';
  contraseña.className = 'contraseña';
  const botonCrearCuenta = document.createElement('button');
  botonCrearCuenta.textContent = 'Crear cuenta';
  botonCrearCuenta.id = 'boton-crear-cuenta';
  botonCrearCuenta.addEventListener('click', () => {
    crateAccountWithEmail();
  });
  const homeImagen = document.createElement('img');
  homeImagen.textContent = 'Crear cuenta';
  homeImagen.id = 'homeImagen';
  homeImagen.src = '/Assets/home.png';
  homeImagen.addEventListener('click', () => onNavigate('/'));
  formRegistro.append(registrate);
  formRegistro.append(nombre);
  formRegistro.append(correoElectronico);
  formRegistro.append(contraseña);
  formRegistro.append(botonCrearCuenta);
  registroDiv.append(titulo);
  registroDiv.append(imagenInicioDeSesion);
  registroDiv.append(formRegistro);
  registroDiv.append(homeImagen);
  return registroDiv;
};
