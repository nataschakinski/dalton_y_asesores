import React from 'react'
import './softwareAdmon.sass';
import ArticleSofware from 'components/atoms/articleSoftware';


const SoftwareAdmon = () => {
    const widthElementSection = window.innerWidth
    let heightSize = "515"
    let width = "760"
    if (widthElementSection < 640) {
        heightSize = "350"
    }
    return (
        <section className="Software" id="software_administrativo">
            <ArticleSofware
                iframe={`<iframe width="100%" height=${heightSize} src="https://www.youtube.com/embed/HAglNnUnMxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}
                text="Trabajamos a la medida de su empresa, otorgamos el Software a su medida con el fin de que 
                    pueda manejar todo su negocio a la medida de su mano"
                title ="SOFTWARE ADMINISTRATIVO"
            />
        </section>            

    )
}

export default SoftwareAdmon;