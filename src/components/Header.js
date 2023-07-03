// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Chinmai Siddhartha" />

            <div className='header__content'>
                <h1>Hi, I'm Chinmai Siddhartha</h1>
                <p>Blockchain Developer</p>
                <br></br>
                <a href="mailto:chinmaisiddhartha@protonmail.com" className="button">Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;