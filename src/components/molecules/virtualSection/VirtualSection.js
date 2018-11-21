import React from 'react';
import './virtualSection.sass';
import ArticleVirtual from 'components/atoms/articleVirtual';
import recorridovirtual1 from 'images/recorridovirtual1.jpg'
import recorridovirtual2 from 'images/recorridovirtual2.jpg'


const VirtualSection= () => {
    return (
        <section className="virtualSec">
            <h1 className= "title-recorrido">RECORRIDO VIRTUAL</h1>
            <ArticleVirtual
                image={recorridovirtual1}
                text="Un tour virtual hace interesante un sitio web, y un sitio web interesante atrae a más prospectos."
            />
            <ArticleVirtual
                texto="¡Nosotros nos encargamos de todo! desde el levantamiento fotográfico 360º de las instalaciones
                        hasta su publicación en Google Maps."
                imagen={recorridovirtual2} 
            />
            
        </section>            

        )
    }


export default VirtualSection;