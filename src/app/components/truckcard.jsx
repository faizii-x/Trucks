import React from "react";
import Image from "next/image";
import Longg from "../../../public/png/boy.png";
import White from "../../../public/png/white.jpg";
import Four from "../../../public/png/four.png";

function Truckcard() {
  return (
    <>
      <div className="ml-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[84%] mt-24 container mx-auto">
          <div className="bg-white shadow-xl pb-4">
            <Image className="h-[270px]" src={Longg} />
            <h1 className="text-[18px] font-poppins font-semibold p-3">Service</h1>
            <p className="text-[18\6px] font-poppins font-light p-3">Our team of experienced professionals works tirelessly to ensure that your packages are delivered on time and within budget.Whether you're looking for Truck Dispatching services or Truckers, we got you covered.</p>
          </div>
          <div className="bg-white shadow-xl pb-4">
            <Image className="h-[270px]" src={White} />
            <h1 className="text-[18px] font-poppins font-semibold p-3">Truck</h1>
            <p className="text-[18\6px] font-poppins font-light p-3">Our team of experienced professionals works tirelessly to ensure that your packages are delivered on time and within budget.Whether you're looking for Truck Dispatching services or Truckers, we got you covered.</p>
          </div>
          <div className="bg-white shadow-xl pb-4">
            <Image className="h-[270px]" src={Four} />
            <h1 className="text-[18px] font-poppins font-semibold p-3">Truck</h1>
            <p className="text-[18\6px] font-poppins font-light p-3">Our team of experienced professionals works tirelessly to ensure that your packages are delivered on time and within budget.Whether you're looking for Truck Dispatching services or Truckers, we got you covered.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Truckcard;
