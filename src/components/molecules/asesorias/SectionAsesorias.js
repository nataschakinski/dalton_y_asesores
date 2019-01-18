import React from 'react'

import aserorias from 'images/asesorias.jpg'
import './sectionAsesorias.sass';
import ArticleAsesorias from 'components/atoms/articleAsesorias';

const styleBackground = () => {
    const widthElementSection = window.innerWidth
    let bgSize = "100% 100%"
    if (widthElementSection < 640) {
        bgSize = "cover"
    }
    const bgStyle = {

        background: ` linear-gradient(rgba(0, 170, 255, 0.49), rgba(0, 0, 0, 0.63) ), url(${aserorias})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: bgSize
    }

    return bgStyle;
}

const SectionAsesorias = () => {
        return (
            <section style={styleBackground()} className="asesorias" id="asesorias">
                <ArticleAsesorias
                    image={aserorias} 
                    text="Contamos con un grupo de expertos asesores en diferentes temas de la organización,
                     para brindarle un servicio integral en Gerencia, Talento Humano, Comercial, Mercadeo,
                     Procesos, Tributario, Contable y Legal."
                    title ="ASESORIAS EMPRESARIALES"
                />
            </section>            

        )
    }


export default SectionAsesorias;