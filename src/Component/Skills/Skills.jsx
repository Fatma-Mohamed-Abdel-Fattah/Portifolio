// import React from 'react'
import styles from './Skills.module.css'
export default function Skills() {
  return (
    <>
     <section className="w-75 m-auto">
      <div className="container">
        <p className={`pt-5 ${styles.skillsTitle}`}>MY SPECIALTY</p>
        <h3  className={`my-3 ${styles.skillsSecondTitle}`}>MY SKILLS</h3>
        <p className={`   ${styles.skillsText}`}>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
      </div>
     <div className="progress-sec">
 <div className="container">
  <div className="row">
    <div className="col-md-6"> 
    <span>Photoshop</span>
  <div className={`progress mb-3 ${styles.mainBar}`}>
    <div className={`progress-bar secondary-color ${styles.coloredBar} ${styles.coloredBar1}`} role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <span>HTML5</span>
<div className={`progress mb-3 ${styles.mainBar}`}>
  <div 
    className={`progress-bar secondary-color ${styles.coloredBar} ${styles.coloredBar2}`} 
    role="progressbar" 
    style={{width: '85%'}} 
    aria-valuenow={85} 
    aria-valuemin={0} 
    aria-valuemax={100} 
  />
</div>
  
  <span>WordPress</span>
  <div className={`progress mb-3 ${styles.mainBar}`}>
    <div className={`progress-bar secondary-color ${styles.coloredBar} ${styles.coloredBar3}`} role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
  </div>
  </div>
  <div className="col-md-6"> 
    <span>jQuery</span>
  <div className={`progress mb-3 ${styles.mainBar}`}>
    <div className={`progress-bar secondary-color ${styles.coloredBar} ${styles.coloredBar4}`} role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <span>css3</span>
  <div className={`progress mb-3 ${styles.mainBar}`}>
    <div className={`progress-bar secondary-color ${styles.coloredBar} ${styles.coloredBar5}`} role="progressbar " style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <span>seo</span>
  <div className={`progress mb-3 ${styles.mainBar}`}>
    <div className={`progress-bar secondary-color ${styles.coloredBar} ${styles.coloredBar6}`} role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
  </div>
  </div>
  </div>
  </div>
 </div>                      
     </section>
    </>
  )
}
