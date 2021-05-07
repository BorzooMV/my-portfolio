import React,{ useState } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills,setSkills] = useState([
        {
            name:"HTML",
            icon:"fab fa-html5",
            proficiency:"90"
        },
        {
            name:"CSS",
            icon:"fab fa-css3-alt",
            proficiency:"80"
        },
        {
            name:"Sass",
            icon:"fab fa-sass",
            proficiency:"70"
        },
        {
            name:"JavaScript",
            icon:"fab fa-js-square",
            proficiency:"60"
        },
        {
            name:"React",
            icon:"fab fa-react",
            proficiency:"60"
        },
        {
            name:"Bootstrap",
            icon:"fab fa-bootstrap",
            proficiency:"50"
        },
        {
            name:"Git",
            icon:"fab fa-git",
            proficiency:"50"
        },
        {
            name:"Php",
            icon:"fab fa-php",
            proficiency:"30"
        },
        {
            name:"Linux",
            icon:"fab fa-linux",
            proficiency:"20"
        }
    ]);
    return(
        <div className="Skills">
            <h2>Proficiency</h2>
            {
                skills.map((skill, i)=>{
                    return <Skill key={i} name={skill.name} proficiency={skill.proficiency} icon={skill.icon} />
                })
            }
        </div>
    );
}

export default Skills;