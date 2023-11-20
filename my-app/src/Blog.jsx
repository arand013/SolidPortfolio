// src/BlogPost.jsx
{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400">  <!-- Google web font "Open Sans" -->
<link rel="stylesheet" href="css/bootstrap.min.css">                                      <!-- Bootstrap style -->
<link rel="stylesheet" href="css/templatemo-style.css">   */}
import bore from '/public/bore.jpeg'
import './css/Blog.css'
import './App.css'

function Blog({ post }) {
    return (

      
      <div class="blog-post">
        
      
        <section class="tm-section">
          <div class="container-title">
              <div class="row">
                <div class="tm-home-img-container"> </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-xs-center">
                      
                      <h2 class="tm-gold-text tm-title">You've reached My Blog </h2>
                  </div>
              </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-xs-center" style="
    margin-top: 20px;" >
                      <p class="tm-subtitle">This page consist of articles, interesting reads, food for thought & short videos. It also takes into account my personal opions and takeaways from them. Have fun & enjoy the read! </p>
                  </div>
        </section>

        <section class="tm-section">
          <div class="container-fluid">
              <div class="row">

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div class="tm-content-box">
                        <img src={bore} alt="Image" class="tm-margin-b-20 img-fluid"/>
                        <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #1</h4>
                        <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                        consequat mauris dapibus id. Donec
                        scelerisque porttitor pharetra</p>
                        <a href="#" class="tm-btn text-uppercase">Detail</a>    
                    </div>  
                  </div>

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                    <div class="tm-content-box">
                        <img src={bore} alt="Image" class="tm-margin-b-20 img-fluid"/>
                        <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #2</h4>
                        <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                        consequat mauris dapibus id. Donec
                        scelerisque porttitor pharetra</p>
                        <a href="#" class="tm-btn text-uppercase">Read More</a>    
                    </div>  

                  </div>

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                    <div class="tm-content-box">
                        <img src={bore} alt="Image" class="tm-margin-b-20 img-fluid"/>
                        <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #3</h4>
                        <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                        consequat mauris dapibus id. Donec
                        scelerisque porttitor pharetra</p>
                        <a href="#" class="tm-btn text-uppercase">Detail</a>    
                    </div>  

                  </div>

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                    <div class="tm-content-box">
                        <img src={bore} alt="Image" class="tm-margin-b-20 img-fluid"/>
                        <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #4</h4>
                        <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                        consequat mauris dapibus id. Donec
                        scelerisque porttitor pharetra</p>
                        <a href="#" class="tm-btn text-uppercase">Read More</a>    
                    </div>  

                 </div>
                
              </div>

              <div class="row">

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3" >
                    <div class="tm-content-box">
                        <img src={bore} alt="Image" class="tm-margin-b-20 img-fluid"/>
                        <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #1</h4>
                        <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                        consequat mauris dapibus id. Donec
                        scelerisque porttitor pharetra</p>
                        <a href="#" class="tm-btn text-uppercase">Detail</a>    
                    </div>  
                  </div>

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                    <div class="tm-content-box">
                        <img src={bore} alt="Image" class="tm-margin-b-20 img-fluid"/>
                        <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #2</h4>
                        <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                        consequat mauris dapibus id. Donec
                        scelerisque porttitor pharetra</p>
                        <a href="#" class="tm-btn text-uppercase">Read More</a>    
                    </div>  

                  </div>

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                    <div class="tm-content-box">
                        <img src={bore} alt="Image" class="tm-margin-b-20 img-fluid"/>
                        <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #3</h4>
                        <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                        consequat mauris dapibus id. Donec
                        scelerisque porttitor pharetra</p>
                        <a href="#" class="tm-btn text-uppercase">Detail</a>    
                    </div>  

                  </div>

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                    <div class="tm-content-box">
                        <img src={bore} alt="Image" class="tm-margin-b-20 img-fluid"/>
                        <h4 class="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #4</h4>
                        <p class="tm-margin-b-20">Aenean cursus tellus mauris, quis
                        consequat mauris dapibus id. Donec
                        scelerisque porttitor pharetra</p>
                        <a href="#" class="tm-btn text-uppercase">Read More</a>    
                    </div>  

                 </div>
                
              </div>
          </div>
        </section>

      </div> 
    );
  }
  
  export default Blog;
  