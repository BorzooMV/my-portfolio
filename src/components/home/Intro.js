import React from 'react';
import myPic from '../../assets/images/pics/me.JPG';
import { Link } from 'react-router-dom';

const Intro = () => {
    return(
        <div className="Intro">
            <div>
                <img src={myPic} />
            </div>
            <h2>Little about me</h2>
            <p>As far as I remember there were two things that kept me awake at night and brought me out of despair and anxiety. Art and problem solving.</p>
            <Link className="Intro_Read_More" to="/about">Read more</Link>
            
        </div>
    );
}

export default Intro;