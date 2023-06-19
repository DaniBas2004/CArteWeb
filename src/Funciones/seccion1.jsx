import React from "react";
import "../estilos/seccion1.css";


  


function Secciones({titulo,articulop1,articulop2,titulo2,articulop3,articulop4}){
    return (
<section id="seccioninicio" className="seccioninicio animate__animated animate__backInDown" >
    <div className="contenedorSeccion">
        <div className="contenedortexto">

            <p className="nombre-subtitulo">{titulo}</p>
            <img className="CArte" 
        src={require("../Multimedia/familiaestampadomario.png")}/>
            <p className="texto-articulo">{articulop1}<br/><br/> {articulop2} </p>
            
            <p className="nombre-subtitulo">{titulo2}</p>
            <img className="CArte1" 
        src={require("../Multimedia/favicon.png")}/>
            <p className="texto-articulo">{articulop3}<br/><br/> {articulop4} </p>

        </div>
    </div>
</section>
    );
}
export default Secciones;