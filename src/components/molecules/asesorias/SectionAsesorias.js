import React from 'react'

import aserorias from 'images/asesorias.jpg'
import './sectionAsesorias.sass';
import ArticleAsesorias from 'components/atoms/articleAsesorias';


const SectionAsesorias = () => {
        return (
            <section className="asesorias">
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