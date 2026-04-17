
// 1. We bring in tools from React to help us manage "State" (memory)
import { useState } from 'react'; 

// 2. We link the CSS file so the browser knows how to "paint" this page
import '.././Home.css'; 

// 3. We import the 'Template' we made for our juice cards (The Child)
import ProductCard from '../components/ProductCard'; 

// 4. We import the main React library to allow us to write JSX
import React from 'react'; 
// MUI - Material UI for the "Register" Button
import Button from '@mui/material/Button';
import { TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // This tells React what a <Link> is

// 5. This is our main function. Think of it as the "Manager" of the Home Page.
const Home = () => {
  
  // 6. This is our Data. It is an array (list) of objects.
  // Each object has a name, price, and a link to an image.
  const products = [
    { id: 1, name: "Apple Juice", price: "$3.20", img: "../src/assets/img/appleJuice.jpg" },
    { id: 2, name: "Orange Juice", price: "$3.20", img: "../src/assets/img/orangeJuice.jpg" },
    { id: 3, name: "Papaya Juice", price: "$3.20", img: "../src/assets/img/papayaJuice.jpg" },
  ];

  // 7. This 'return' tells React: "Take everything below and put it on the screen."
  return (
    // 8. This div covers the whole screen. It provides the background color and grid lines.
    <div className="quirky-bg">
      
      {/* 9. This is our 'Centering Box'. It keeps our content from stretching too wide. */}
      <div className="home-container">
        
        {/* 10. The Hero Section: This is the 'Big Welcome' area at the top. */}
        <section className="hero">
          <div className="hero-content">
            {/* We use <span> to target specific words for that orange 'highlight' color */}
            <h1>Treat yourself with something<span className="highlight"> fresh</span><span className="dark-text"> & </span> <span className="highlight"> tasty!</span></h1>
            <Link to="/About">
              <button className="cta-btn">LEARN MORE</button>
            </Link>
          </div>
        </section>

        {/* 11. The Product Section: This is where our juice cards live. */}
        <section className="product-grid">
          {/* 12. MAP is like a 'Loop'. It goes through our 'products' list one by one. */}
          {products.map(item => (
            /* 13. For every item in the list, we create a ProductCard.
               We send 'Packages' (PROPS) like name and price to the child component.
            */
            <ProductCard 
              key={item.id}  // React needs this 'ID' to keep track of the list
              name={item.name} 
              price={item.price} 
              img={item.img} 
            />
          ))}
        </section>

        {/* 14. Newsletter Section: A simple area for user input. */}
        <section className="newsletter">
          <h2>Newsletter <span>Registration</span></h2>
          <form className="register-form">
            {/* These are standard HTML inputs for text and email */}
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Message..."></textarea>
            <button type="submit" className="register-btn">REGISTER NOW</button>
            <Button 
            variant="contained" 
            sx={{ backgroundColor: 'orange', borderRadius: '30px' }}
            >
              REGISTER NOW - MUI
            </Button>
          </form>
        </section>

        <section className="newsletter">
  <h2>Newsletter <span>Registration</span></h2>
  {/* Box is like an MUI 'div' that helps with spacing */}
  <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '400px' }}>
    <TextField label="First Name" variant="outlined" fullWidth />
    <TextField label="Email Address" variant="outlined" type="email" fullWidth />
    <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
    
    <Button variant="contained" sx={{ backgroundColor: 'black', borderRadius: '20px', py: 1.5 }}>
      REGISTER NOW
    </Button>
  </Box>
</section>

      </div> {/* Closing the centering box */}
    </div>  /* Closing the full-screen background */
  );
};

// 15. We 'Export' Home so that our App.jsx can see it and display it.
export default Home;