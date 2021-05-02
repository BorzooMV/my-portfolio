import React from 'react';
import myPic from '../../assets/images/pics/me.JPG';


const Intro = () => {
    return(
        <div className="Intro">
            <img src={myPic} />
            <h2>Something to remind</h2>
            <p>
                Enim excepteur qui Lorem ut elit.
                Minim est ex non eu adipisicing ut
                elit minim eu irure. Occaecat aute
                non tempor aute aliqua mollit laboris.
                Et id cupidatat fugiat in aliquip esse 
                nostrud dolor id do consequat deserunt.
                Eu pariatur enim consectetur ipsum. Do 
                illum occaecat adipisicing labore sint aute nisi labore aute. 
                Laborum magna exercitation
                exercitation laboris mollit sit fugiat repreh
                enderit.
            </p>
            
        </div>
    );
}

export default Intro;