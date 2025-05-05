import './Skills.css';
import skills from './SkillsIcons';

const Skills = () => {
    return (
        <div className="skills-container">

            <h2 className="title">Habilidades</h2>
            <p className="description">As habilidades, ferramentas e tecnologias que uso:</p>
            
            <div className="groups" >
                {Object.entries(skills).map(([group, items]) => (
                    <div className="group" key={group}  data-aos="flip-right">
                        <h3>{group}</h3>
                        <div className="icons">

                            {items.map(({ name, icon: Icon }) => (
                                <div className="icon-wrapper" key={name}>
                                    <div className="icon">
                                        <Icon size={40} />
                                    </div>
                                    <span className="tooltip">{name}</span>
                                </div>
                            ))}


                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Skills;
