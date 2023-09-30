import React from "react";
import Image from "next/image";
import Truuu from "../../../public/png/truuu.webp";

function Truepara() {
  return (
    <>
    <div className="bg-[#f0f9fc] p-6 mt-24 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 container mx-auto">
        <div>
          <Image className="w-[90%] mx-auto" src={Truuu} />
        </div>
        <div className="p-3">
          <h1 className="text-[27px] text-[#49afd1] font-poppins font-semibold">
            Trust
          </h1>
          <p className="text-[50px] leading-tight mt-3 font-poppins font-semibold">
            We make sure you get the <span className="text-[#176B87]">best</span> option
          </p>

          <div className="flex justify-start gap-5 mt-12">
            <div className="bg-[#176B87] w-[30px] h-[30px] rounded-full text-center flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            </div>
            <h1 className="text-[20px] font-poppins font-medium">Legal & Insured</h1>
          </div>
          <div className="flex justify-start gap-5 mt-4">
            <div className="bg-[#176B87] w-[30px] h-[30px] rounded-full text-center flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            </div>
            <h1 className="text-[20px] font-poppins font-medium">Trustworthy Network</h1>
          </div>
          <div className="flex justify-start gap-5 mt-4">
            <div className="bg-[#176B87] w-[30px] h-[30px] rounded-full text-center flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            </div>
            <h1 className="text-[20px] font-poppins font-medium">No Contracts</h1>
          </div>
          <div className="flex justify-start gap-5 mt-4">
            <div className="bg-[#176B87] w-[30px] h-[30px] rounded-full text-center flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            </div>
            <h1 className="text-[20px] font-poppins font-medium">Documents Checked</h1>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Truepara;
