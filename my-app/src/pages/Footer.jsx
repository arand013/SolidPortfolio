import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import '../css/Footer.css'
import '../App.css'
import logo from '/public/navLogo.png'

function Footer() {
    return (
        <div> 
        <footer class="footer">

                <div>
                <section class="">

                    {/* <!-- Twitter --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="home" role="button"
                        ><i class="fab fa-twitter"></i>
                    </a>

                    {/* <!-- Google --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.dreamwebai.com" role="button"
                    ><i class="fab fa-google"></i>
                    </a>

                    {/* <!-- Linkedin --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/alexander-aranda1" role="button"
                        ><i class="fab fa-linkedin-in"></i>
                    </a>

                    {/* <!-- Github --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/arand013" role="button"
                        ><i class="fab fa-github"></i>
                    </a>
            </section>
                    <ul>
                    <div class="text-center p-3" style="color: white">
                    © 2023  Copyright: Alexander Aranda
                    </div>
                    </ul>
                </div>
        </footer>
      </div>
    );
  }
  
  
  export default Footer;