import { Link } from "react-router-dom";

import '../styles/home.css';

const Home = () => {
    return (
        <>
            <div className="text-center">
                <h1 className="mt-5 text-5xl font-bold text-white">Novelite Archive</h1>
                <p className="text-center text-light-gray text-s">Welcome to the (unofficial) Shiorin archive!</p>
            </div>

            <div className="relative justify-center flex mt-10 mx-6">
                <div className="home-buttons-container">
                    <Link to="/stories">
                        <button className="purple-shadow p-1 vn-button-style">
                            "A story."
                        </button>
                    </Link>
                    <div></div>
                    <Link to="/stories/archive">
                        <button className="purple-shadow p-1 my-1 vn-button-style">
                            "The story archive."
                        </button>
                    </Link>
                </div>
                <img
                    src="https://res.cloudinary.com/djt3fic8i/image/upload/v1692760127/novelite-shiori-homepage-vn.png"
                    alt="shiori dialogue"
                    className="rounded-lg mx-auto border-x-4 border-light-purple"
                />
            </div>

            <div>
                <p className="text-center text-light-gray text-xs mt-1">
                    More to come soon(?)
                </p>
            </div>
        </>
    )
};

export default Home
