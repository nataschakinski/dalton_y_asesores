import React from 'react'
import './tarifasSection.sass';
import TarifasArticle from 'components/atoms/articleTarifas';
import Dalton from 'images/Dalton.png'
import google from 'images/google.png'
import Merlin from 'images/Merlin.png'


const TarifasSection= () => {
        return (
            <section className="tarifas">
                <h1 className="titleTarifas">TARIFAS </h1>
                <TarifasArticle
                    image={Dalton} 
                    text="50.000.000"
                    title ="PLAN BASICO"
                />
                <TarifasArticle
                    image={google}
                    text="$100.000.000"
                    title ="PLAN INTERMEDIO"
                />
                <TarifasArticle
                    image={Merlin} 
                    text="Contactanos"
                    title ="PLAN PREMIUM"
                />
            </section>            

        )
    }


export default TarifasSection;