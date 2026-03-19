// import React from 'react'
import { Link } from "react-router-dom";

// import styles from './Sidbar.module.css'
import userImg from "../../assets/images/about-BgAkqdr2.jpg";
import styles from "./Sidebar.module.css";
export default function Sidebar() {
   return (
      <>
         <nav className={`${styles.myNav}navbar navbar-expand-lg bg-body-tertiary  text-center  text-center bg-dark min-vh-100`}>
            <div className="container-fluid flex-column">
               <Link className="navbar-brand w-75 d-block m-auto " href="#">
                  <img src={userImg} alt="userImg" className={`${styles.logoImg} d-block  rounded-circle `} />
               </Link>
               <div className="userInfo m-auto text-center py-3 px-3">
                  <h1 className="userH1">
                     <a href="#">Jackson Ford</a>
                  </h1>
                  <p className={`${styles.uiux}`}>
                     <a href="#" >UI/UXDESIGNER</a> IN PHILIPPINES
                  </p>
               </div>
               <div>
                  <ul className="navbar-nav mb-auto mb-lg-0 flex-column text-center">
                     <li className="nav-item">
                        <Link to="/home" className="nav-link active  ">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/about" className="nav-link">
                           About
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/skills" className="nav-link">
                           Skills
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/experience" className="nav-link text-center">
                           Experience
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/works" className="nav-link">
                           Works
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
}
