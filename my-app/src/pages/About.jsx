import '../css/About.css'
import '../App.css'
import me from '/public/logo.png'



function About() {
    return (

<div>
    <div class="jumbotron mb-2">
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col col-sm-12 col-md-6 col-lg-4 justify-content-center">
                    <img src={me} class="rounded-circle" style="width: 20vw; height: 20vw;"/>
                </div>
                <div class="col">
                    <h1 class="display-4 text-center text-lg-left text-light p-0-lg pt-4">I am Alexander Aranda!</h1>
                    <p class="text-dark text-center text-md-left h3">
                        A Software Engineer that relocated to Boca Raton, FL from Los Angeles, CA.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid shadow mb-5 bg-light">
        <div class="container">
            <h2>About Me</h2>
            <p>
                An entrepreneurial minded professional looking to push the boundaries of technology one project at a time.
                As the pandemic began in 2020 I made a decision to propel myself forward into technology.
                While balancing my day job and taking A web bootcamp I worked 80 hours a week, and successfully honed new skills
                by building projects as fun as <a href="/Projects">Visual Amp and Shuffle!</a>

            </p>
            <p>
                After, earning a certificate in Full Stack Web Development from the University of
                California Los Angeles, I developed my skills with Javascript, databases and React. 
                Building secure and creative user responsive web applications.
                In terms of my attitude I have a very ambitious outlook in providing value to others 
                and where technology is headed. I aim to do great work and make an impact!

            </p>
            <p>
                Occasionally when I need a break, you might find me creating music, learning something new, or spending quality time with friends and family.
            </p>
        </div>
    </div>

</div>


    )
  }
  
  export default About;