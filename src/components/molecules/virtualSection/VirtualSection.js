import React from 'react';
import './virtualSection.sass';
import ArticleVirtual from 'components/atoms/articleVirtual';

const VirtualSection= () => {
    const widthElementSection = window.innerWidth
    let heightSize = "450"
    if (widthElementSection < 640) {
        heightSize = "300"
    }
    return (
        <section className="virtualSec" id="recorridos_virtuales">
            <h1 className= "title-recorrido">RECORRIDO VIRTUAL</h1>
            <ArticleVirtual
                iframe={`<iframe src="https://www.google.com/maps/embed?pb=!4v1542899603448!6m8!1m7!1sCAoSLEFGMVFpcE5SR1pVbjVmS1lDaDNxSEpHbkJqdVEybDdUWi0wclpYSmtXczJ1!2m2!1d4.120208596560055!2d-73.61611946498748!3f193.7926176376239!4f-0.8075880309457943!5f0.7820865974627469" width="100%" height=${heightSize} frameBorder="0" style={{border:0}} allowFullScreen></iframe>`}
                text="Un tour virtual hace interesante un sitio web, y un sitio web interesante atrae a más prospectos."
            />
            <ArticleVirtual
                isInverse
                text="¡Nosotros nos encargamos de todo! desde el levantamiento fotográfico 360º de las instalaciones
                        hasta su publicación en Google Maps."
                iframe={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.023059337793!2d-73.61613797196547!3d4.120385101528762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d8163719a58a877!2sRestaurante+El+Cabrestero!5e0!3m2!1ses!2sco!4v1542900568587" width="100%" height=${heightSize} frameborder="0" style="border:0" allowfullscreen></iframe>`}
            />
            <ArticleVirtual
                text="¡Nosotros nos encargamos de todo! desde el levantamiento fotográfico 360º de las instalaciones
                        hasta su publicación en Google Maps."
                iframe={`<iframe src="https://www.google.com/maps/embed?pb=!4v1542902073577!6m8!1m7!1sCAoSLEFGMVFpcE9UNHhpSlVWYTZESVZpOGxRMWxseHFBUXlTMFRlVVg1aHRuVHhs!2m2!1d19.45578096486965!2d-99.12910445155393!3f300.2470859367092!4f-22.179856418275094!5f0.5970117501821992" width="100%" height=${heightSize} frameborder="0" style="border:0" allowfullscreen></iframe>`}
            />
        </section>            

        )
    }


export default VirtualSection;