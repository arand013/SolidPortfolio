
// import solidLogo from './assets/solid.svg'
// import viteLogo from '/vite.svg'
// import { createSignal } from 'solid-js';


import { createSignal } from 'solid-js'
import { render } from "solid-js/web";
import { Router, Routes, Route } from "@solidjs/router"; // 👈 Import the router
import Header from './pages/Header.jsx';
import Blog from './pages/Blog.jsx';  
import Footer from './pages/Footer.jsx';  
import About from './pages/About.jsx'
import './App.css'

// App.jsx

function App() {
  // Example blog post data (replace with actual content)
  
  // const blogPosts = [
  //   {
  //     title: 'Smartwatch Design Trends',
  //     imageSrc: '/path/to/smartwatch-image.jpg',
  //     description: 'Explore the latest smartwatch design trends.',
  //   },
  //   // Add more blog posts here
  // ];

  return (
  
    <Router>
    <div class="app">

      <Header />
      <Routes>
        <Route path="/About" component={About} /> {/* 👈 Define the about page route */}
        <Route path="/Blog" component={Blog} /> {/* 👈 Define the contact page route */}
      </Routes>

      <Footer />

    </div>
    </Router>

    
  );
}

export default App;


    //  <Router> {/* 👈 Wrap the router around the app */}       
    //     <Routes>
    //       <Route path="/About" component={About} /> {/* 👈 Define the about page route */}
    //       <Route path="/Blog" component={Blog} /> {/* 👈 Define the contact page route */}
    //     </Routes>
    //  </Router>
