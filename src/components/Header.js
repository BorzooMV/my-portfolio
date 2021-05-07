//There is bug in the header.
//It's when rotating cellphone screen
//nav menu stays open

import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
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
    const linkClickHandler = () => {
        setMenuStatus(false);
    }
    return(
        <header>
            <div className="logo">
                <Link to="/"><h1>Borzoo Moazami</h1></Link>
                <p>Front-end Developer</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="#">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/connect">Connect</Link></li>
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
			<div id="menu" onMouseLeave={linkClickHandler}  className = {menuStatus ? "nav-menu-open" : "nav-menu-close"}>
                        <ul>
                            <li><Link to="#" onClick={linkClickHandler}>Portfolio</Link></li>
                            <li><Link to="/about" onClick={linkClickHandler}>About</Link></li>
                            <li><Link to="/connect" onClick={linkClickHandler}>Connect</Link></li>
                        </ul>
			</div>
        </header>
    );
}

export default Header;