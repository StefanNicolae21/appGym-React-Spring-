import React from 'react';
import Header from "../components/Header";
import MainCarousel from '../components/MainCarousel';
import ImageBlock from '../components/ImageBlock';
import Footer from '../components/Footer';





function Homepage() {
    return (
      <div>
        <Header />
        <MainCarousel />
        <div className="container">
          <ImageBlock
            imgSrc="../images/content1.jpg"
            className="size-33"
            title="Body Shape"
          />

          <ImageBlock
            imgSrc="../images/content3.jpg"
            className="size-33 extreme"
            title="Extreme"
          />
          <ImageBlock
            imgSrc="../images/content2.jpg"
            className="size-33"
            title="Burn"
          />
         
         


          <Footer />
        </div>
      </div>
    );
}

export default Homepage;