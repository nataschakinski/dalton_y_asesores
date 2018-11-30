import React from 'react'
import './softwareAdmon.sass';
import ArticleSofware from 'components/atoms/articleSoftware';


const SoftwareAdmon = () => {
        return (
            <section className="Software" id="software_administrativo">
                <ArticleSofware
                    iframe='<iframe width="760" height="515" src="https://www.youtube.com/embed/HAglNnUnMxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    text="Trabajamos a la medida de su empresa, otorgamos el Software a su medida con el fin de que 
                        pueda manejar todo su negocio a la medida de su mano"
                    title ="SOFTWARE ADMINISTRATIVO"
                />
            </section>            

        )
    }

export default SoftwareAdmon;