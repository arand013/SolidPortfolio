
// import solidLogo from './assets/solid.svg'
// import viteLogo from '/vite.svg'
// import { createSignal } from 'solid-js';


import { createSignal } from 'solid-js'
import Header from './Header.jsx';
import Blog from './Blog.jsx';  
import Footer from './Footer.jsx';  
import About from './About.jsx'
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
    <div class="app">

      <Header />
        <div> 
        <Blog />
        </div>
        <About/> 
      <Footer />
    </div>
  );
}

export default App;