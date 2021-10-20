/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { crateAccountWithEmail } from '../lib/firebaseAuth.js';

export const registro = () => {
  const registroDiv = document.createElement('div');
  registroDiv.id = 'divRegistro';
  const titulo = document.createElement('h1');
  titulo.id = 'titulo';
  titulo.textContent = '¡Registrate!';
  const formRegistro = document.createElement('form');
  formRegistro.id = 'formRegistro';
  const nombre = document.createElement('input');
  nombre.placeholder = 'Nombre';
  nombre.id = 'nombreRegistro';
  nombre.type = 'text';
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
  homeImagen.src = '/Assets/home3.png';
  homeImagen.addEventListener('click', () => onNavigate('/'));
  formRegistro.append(correoElectronico);
  formRegistro.append(contraseña);
  formRegistro.append(botonCrearCuenta);
  registroDiv.append(titulo);
  registroDiv.append(nombre);
  registroDiv.append(formRegistro);
  registroDiv.append(homeImagen);
  return registroDiv;
};
