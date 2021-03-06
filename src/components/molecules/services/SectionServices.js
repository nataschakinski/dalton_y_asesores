import React from 'react'

//import Mapa from 'images/map.jpg'
import './sectionServices.sass';
import ArticleServ from 'components/atoms/article';
import Dalton from 'images/Dalton.png'
import google from 'images/google.png'
import Merlin from 'images/Merlin.png'


const SectionServices= () => {

    function onHandleClikServices(id) {
        window.location.hash = `#${id}`;
    }
     
    return (
        <section className="services" id="servicios">
            <h1 className="titleServices">NUESTROS SERVICIOS</h1>
            <ArticleServ
                onHandleClikServices={() => onHandleClikServices("asesorias")}
                image={Dalton} 
                text="Somos una empresa especializada que presta los servicios personalizados de asesoría, 
                    consultoría y capacitación a pequeñas, medianas y grandes empresas de diferentes
                    sectores económicos a nivel Nacional"
                title ="ASESORIA EMPRESARIAL"
            />
            <ArticleServ
                onHandleClikServices={() => onHandleClikServices("recorridos_virtuales")}
                image={google}
                text="¡Nosotros nos encargamos de todo! desde el levantamiento fotográfico 360º de las instalaciones
                        hasta su publicación en Google Maps."
                title ="RECORRIDOS VIRTUALES"
            />
            <ArticleServ
                onHandleClikServices={() => onHandleClikServices("software_administrativo")}
                image={Merlin} 
                text="Creación ilimitada de Bases de Datos que le permite administrar de forma independiente
                        la información de cada empresa, tambien le permite la creación ilimitada de empresas
                        y desde la aplicación puede manejar todas las empresas que necesite."
                title ="SOFTWARE ADMINISTRATIVO"
            />
            <ArticleServ
                onHandleClikServices={() => onHandleClikServices("desarrollo_de_software")}
                image="https://i.ytimg.com/vi/5zNO0lGKUXs/maxresdefault.jpg" 
                text="Diseñamos páginas para su negocio o empresa, nuestro objetivo, entregar un producto único y de alto valor"
                title ="DESARROLLO WEB"
            />
            <ArticleServ
                onHandleClikServices={() => onHandleClikServices("tarifas")}
                image="https://www.hestanto.web.id/wp-content/uploads/2018/05/Definisi-Perencanaan-dan-Pengendalian-Produksi.jpg" 
                text="Te ofrecemos la solución más completa para que compres tus planes de desarrollo para tu empresa."
                title ="TARIFAS"
            />
            <ArticleServ
                onHandleClikServices={() => onHandleClikServices("tutoriales")}
                image="https://storage.googleapis.com/think/images/00LATAM/201509/tutoriales-en-youtube1_hero.jpg" 
                text="¿Sabes cómo vender en Amazon? Crear una cuenta en este gigantesco MarketPlace 
                y comercializar allí tus propios productos, es una forma ideal de aprovechar la gran 
                relevancia que él posee y la confianza que genera comprar en esta plataforma. ¡Te Enseñamos!"
                title ="TUTORIALES"
            />
        </section>            

    )
}


export default SectionServices;