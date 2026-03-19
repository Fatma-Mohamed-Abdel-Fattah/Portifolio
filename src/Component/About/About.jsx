import React from 'react'
import myImg from '../../assets/images/img-5-lAucr__a.jpg'
import styles from './About.module.css'
export default function About() {
  return (
    <>
    <section className='vh-100  w-75 m-auto'>
    <div className="container ">
      <p className={`pt-2 ${styles.aboutTitle}`}>About Us</p>
      <h2 className={`my-3 ${styles.aboutSecondTitle}`}>Who am i?</h2>
      <p className={`my-3 ${styles.aboutText}`}><strong>Hi Im Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
     <p className={`${styles.aboutText}`}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
     </div>
     <div className="container-fluid">
  <div className="row">
    <div className={`col-md-3 ${styles.box}`}>
      <div className={` ${styles.aboutInfo1}  p-4 shadow-lg`}>
        <i className="fa-solid fa-lightbulb fa-2x " />
        <h3>Graphic Design</h3>
      </div>
    </div>
    <div className={`col-md-3 ${styles.box}`}>
      <div className={`${styles.aboutInfo2} p-4 shadow-lg`}>
        <i className="fa-solid fa-earth-africa fa-2x" />
        <h3>Web Design</h3></div>
    </div>
    <div className={`col-md-3 ${styles.box}`}>
      <div className={`${styles.aboutInfo3} p-4 shadow-lg`}>
      <i className="fa-solid fa-database fa-2x" />
        <h3>Software</h3></div>
    </div>
    <div className={`col-md-3 ${styles.box}`}>
      <div className={`${styles.aboutInfo4} p-4 shadow-lg`}>
        <i className="fa-solid fa-mobile-screen-button fa-2x" />
        <h3>Application</h3>
      </div>
    </div>
  </div>
</div>
    </section>
   

     {/* <img src={myImg} alt="ing" /> */}
    </>
  )
}
