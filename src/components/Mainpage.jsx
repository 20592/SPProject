import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage";


const Mainpage = () => {
  return (
    <div>
      <div>
        <Topbar />
      </div>
      {/* <div className=" grid grid-cols-12">
            <div className="col-span-2 bg-white p-0 m-0">
                <Sidebar/>
            </div>
            <div className="col-span-10 bg-yellow h-screen pl-2
            "><Dashboard/></div>
  </div>*/}
      <div className="flex flex-1">
      <Sidebar /> 
        <NavPage />
      </div>
      
    </div>
  );
};

export default Mainpage;
