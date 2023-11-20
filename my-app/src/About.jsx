import './css/About.css'
import './App.css'
import me from '/public/navLogo.png';


function About() {
    return (

<body>
    <div class="jumbotron mb-0">
        <div class="container">
            <div class="row">
                <div class="col col-sm-12 col-md-6 col-lg-4 justify-content-center">
                    <img src="Me-pic.jpg" class="rounded-circle" style="width: 410vw; height: 400vw;"/>
                </div>
                <div class="col pl-md-5">
                    <h1 class="display-4 text-center text-lg-left text-light p-0-lg pt-4">I am Alexander Aranda!</h1>
                    <p class="text-dark text-center text-md-left h3">
                        A Software Engineer that relocated to Boca Raton, FL from Los Angeles, CA.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid shadow mb-5 bg-light">
        <div class="container p-5">
            <h3>About Me</h3>
            <p>
                An eager entrepreneurial minded professional looking to push the boundaries of technology one project at a time...
                {/* <!-- remaining text --> */}
            </p>
            <p>
                <a href="/Projects">Visual Amp and Shuffle!</a>
            </p>
            {/* <!-- remaining paragraphs --> */}
        </div>
    </div>
</body>


    )
  }
  
  export default About;