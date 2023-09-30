"use client";
import { useState } from "react";
import Backupsol from "../../../public/png/logo.png";
import Image from "next/image";
import Drawer from "./drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  return (
    <>
      <div className="bg-[#176B87]">
        <header className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 mx-auto container p-2">
          <div className="col-span-2">
            <Link href="/">
              <Image className="w-full cursor-pointer" src={Backupsol} />
            </Link>
          </div>
          <div className="col-span-8  self-center hidden lg:block">
            <div className="flex justify-center gap-10 mt-2">
              <Link href="/">
                <p className="lg:text-[16px] xl:text-[18px] text-white font-poppins cursor-pointer hover:text-[#49afd1] ml-6">
                  {pathname === "/" ? (
                    <div className="border-b-2 border-white">Home</div>
                  ) : (
                    "Home"
                  )}
                </p>
              </Link>

              <Link href="/dispatch">
                <p className="lg:text-[16px] xl:text-[18px] text-white font-poppins cursor-pointer hover:text-[#49afd1]">
                  {pathname === "/dispatch" ? (
                    <div className="border-b-2 border-white">
                      Dispatch Services
                    </div>
                  ) : (
                    "Dispatch Services"
                  )}
                </p>
              </Link>

              <Link href="/solution">
                <p className="lg:text-[16px] xl:text-[18px] text-white font-poppins cursor-pointer hover:text-[#49afd1]">
                  {pathname === "/solution" ? (
                    <div className="border-b-2 border-white">
                      Broker Solutions
                    </div>
                  ) : (
                    "Broker Solutions"
                  )}
                </p>
              </Link>

              <Link href="/about">
                <p className="lg:text-[16px] xl:text-[18px] text-white font-poppins cursor-pointer hover:text-[#49afd1]">
                  {pathname === "/about" ? (
                    <div className="border-b-2 border-white"> About Us</div>
                  ) : (
                    " About Us"
                  )}
                </p>
              </Link>

              <Link href="/contact">
                <p className="lg:text-[16px] xl:text-[18px]  text-white font-poppins cursor-pointer hover:text-[#49afd1]">
                  {pathname === "/contact" ? (
                    <div className="border-b-2 border-white">Contact</div>
                  ) : (
                    "Contact"
                  )}
                </p>
              </Link>
            </div>
          </div>

          <div className="col-span-2 mx-auto self-center hidden lg:block">
            <div className="flex justify-start gap-3">
              <button className="bg-green-450 border font-poppins text-white p-3 w-[130px] hover:bg-white hover:text-[#176B87] rounded-md">
                Brokers
              </button>
              <button className="bg-green-450 border block  md:hidden font-poppins text-white p-3 w-[130px] hover:bg-green-600 rounded-md">
                Brokers
              </button>
            </div>
          </div>

          <div className="col-span-10 -mt-9  flex lg:hidden  justify-end">
            <svg
              onClick={() => setOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-center text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          <Drawer open={open} setOpen={handleOnClose} />
        </header>
      </div>
    </>
  );
}

export default Navbar;
