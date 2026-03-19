

import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./MasterLayout.module.css";
export default function MasterLayout() {
   return (
      <>
         {/* زرار المينيو للموبايل */}
         <button   className="btn d-lg-none position-fixed top-0 start-0 m-3 z-3" type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
         >
            <i className="fa-solid fa-bars fs-4"></i>
         </button>

         <div className="container-fluid">
            <div className="row min-vh-100">
               {/* Sidebar للديسكتوب بس */}
               <div className={`col-lg-2 p-0 d-none d-lg-block ${styles.sidebar} `}>
                  <Sidebar />
               </div>

              
               <div className={`col-12 col-lg-10 p-0 ${styles.OutletStyles}`}>
                  <Outlet />
               </div>
            </div>
         </div>

         {/* Offcanvas للموبايل */}
         <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileSidebar">
            <div className="offcanvas-header justify-content-end">
               <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body p-0">
               <Sidebar />
            </div>
         </div>
      </>
   );
}
