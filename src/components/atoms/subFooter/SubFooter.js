import React from 'react'
import './subFooter.sass'


const subFooterBackGroundStyle = (image) => {
    const style = {
        background: ` linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.63) ), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    }
    return style;
}
const SubFooter = ({title, image, text, imagen}) => {
    return (
        <section style={subFooterBackGroundStyle(image)} className="subFooter">
            <h1 className="subFooter__title">{title}</h1>
            <p className="subFooter__paragraph">{text}</p>
        </section>
    )
}

export default SubFooter;