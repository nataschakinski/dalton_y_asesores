import React from 'react';
import './virtualSection.sass';
import ArticleVirtual from 'components/atoms/articleVirtual';


const VirtualSection= () => {
    return (
        <section className="virtualSec">
            <h1 className= "title-recorrido">RECORRIDO VIRTUAL</h1>
            <ArticleVirtual
                image="https://media.cylex.com.co/companies/1112/6243/news/asesoria-empresarial_103117_large.jpg" 
                text="Somos una empresa especializada que presta los servicios personalizados de asesoría, 
                    consultoría y capacitación a pequeñas, medianas y grandes empresas de diferentes
                    sectores económicos a nivel Nacional"
                title ="ASESORIA EMPRESARIAL"
            />
            <ArticleVirtual
                image="https://haroconsultores.com.mx/imagenes/contenidos/recorridovirtual/recorridovirtual-cabeza.jpg" 
                text="¡Nosotros nos encargamos de todo! desde el levantamiento fotográfico 360º de las instalaciones
                        hasta su publicación en Google Maps."
                title ="RECORRIDOS VIRTUALES"
            />
            
        </section>            

        )
    }


export default VirtualSection;