import React from 'react';

const Header = () => {
    return(
        <header>
            <div className="logo">
                <h1>Borzoo Moazami</h1>
                <p>Front-end Developer</p>
            </div>
            <nav>
                <ul>
                    <li><a>Blog</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                    <li><a>Connect</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;