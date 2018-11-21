import React from 'react'

import imgSoftwareAdmon from 'images/imgSoftwareAdmon.jpg'
import './softwareAdmon.sass';
import ArticleSofware from 'components/atoms/articleSoftware';


const SoftwareAdmon = () => {
        return (
            <section className="Software">
                <ArticleSofware
                    image={imgSoftwareAdmon} 
                    text="Trabajamos a la medida de su empresa, otorgamos el Software a su medida con el fin de que 
                        pueda manejar todo su negocio a la medida de su mano"
                    title ="SOFTWARE ADMINISTRATIVO"
                />
            </section>            

        )
    }

export default SoftwareAdmon;