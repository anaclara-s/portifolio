import { FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa'

import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-text' data-aos="fade-right">
                <h2>Sobre mim</h2>
                <p>
                    Sou formada em Análise e Desenvolvimento de Sistemas pela UNA e estou em busca da minha primeira oportunidade como desenvolvedora. Atualmente trabalho de forma autônoma/freelancer como desenvolvedora e analista de softwares, tradutora de inglês e técnica de manutenção de hardware.
                </p>
                <p>
                    Tenho experiência prática com desenvolvimento mobile, especialmente utilizando Dart/Flutter e Kotlin, em desenvolvimento web com React, CSS, HTML, JavaScript, além de conhecimentos sólidos em SQL, MySQL, PostgreSQL e Firebase.
                </p>
                <p>
                    Estou comprometida em evoluir constantemente, aprender novas tecnologias e contribuir com soluções eficientes para os desafios do time. Meu foco é atuar como desenvolvedora mobile ou full stack em ambientes colaborativos e de constante aprendizado.
                </p>
            </div>

            <div className="about-icons" data-aos="fade-up">

                <div className="icon-block">
                    <span className="circle"></span>
                    <div className="icon-content">
                        <FaMobileAlt className="about-icon" />
                        <span>Desenvolvimento Mobile</span>
                    </div>
                </div>

                <div className="icon-block">
                    <span className="circle"></span>
                    <div className="icon-content">
                        <FaLaptopCode className="about-icon" />
                        <span>Desenvolvimento Web</span>
                    </div>
                </div>

                <div className="icon-block">
                    <span className="circle"></span>
                    <div className="icon-content">
                        <FaDatabase className="about-icon" />
                        <span>Desenvolvemento Back-end</span>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;
