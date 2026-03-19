import React from 'react'
// import styles from './Experience.module.css'
import styles from './Experience.module.css'
export default function Experience() {
  return (
    <>
    <div className="container w-75 m-auto">
    <p className={`${styles.experienceTitle}`}>EXPERIENCE</p>
      <h3 className={`${styles.experienceSeconTitle}`}>WORK EXPERIENCE</h3>
      <ul className={`${styles.ulExp}`}>
        <li className='' >

          <div>
          <h4 className={`${styles.boxTitle}`}><a href="#">Full Stack Developer</a><span> 2017-2018</span></h4>
          <p className={`${styles.experienceText}`}>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
        </li>
        <li >
          <div>
          <h4 className={`${styles.boxTitle}`}><a href="#">Front End Developer at Google Company </a><span> 2017-2018</span></h4>
          <p className={`${styles.experienceText}`}>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
        </li>
        <li>
          <div>
          <h4 className={`${styles.boxTitle}`}><a href="#">System Analyst</a><span> 2017-2018</span></h4>
          <p className={`${styles.experienceText}`}>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
        </li>
      </ul>
    </div>
    </>
  )
}
