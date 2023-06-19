import './App.css';
import Secciones from './Funciones/seccion1';
import Secciones2 from './Funciones/seccion2';
import Background from "./Multimedia/Background.mp4"
import CArte from "./Multimedia/Logo CArte.png"
import React, { useState } from 'react';


export function Sections({ section }) {
  switch (section) {
    case 'startSection':
      return (<Secciones
        titulo="¡Somos CArte!"
        articulop1="Bienvenido/a a nuestra empresa de estampado ubicada en Cumaral, donde ofrecemos servicios de creación y estampado de diseños personalizados en una amplia variedad de productos como ropa, gorras, tazas y mucho más. Utilizamos el método de sublimación para asegurar una calidad duradera en los productos que ofrecemos."
        articulop2="Nos enorgullece ofrecer un servicio rápido y confiable. Ya sea que esté buscando una forma de promocionar su empresa o simplemente quiera crear un regalo personalizado y especial, nuestro equipo está aquí para ayudarlo/a a llevar a cabo su proyecto con éxito. ¡Contáctenos hoy para comenzar a crear su diseño personalizado!"
        titulo2="¿Que es la sublimación?"
        articulop3="La sublimación en ropa es un proceso de impresión que permite transferir imágenes, diseños y patrones de manera permanente a tejidos sintéticos como el poliéster. A diferencia de otros métodos de impresión, como la serigrafía o el vinilo, la sublimación utiliza tintas especiales que se convierten en gas cuando se aplican calor y presión. Estas tintas se adhieren a nivel molecular a las fibras del tejido, creando un resultado duradero y de alta calidad."
        articulop4="Además de la calidad y la variedad de diseños, la sublimación ofrece otros beneficios. Los colores no se desvanecen con el tiempo ni se desprenden con el lavado, lo que garantiza que la prenda mantenga su apariencia original a lo largo del tiempo. También es un proceso respetuoso con el medio ambiente, ya que no utiliza disolventes químicos dañinos y produce un desperdicio mínimo."
      />)
    case 'contactSection':
      return <Secciones2 />
    default:
      break;
  }
}

function App() {
  const [showSection, setshowSection] = useState('startSection')

  return (
    <div className="App">
      <video className='videofondo' autoPlay muted loop >
        <source src={Background} type='video/mp4' />
      </video>
      <center className='contenerdorCarte animate__animated animate__backInDown'>
        <a href=''>
          <img className="Carte"
            src={CArte} />
        </a>
      </center>
      <div className='menu animate__animated animate__backInDown'>
        <ul className='listado' >
          <a className='Inicio' onClick={() => setshowSection('startSection')}>Inicio </a>
          <a id='contacto' className='Contacto' onClick={() => setshowSection('contactSection')}>Contacto</a>
          <a href="https://danibas2004.github.io/CArteProductos/" target='_blank' id='productos' className='Productos'>Productos</a>
        </ul>
      </div>

      <Sections section={showSection} />

    </div>

  );
}

export default App;
