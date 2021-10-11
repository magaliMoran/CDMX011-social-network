import { onNavigate } from '../main.js';

export const registro = () => {
  const registroDiv = document.createElement('div');
  registroDiv.id = 'divRegistro';
  const titulo = document.createElement('h1');
  titulo.id = 'titulo';
  titulo.textContent = '¡Registrate!';
  const registroForm = document.createElement('form');
  registroForm.id = 'formRegistro';
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
  botonCrearCuenta.textContent = 'home';
  botonCrearCuenta.id = 'boton-crear-cuenta';
  const homeImagen = document.createElement('img');
  homeImagen.textContent = 'Crear cuenta';
  homeImagen.id = 'boton-crear-cuenta';
  // eslint-disable-next-line no-undef
  botonCrearCuenta.addEventListener('click', () => onNavigate('/'));

  const botonEnviarInfo = document.createElement('button');
  botonEnviarInfo.textContent = 'Enviar';
  botonEnviarInfo.id = 'botonEnviarInfo';
  botonEnviarInfo.addEventListener('click', () => {
    const nombreInfo = document.getElementById('nombreRegistro').value;
    console.log(nombreInfo);
  });

  
  registroForm.append(nombre);
  registroForm.append(correoElectronico);
  registroForm.append(contraseña);
  registroForm.append(botonCrearCuenta);
  registroDiv.append(titulo);
  registroDiv.append(registroForm);
  registroDiv.append(homeImagen);

  return registroDiv;
};
