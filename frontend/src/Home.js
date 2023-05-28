import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <h1>Welcome to Real Estate App</h1>
      <p>Here you can find a list of real estate listings.</p>
      <Header/>
      <Footer/>
    </div>
  );
}

export default Home;