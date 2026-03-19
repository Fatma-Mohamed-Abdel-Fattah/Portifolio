// import React from 'react'
import styles from './Home.module.css'
import sliderOne from "../../assets/images/img_bg_1-PzvG2r05.jpg";
import sliderTwo from "../../assets/images/img_bg_2-DzCs5o-0.jpg"
export default function Home() {
  return (
    <>
    <header className={` d-flex justify-content-center align-items-center vh-100 overflow-hidden w-100`}>
    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade h-100 w-100" data-bs-ride="carousel">
  <div className="carousel-inner h-100 w-100">
    <div className="carousel-item active position-relative h-100 w-100">
      <img src={sliderOne} className="d-block w-100 h-100 " alt="slideone" />
      
         <div className={`carousel-caption ${styles.homeContent}  position-absolute   `}>
         <div >
        <h1>Hi!<br />I'm Jackson</h1>
        <p>100% html5 bootstrap templates Made <br /> by  <a 
    href="https://colorlib.com" 
    target="_blank" 
    
  
  >
    Colorlib.com
  </a></p>
        <button className={`btn btn-outline-dark ${styles.homeBtn}`}>Download CV <i class="fa-solid fa-download"></i></button>
      </div>
      </div>
    
</div>
    <div className="carousel-item h-100 position-relative w-100">
      <img src={sliderTwo} className="d-block w-100 h-100" alt="sliderTwo" />
     <div className={`carousel-caption ${styles.homeContent}  position-absolute   `}>
     <div>
      <h1>Hi <br/>I'm Designer</h1>
      <p>100% html5 bootstrap templates Made <br /> by  <a 
    href="https://colorlib.com" 
    target="_blank" 
  >
    Colorlib.com
  </a></p>
        <button className={`btn btn-outline-dark ${styles.homeBtn}`}>VIEW PORTIFOLIO <i class="fa-solid fa-briefcase"></i></button>
      </div>
      </div>
    </div>
  </div>
</div>
    </header>
</>
  );
}