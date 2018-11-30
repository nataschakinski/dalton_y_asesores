import React from 'react'
import './developSection.sass'
import ArticleDevelop from 'components/atoms/articleDevelop'
import imgDevelop from 'images/imgDevelop.jpg'


const DevelopSection = () => {
    return (
        <section className="developSec" id="desarrollo_de_software">
            <h1 className="title-develop">DESARROLLO WEB</h1>
            <ArticleDevelop
                image={imgDevelop}
                text="Un tour virtual hace interesante un sitio web, y un sitio web interesante atrae a más prospectos."
            />
        </section>

    )
}


export default DevelopSection;