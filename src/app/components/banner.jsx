"use client";
import React from "react";
import Pic from "../../../public/png/run.png";

function Banner() {
  return (
    <>
      
     <div className=" h-[100vh] w-[100%] mx-auto bg-no-repeat bg-cover bg-center " style={{ backgroundImage:`url(${Pic.src})`}}>
      <span className="text-[55px] font-poppins font-semibold ml-8 ">  </span>
     </div>

{/* <video controls width="1500px">
        <source src="../bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </>
  );
}

export default Banner;
