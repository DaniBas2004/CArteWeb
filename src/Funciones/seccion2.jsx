import React from "react";
import "../estilos/seccion2.css";



function Secciones2(){
    return (
<section className="seccioncontacto"   >
    <div className="contenedorSeccioncontacto animate__animated animate__backInUp">
    
            <p className="introduccion">
                ¡Comunicate con nosotros y solicita tu estampado Ya! <br /> Nos puedes contactar a los siguientes medios:
            </p>
    <div className="contenedorredes">

        <a contenedorlogo1>
            <img className="logoinsta" 
        src={require("../Multimedia/logoinstagram.png")}/>
        </a>

        <a contenedorlogo2 href="https://www.facebook.com/profile.php?id=100063358993977">
            <img className="logofacebook" 
        src={require("../Multimedia/My project-1 (2).png")}/>
        </a>

        <a contenedorlogo3 href="https://wa.me/573228962152?">
            <img className="logowhatsapp" 
        src={require("../Multimedia/iconowhatsapp (2).png")}/>
        </a>

    </div>
    <center className="ncontacto">
                Tambien nos pueden contactar directamente a nuestro numero telefonico:   <a  className="numero" href="tel:3228962152"> 3228962152</a>
            </center>
  
        
        
    </div>
    
</section>
    );
}











export default Secciones2;