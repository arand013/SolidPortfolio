// src/Header.jsx

import './css/Header.css'
import './App.css'
import logo from '/public/navLogo.png'

function Header() {
    return (
    <div> 
        <header class="header">
            <img  class="logos" src={logo}/>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Post</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
        </header>
      </div>
    );
  }
  
  export default Header;