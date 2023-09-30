import React from "react";
import Image from "next/image";
import Call from "../../../public/png/call.jpg";
                  
function Para() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
        <div className="flex justify-center mt-20">
          <Image className="w-[75%] h-[600px]" src={Call} />
        </div>
        <div className="shadow-2xl rounded-md shadow-[#49afd1]/50 w-full lg:w-[90%] mt-16 p-12">
          <h1 className="text-[20px] font-semibold mt-4">
            Hammer <span className="text-[#49afd1]">Lane</span>{" "}
          </h1>
          <p className="focus-in-contract-bck text-[38px] font-poppins font-semibold mt-2">
            We <span className="text-[#49afd1]">Empower</span> Truckers & Load
            Brokers
          </p>

          <p className="mt-10 leading-7">
            We understand the importance of reliable and efficient
            transportation. That's why we offer dispatching services that are
            tailored to meet the unique needs of both truckers and load
            providers.
          </p>

          <p className=" mt-10 leading-7">
            Our team of experienced professionals works tirelessly to ensure
            that your packages are delivered on time and within budget.
          </p>
          <div className="mt-8 ">
            <button className="jello-vertical border rounded-md text-white bg-[#49afd1] hover:bg-[#176B87] w-[130px] h-[57px]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Para;
