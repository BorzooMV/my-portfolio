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
            <Skill name={skills[0].name} icon={skills[0].icon} proficiency={skills[0].proficiency} />
            <Skill name={skills[1].name} icon={skills[1].icon} proficiency={skills[1].proficiency}/>
            <Skill name={skills[2].name} icon={skills[2].icon} proficiency={skills[2].proficiency}/>
        </div>
    );
}

export default Skills;