// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>StandAgainstWar</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>"Stand Against War" is an NFT Collection advocating for peace and promoting nonviolent solutions to global conflicts.
                    </p>

                    <a href="https://www.standagainstwar.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/chinmaisiddhartha/NFT-Collection-with-royalties" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>GamingArcade</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>"Gaming Arcade" is a website offering a wide range of online play to earn games, providing entertainment and fun for gaming enthusiasts.
                    </p>

                    <a href="https://gamingarcade.io/" target="_blank" className="button">Site</a>
                    <a href="https://polygonscan.com/address/0x04e3aad06d65514b5189b0259819d7b93fc9fd4d#code" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>KhonsuFund</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>"Khonsu Fund" is an on chain asset management platform for crowdfunding and investment opportunities in various innovative and impactful projects
                    </p>

                    <a href="https://www.khonsu.fund/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/chinmaisiddhartha/khonsu-clone" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;