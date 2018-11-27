import React from 'react'
import './tutorialesSection.sass';
import ArticleTutoriales from 'components/atoms/articleTutoriales';


const TutorialesSection = () => {
    return (
        <section className="Tutoriales">
            <h1 className= "title-tutoriales">TUTORIALES</h1>
            <ArticleTutoriales
                iframe='<iframe width="560" height="315" src="https://www.youtube.com/embed/dQ0oAPEUPzg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            />
            <ArticleTutoriales
                iframe='<iframe width="560" height="315" src="https://www.youtube.com/embed/jzInOJTjJKc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            />
            <ArticleTutoriales
                iframe='<iframe width="560" height="315" src="https://www.youtube.com/embed/bHOs-IL_Y44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            />
            <ArticleTutoriales
                iframe='<iframe width="560" height="315" src="https://www.youtube.com/embed/3FEOjNc6vvY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            />
            <ArticleTutoriales
                iframe='<iframe width="560" height="315" src="https://www.youtube.com/embed/4Wp4xStLXR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            />
            <ArticleTutoriales
                iframe='<iframe width="560" height="315" src="https://www.youtube.com/embed/-IXYw4CiK0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            />
        </section>            

    )
}

export default TutorialesSection;