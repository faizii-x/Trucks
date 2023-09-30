"use client"
import CountUp from "react-countup";

function Count() {
  return (
    <>
      <div className="bg-[#e9eaf3] p-8 pb-24">
        <h1 className="text-[20px] font-poppins font-medium text-center mt-6">Partner with Hammer Lane</h1>
        <h2 className=" tracking-in-contract-bck-top text-[38px] font-poppins font-semibold text-center mt-1">Get <span className="text-[#49afd1]">hired</span>  in top companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container relative  mx-auto gap-4 mt-16">
          <div className="  text-center bg-black rounded-md p-10">
            <div className="flex justify-center">
            <CountUp
              className="text-[72px] text-[#49afd1] font-medium sm:text-[90px]"
              start={0}
              end={380}
              duration={15}
            />
            <p className="mt-1 text-[#49afd1] text-[62px] sm:text-[82px]">+</p>
</div>
            <p className="text-white text-[18px] text-center font-nunito">
              Daily Loads
            </p>
          </div>

          <div className="  text-center bg-black rounded-md p-10">
            <div className="flex justify-center">
            <CountUp
              className="text-[72px] text-[#49afd1] font-medium sm:text-[90px]"
              start={0}
              end={160}
              duration={15}

            />
            <p className="mt-1 text-[#49afd1] text-[62px] sm:text-[82px]">+</p>
            </div>

            <p className="text-white text-[18px] text-center font-nunito">
              Available Trukers
            </p>
          </div>

          <div className="  text-center bg-black rounded-md p-10">
            <div className="flex justify-center">
            <CountUp
              className="text-[#49afd1] font-medium text-[72px] sm:text-[90px]"
              start={0}
              end={50}
              duration={15}

            />
            <p className="mt-1 text-[#49afd1] text-[62px] sm:text-[82px]">+</p>
            </div>

            <p className="text-white text-[18px] text-center font-nunito">
              Available States
            </p>
          </div>

                 </div>
      </div>
    </>
  );
}

export default Count;
