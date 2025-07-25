// Importamos React, necesario para usar JSX y crear componentes
import React from 'react';
// Importamos ReactDOM desde el cliente, para renderizar componentes en el DOM real
import ReactDOM from 'react-dom/client';
// Importamos el componente principal de la aplicación, definido en App.js
import App from './App';

// Creamos una raíz de React asociada al elemento con id 'root' del HTML (así montamos nuestra app)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App dentro del contenedor 'root'
// Este es el punto de entrada principal de la aplicación
root.render(<App />);
