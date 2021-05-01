import React from 'react';

const Skill = (props) => {
    return (
        <div className="Skill">
            <div className="Skill-info">
                <h3>{props.name}</h3>
                <input type="range" min="1" max="100" readOnly value={props.proficiency} />
            </div>
            <i className={props.icon}></i>

        </div>
    );
}

export default Skill;