import React from "react";
import works1 from "../../assets/images/img-1-C4nS0eD8.jpg";
import works2 from "../../assets/images/img-2-D-4H1m4L.jpg";
import works3 from "../../assets/images/img-3-pR2ZEVY9.jpg";
import works4 from "../../assets/images/img-4-tHccITd-.jpg";
import works5 from "../../assets/images/img-5-lAucr__a.jpg";
import works6 from "../../assets/images/img-6-DFW03AZ3.jpg";
import styles from "./Works.module.css";

export default function Works() {
   return (
      <>
         <section id="works" className="w-75 m-auto">
            <div className="container ">
               <div className="text-subtitle">
                  <p className={`${styles.sworksTitle}`}>MY WORK</p>
                  <h2 className={`${styles.worksSecondTitle}`}>RECENT WORK</h2>
               </div>
               {/* start nav and tab */}
               <div>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                     <li className={`nav-item ${styles.worksLi}`} role="presentation">
                        <button
                           className={`${styles.worksLi} nav-link active`}
                           id="pills-graphic-design-tab"
                           data-bs-toggle="pill"
                           data-bs-target="#pills-graphic-design"
                           type="button"
                           role="tab"
                           aria-controls="pills-graphic-design"
                           aria-selected="true"
                        >
                           Graphic Design
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className={`${styles.worksLi} nav-link `}
                           id="pills-apps-tab"
                           data-bs-toggle="pill"
                           data-bs-target="#pills-apps"
                           type="button"
                           role="tab"
                           aria-controls="pills-apps"
                           aria-selected="false"
                        >
                           Apps
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className={`${styles.worksLi} nav-link `}
                           id="pills-software-tab"
                           data-bs-toggle="pill"
                           data-bs-target="#pills-software"
                           type="button"
                           role="tab"
                           aria-controls="pills-software"
                           aria-selected="false"
                        >
                           Software
                        </button>
                     </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                     <div
                        className="tab-pane fade show active"
                        id="pills-graphic-design"
                        role="tabpanel"
                        aria-labelledby="pills-graphic-design-tab"
                        tabIndex={0}
                     >
                        <div className="row gy-4">
                           <div className="col-md-6">
                              <div className="image-work h-100">
                                 <div className={styles.imageContainer}>
                                   
                                    <img src={works1} className="d-block w-100 h-100" alt="work1" />
                                 </div>

                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>

                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image-work h-100">
                                 <div className={styles.imageContainer}>
                                    <img src={works2} className="d-block w-100 h-100" alt="work2" />
                                 </div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>

                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image-work h-100">
                                 <div className={styles.imageContainer}>
                                    <img src={works3} className="d-block w-100 h-100 object-fit-cover" alt="work3" />
                                 </div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>

                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image-work">
                                 <div className={styles.imageContainer}>
                                    <img src={works4} className="d-block w-100 h-100 object-fit-cover" alt="work4" />
                                 </div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>
                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className=" mt-4">
                           <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#moreWorks">
                              Show More
                           </button>
                           <div className="collapse mt-4" id="moreWorks">
                              <div className="row gy-4">
                                 <div className="col-md-6">
                                    <div className="image-work h-100">
                                       <div className={styles.imageContainer}>
                                          <img src={works5} className="d-block w-100 h-100" alt="work5" />
                                       </div>
                                       <div className="imgLayer">
                                          <div className="text ">
                                             <h3>
                                                <a href="">work 02</a>
                                             </h3>
                                             <h3>
                                                <span>Animation</span>
                                             </h3>
                                          </div>

                                          <ul className="d-flex  d-block">
                                             {/* <div> */}
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-solid fa-share-nodes text-black" />
                                                   </a>
                                                </span>
                                             </li>
                                             <li className="d-flex">
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-eye text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">100</span>
                                                </span>
                                             </li>
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-heart text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">98</span>
                                                </span>
                                             </li>
                                             {/* </div> */}
                                          </ul>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-md-6">
                                    <div className="image-work h-100">
                                       <div className={styles.imageContainer}>
                                          <img src={works6} className="d-block w-100 h-100" alt="work6" />
                                       </div>
                                       <div className="imgLayer">
                                          <div className="text ">
                                             <h3>
                                                <a href="">work 02</a>
                                             </h3>
                                             <h3>
                                                <span>Animation</span>
                                             </h3>
                                          </div>

                                          <ul className="d-flex  d-block">
                                             {/* <div> */}
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-solid fa-share-nodes text-black" />
                                                   </a>
                                                </span>
                                             </li>
                                             <li className="d-flex">
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-eye text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">100</span>
                                                </span>
                                             </li>
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-heart text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">98</span>
                                                </span>
                                             </li>
                                             {/* </div> */}
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="pills-apps" role="tabpanel" aria-labelledby="pills-apps-tab" tabIndex={0}>
                        <div className="row gy-4">
                           <div className="col-md-6">
                              <div className="image-work h-100">
                                 <div className={styles.imageContainer}>
                                    <img src={works1} className="d-block w-100 h-100" alt="work1" />
                                 </div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>

                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image-work h-100">
                                 <div className={styles.imageContainer}>
                                    <img src={works2} className="d-block w-100 h-100" alt="work2" />
                                 </div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>

                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image-work h-100">
                                 <div className={styles.imageContainer}>
                                    <img src={works3} className="d-block w-100 h-100" alt="work3" />
                                 </div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>

                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image-work h-100">
                                 <div className={styles.imageContainer}>
                                    <img src={works4} className="d-block w-100 h-100" alt="work4" />
                                 </div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>
                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           
                        </div>
                        <div className=" mt-4">
                           <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#moreWorks">
                              Show More
                           </button>
                           <div className="collapse mt-4" id="moreWorks">
                              <div className="row gy-4">
                                
                              </div>
                              <div className=" mt-4">
                           <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#moreWorks">
                              Show More
                           </button>
                           <div className="collapse mt-4" id="moreWorks">
                              <div className="row gy-4">
                                 <div className="col-md-6">
                                    <div className="image-work h-100">
                                       <div className={styles.imageContainer}>
                                          <img src={works5} className="d-block w-100 h-100" alt="work5" />
                                       </div>
                                       <div className="imgLayer">
                                          <div className="text ">
                                             <h3>
                                                <a href="">work 02</a>
                                             </h3>
                                             <h3>
                                                <span>Animation</span>
                                             </h3>
                                          </div>

                                          <ul className="d-flex  d-block">
                                             {/* <div> */}
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-solid fa-share-nodes text-black" />
                                                   </a>
                                                </span>
                                             </li>
                                             <li className="d-flex">
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-eye text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">100</span>
                                                </span>
                                             </li>
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-heart text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">98</span>
                                                </span>
                                             </li>
                                             {/* </div> */}
                                          </ul>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-md-6">
                                    <div className="image-work h-100">
                                       <div className={styles.imageContainer}>
                                          <img src={works6} className="d-block w-100 h-100" alt="work6" />
                                       </div>
                                       <div className="imgLayer">
                                          <div className="text ">
                                             <h3>
                                                <a href="">work 02</a>
                                             </h3>
                                             <h3>
                                                <span>Animation</span>
                                             </h3>
                                          </div>

                                          <ul className="d-flex  d-block">
                                             {/* <div> */}
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-solid fa-share-nodes text-black" />
                                                   </a>
                                                </span>
                                             </li>
                                             <li className="d-flex">
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-eye text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">100</span>
                                                </span>
                                             </li>
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-heart text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">98</span>
                                                </span>
                                             </li>
                                             {/* </div> */}
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                           </div>
                        </div>
                     </div>
                     <div
                        className="tab-pane fade"
                        id="pills-software"
                        role="tabpanel"
                        aria-labelledby="pills-software-tab"
                        tabIndex={0}
                     >
                        <div className="row gy-4">
                           <div className="col-md-6">
                              <div className="image-work h-100">
                                <div className={styles.imageContainer}>
                                 <img src={works1} className="d-block w-100 h-100" alt="work1" /></div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>

                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image-work h-100">
                               <div className={styles.imageContainer}>
                                 <img src={works2} className="d-block w-100 h-100" alt="work2" /></div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>

                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image-work h-100">
                               <div className={styles.imageContainer}>
                                 <img src={works3} className="d-block w-100 h-100" alt="work3" /></div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>

                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image-work h-100">
                               <div className={styles.imageContainer}>
                                 <img src={works4} className="d-block w-100 h-100" alt="work4" /></div>
                                 <div className="imgLayer">
                                    <div className="text ">
                                       <h3>
                                          <a href="">work 02</a>
                                       </h3>
                                       <h3>
                                          <span>Animation</span>
                                       </h3>
                                    </div>
                                    <ul className="d-flex  d-block">
                                       {/* <div> */}
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-solid fa-share-nodes text-black" />
                                             </a>
                                          </span>
                                       </li>
                                       <li className="d-flex">
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-eye text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">100</span>
                                          </span>
                                       </li>
                                       <li>
                                          <span>
                                             <a href>
                                                <i className="fa-regular fa-heart text-black" />
                                             </a>
                                             <span className="text-decoration-underline text-dark">98</span>
                                          </span>
                                       </li>
                                       {/* </div> */}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>

                             <div className=" mt-4">
                           <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#moreWorks">
                              Show More
                           </button>
                           <div className="collapse mt-4" id="moreWorks">
                              <div className="row gy-4">
                                 <div className="col-md-6">
                                    <div className="image-work h-100">
                                       <div className={styles.imageContainer}>
                                          <img src={works5} className="d-block w-100 h-100" alt="work5" />
                                       </div>
                                       <div className="imgLayer">
                                          <div className="text ">
                                             <h3>
                                                <a href="">work 02</a>
                                             </h3>
                                             <h3>
                                                <span>Animation</span>
                                             </h3>
                                          </div>

                                          <ul className="d-flex  d-block">
                                             {/* <div> */}
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-solid fa-share-nodes text-black" />
                                                   </a>
                                                </span>
                                             </li>
                                             <li className="d-flex">
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-eye text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">100</span>
                                                </span>
                                             </li>
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-heart text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">98</span>
                                                </span>
                                             </li>
                                             {/* </div> */}
                                          </ul>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-md-6">
                                    <div className="image-work h-100">
                                       <div className={styles.imageContainer}>
                                          <img src={works6} className="d-block w-100 h-100" alt="work6" />
                                       </div>
                                       <div className="imgLayer">
                                          <div className="text ">
                                             <h3>
                                                <a href="">work 02</a>
                                             </h3>
                                             <h3>
                                                <span>Animation</span>
                                             </h3>
                                          </div>

                                          <ul className="d-flex  d-block">
                                             {/* <div> */}
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-solid fa-share-nodes text-black" />
                                                   </a>
                                                </span>
                                             </li>
                                             <li className="d-flex">
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-eye text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">100</span>
                                                </span>
                                             </li>
                                             <li>
                                                <span>
                                                   <a href>
                                                      <i className="fa-regular fa-heart text-black" />
                                                   </a>
                                                   <span className="text-decoration-underline text-dark">98</span>
                                                </span>
                                             </li>
                                             {/* </div> */}
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
