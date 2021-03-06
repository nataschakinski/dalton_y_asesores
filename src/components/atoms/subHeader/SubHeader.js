import React from 'react'
import Typist from 'react-typist';
import './subHeader.sass'

const subHeaderBackGroundStyle = (image) => {
    const widthElement = window.innerWidth
    let bgSize = "100% 100%"
    if (widthElement < 640) {
        bgSize = "contain"
    }
    const style = {
        background: ` linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.63) ), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: bgSize
    }
    return style;
}

const SubHeader = ({ title, image, text }) => {
    return (
        <section style={subHeaderBackGroundStyle(image)} className="subHeader">
            <Typist className="subHeader__title" cursor={{ show: false }}>
                {title}
            </Typist>
            <Typist className="subHeader__paragraph" cursor={{ show: false }}>
                <Typist.Delay ms={2300} />
                {text}
            </Typist>
        </section>
    )
}

export default SubHeader;