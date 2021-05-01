//There is bug in the header.
//It's when rotating cellphone screen
//nav menu stays open

import React,{ useState } from 'react';

const Header = () => {
	const [menuStatus, setMenuStatus] = useState(false);
    const menuBtnHandler = () => {
        const menu = document.getElementById('menu');

        setMenuStatus(!menuStatus);

        if(menuStatus){
            setTimeout(()=>{
                menu.style.display = 'none';
            },300);
        }else{
            menu.style.display = "block";
        }
    }
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
            {
                window.addEventListener('load',()=>{
                    if(!menuStatus){
                        document.getElementById('menu')
                        .style.display = 'none';
                    }
                })
            }
			<button id="menu-btn" onClick={menuBtnHandler}><i className="fas fa-bars"></i></button>
			<div id="menu" className = {menuStatus ? "nav-menu-open" : "nav-menu-close"}>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Connect</a></li>
                        </ul>
			</div>
        </header>
    );
}

export default Header;