export const Inicio = () =>{
  const InicioDiv = document.createElement('div');
  const Titulo = document.createElement('h1');
  Titulo.id = 'Titulo';
  Titulo.textContent = '¡Bienvenida a Trasmuta!'
  const Slogan = document.createElement('h3');
  Slogan.textContent = '"transformando las emociones en poder"';
  Slogan.id = 'slogan';
  const ImagenInicioDeSesion = document.createElement('img');
  ImagenInicioDeSesion.id = 'ImagenInicioDeSesion';
  ImagenInicioDeSesion.src = '/lib/Assets/mounstruo.png'
  InicioDiv.append(Titulo);
  InicioDiv.append(Slogan);
  InicioDiv.append(ImagenInicioDeSesion);

  // div hijo
  const DivInicioDeSesion = document.createElement('div');
  DivInicioDeSesion.id = 'DivInicioDeSesion'
  const InicioSesion = document.createElement('h2');
  InicioSesion.textContent = 'Iniciar Sesion';
  InicioSesion.id = 'inicio-sesion';
  const CorreoElectronico = document.createElement('input'); 
  CorreoElectronico.textContent = 'Ingrese aqui su correo';
  CorreoElectronico.id = 'correo-electronico';
  const Contraseña = document.createElement('input');
  Contraseña.textContent = 'Ingrese aqui su contraseña';
  Contraseña.id = 'contraseña';
  const BotonIngresar = document.createElement('button');
  BotonIngresar.textContent = 'Ingresar'; 
  BotonIngresar.id = 'boton-ingresar';
  const Opcion = document.createElement('h5');
  Opcion.textContent = 'o';
  Opcion.className = 'letra-o';
  const TextoSinCuenta = document.createElement('h5');
  TextoSinCuenta.textContent = 'No te haz registrado aun.'
  TextoSinCuenta.className = 'textp-no-cuenta';
  const Registro = document.createElement('h5');
  Registro.textContent = 'Registrate aqui';
  Registro.className = 'registro';

  DivInicioDeSesion.appendChild(InicioSesion);
  DivInicioDeSesion.appendChild(CorreoElectronico);
  DivInicioDeSesion.appendChild(Contraseña);
  DivInicioDeSesion.appendChild(BotonIngresar);
  DivInicioDeSesion.appendChild(Opcion);
  DivInicioDeSesion.appendChild(TextoSinCuenta);
  DivInicioDeSesion.appendChild(Registro);
  InicioDiv.append(DivInicioDeSesion);

  return InicioDiv;
}; 