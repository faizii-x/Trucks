import React from "react";
import Image from "next/image";
import Load from "../../../public/png/load.jpg";
import Insta from "../../../public/png/insta.png";
import Twitt from "../../../public/png/twitt.png";
import Fb from "../../../public/png/fb.png";
import Youtube from "../../../public/png/youtube.png";

function Comp() {
  return (
    <>
      <div className="flex justify-center mt-24 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#176B87] rounded-3xl w-[83%] p-6">
          <div className="ml-6 lg:ml-24 mb-8">
            <h1 className="text-white text-[18px] font-poppins font-semibold mt-24">
              Contact Us
            </h1>
            <p className="text-white text-[36px] font-poppins font-semibold mt-3">
              Let's Talk Today
            </p>
            <div className="flex justify-start gap-3 ">
              <Image className="mt-8" src={Insta} />
              <Image className="mt-8" src={Twitt} />
              <Image className="mt-8" src={Fb} />
              <Image className="mt-8" src={Youtube} />
            </div>
          </div>
          <div className="flex justify-end">
            <Image className="w-[80%] rounded-2xl -mr-12" src={Load} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Comp;
