// src/Header.jsx

import { Link } from "@solidjs/router"; // 👈 Import the router
import '../css/Header.css'
import '../App.css'
import logo from '/public/navLogo.png'


import About from "./About";
import Blog from "./Blog.jsx";

function Header() {
    return (
    <div> 
        <header class="header">
            <img  class="logos" src={logo}/>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Blog">Blog</Link></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
        </header>
{/* 
        <Routes>
          <Route path="/About" component={About} /> 
          <Route path="/Blog" component={Blog} /> 
        </Routes> */}


      </div>
    );
  }
  
  export default Header;
