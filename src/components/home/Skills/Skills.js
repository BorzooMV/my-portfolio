import React,{ useState } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills,setSkills] = useState([
        {
            name:"React",
            icon:"fab fa-react",
            proficiency:"60"
        },
        {
            name:"HTML",
            icon:"fab fa-html5",
            proficiency:"80"
        },
        {
            name:"JavaScript",
            icon:"fab fa-js",
            proficiency:"70"
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