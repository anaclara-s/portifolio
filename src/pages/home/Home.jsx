import './Home.css';
import illustration from '../../assets/home/illustration.png'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-wrapper'>

                <div className='text-section'>
                    <p className='intro-text'>Olá, meu nome é Ana Clara sou</p>
                    <h1 className='typing-text'>Desenvolvedora Mobile</h1>
                </div>

                <div className='image-section'>
                    <div className='image-wrapper'>
                        <img src={illustration} alt="Ilustração" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;