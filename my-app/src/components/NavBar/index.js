// in the navbar use a list to display the items here i didn't used anylist to display

import "./index.css";

const NavBar = props => {
    const {topScore,timeElapsedInSeconds} = props 

    return (
        <nav className="nav-bar-container">
            <div className="title-with-score-container">
                <div className="logo-and-title-container">
                    <img
                        className="website-logo"
                        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
                        alt="website logo"
                    />
                </div>
                <div className="scores-container">
                    <p className="score">Score:{topScore}</p>
                    <img src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png" alt="timer" className="timer-logo" />
                    <p className="timer">{timeElapsedInSeconds} Sec</p>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
