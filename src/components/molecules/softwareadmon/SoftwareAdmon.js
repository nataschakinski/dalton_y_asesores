import React from 'react'

import Merlin from 'images/Merlin.png'
import './softwareAdmon.sass';
import ArticleSofware from 'components/atoms/articleSoftware';


const SoftwareAdmon = () => {
        return (
            <section className="Software">
                <ArticleSofware
                    iframe='<iframe width="560" height="315" src="https://www.youtube.com/watch?v=HAglNnUnMxY&feature=youtu.be" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>'
                    text="Trabajamos a la medida de su empresa, otorgamos el Software a su medida con el fin de que 
                        pueda manejar todo su negocio a la medida de su mano"
                    title ="SOFTWARE ADMINISTRATIVO"
                />
            </section>            

        )
    }

export default SoftwareAdmon;