import React from 'react'

import aserorias from 'images/asesorias.jpg'
import './sectionAsesorias.sass';
import ArticleAsesorias from 'components/atoms/articleAsesorias';

const styleBackground = {
    background: ` linear-gradient(rgba(0, 170, 255, 0.49), rgba(0, 0, 0, 0.63) ), url(${aserorias})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "100% 100%"
}

const SectionAsesorias = () => {
        return (
            <section style={styleBackground} className="asesorias">
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