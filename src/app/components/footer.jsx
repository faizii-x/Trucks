import React from "react";
import Image from "next/image";
import Logo from "../../../public/png/logo.png";

function Footer() {
  return (
    <>
      <div className="bg-[#49afd1] p-16 mt-12">
        <footer className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
          <div className="flex justify-center mb-12">
            <p className="font-poppins font-medium text-[18px]">
              We help truckers & load brokers. <br />
              We'd love to help you too!
            </p>
          </div>
          <div className="flex justify-center lg:justify-start gap-10">
            <button className="bg-black shadow-lg w-[160px] h-[55px] rounded-md text-white hover:bg-white hover:text-black">
              Contact Us
            </button>
            <button className="bg-[#176B87] w-[160px] h-[55px] rounded-md text-white hover:bg-black">
              Brokers
            </button>
          </div>
        </footer>
        <hr className="mt-8" />
        {/* .................. */}

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto mt-10">
          <div className="col-span-1">
            <Image className="w-[80%] cursor-pointer" src={Logo} />
            <h1 className="mt-6 text-[16px] font-poppins font-medium ">
              {" "}
              Email:{" "}
              <span className="text-[16px] font-poppins font-light hover:text-white cursor-pointer">
                {" "}
                info.backup@gmail.com
              </span>
            </h1>
            <h1 className="mt-3 text-[16px] font-poppins font-medium">
              Phone:{" "}
              <span className="text-[16px] font-poppins font-light hover:text-white cursor-pointer">
                +92344565677{" "}
              </span>{" "}
            </h1>
          </div>

          <div className="ml-0 lg:ml-16 ">
            <h1 className="text-[18px] font-poppins font-semibold mt-10">
              For Truckers
            </h1>
            <h2 className="text-[16px] font-poppins font-light mt-[37px] hover:text-white cursor-pointer">
              Dispatch Service
            </h2>
            <h2 className="text-[16px] font-poppins font-light mt-[10px] hover:text-white cursor-pointer">
              Find Loads
            </h2>
            <h2 className="text-[16px] font-poppins font-light mt-[10px] hover:text-white cursor-pointer">
              Contact Us
            </h2>
          </div>
          <div className="ml-0 lg:ml-8">
            <h1 className="text-[18px] font-poppins font-semibold mt-10">
              For Load Brokers
            </h1>
            <h2 className="text-[16px] font-poppins font-light mt-[37px] hover:text-white cursor-pointer">
              {" "}
              Brokers Solution
            </h2>
            <h2 className="text-[16px] font-poppins font-light mt-[10px] hover:text-white cursor-pointer">
              Find Truckers
            </h2>
            <h2 className="text-[16px] font-poppins font-light mt-[10px] hover:text-white cursor-pointer">
              Contact Us
            </h2>
          </div>
          <div className=" ">
            <h1 className="text-[18px] font-poppins font-semibold mt-10">
              For Helpful Resources
            </h1>
            <h2 className="text-[16px] font-poppins font-light mt-[37px] hover:text-white cursor-pointer">
              FAQ's
            </h2>
            <h2 className="text-[16px] font-poppins font-light mt-[10px] hover:text-white cursor-pointer">
              About Us
            </h2>
            <h2 className="text-[16px] font-poppins font-light mt-[10px] hover:text-white cursor-pointer">
              Privacy Policy
            </h2>
            <h2 className="text-[16px] font-poppins font-light mt-[10px] hover:text-white cursor-pointer">
              Contact Us
            </h2>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
