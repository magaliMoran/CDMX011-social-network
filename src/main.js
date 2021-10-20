import { inicio } from './Component/Iniciar.js';
import { muro } from './Component/Muro.js';
import { registro } from './Component/Registro.js';


const rootDiv = document.getElementById('root');

const rutas = {
  '/': inicio,

  '/registro': registro,
  '/muro': muro,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(rutas[window.location.pathname]());
};
const component = rutas[window.location.pathname];


 
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(rutas[window.location.pathname]());
};


