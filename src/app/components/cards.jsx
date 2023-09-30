"use client";
import React from "react";
import Slider from "react-slick";
import White from "../../../public/png/white.jpg"
import Red from "../../../public/png/red.jpg"
import Yellow from "../../../public/png/yellow.webp"
import Gray from "../../../public/png/gray.jpg"
import Black from "../../../public/png/black.jpg"
import Smallwhite from "../../../public/png/smallwhite.png"
import Redlong from "../../../public/png/redlong.jpg"


function Cards() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1327,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto w-[80%] mt-16">
        <h2 className="text-[44px] font-poppins font-semibold text-center ">
          {" "}
          Our Clients Us{" "}
        </h2>
        <Slider {...settings}>
          <div className=" mt-8 p-4 bg-white">
          <div
        className=" h-[100vh] w-[100%] bg-no-repeat bg-cover bg-center container mx-auto"
        style={{ backgroundImage: `url(${Black.src})` }}
      >
        <div className="w-[30%] h-[100%] bg-black opacity-60 p-8 hidden lg:block">
            <p className="text-white text-[20px] font-poppins -opacity-20 mt-24">
              We understand the importance of reliable and efficient
              transportation. That's why we offer dispatching services that are
              tailored to meet the unique needs of both truckers and load
              providers.
            </p>
            <h1 className="-opacity-20  text-[#49afd1] text-[24px] font-poppins font-medium mt-4">
              Jeff H
            </h1>
            <div className="-opacity-20  bg-[#49afd1] mt-8 w-[150px] h-[55px] flex justify-center items-center rounded-md text-white">
              Trucker ___
            </div>
            </div>
            </div>
          </div>
          <div className="shadow-[#49afd1]/50 mt-8 p-4">
          <div
        className=" h-[100vh] w-[100%] bg-no-repeat bg-cover bg-center container mx-auto"
        style={{ backgroundImage: `url(${Redlong.src})` }}
      >
        <div className="w-[30%] h-[100%] bg-black opacity-60 p-8 hidden lg:block">

            <p className="text-white text-[20px] font-poppins -opacity-20 mt-24">
              We understand the importance of reliable and efficient
              transportation. That's why we offer dispatching services that are
              tailored to meet the unique needs of both truckers and load
              providers.
            </p>
            <h1 className=" -opacity-20  text-[#49afd1] text-[24px] font-poppins font-medium mt-4">
              Leone 
            </h1>
            <div className="-opacity-20  bg-[#49afd1] mt-8 w-[150px] h-[55px] flex justify-center items-center rounded-md text-white">
              Broker ___
            </div>
            </div>
            </div>
          </div>
          <div className="shadow-[#49afd1]/50 mt-8 p-4">
          <div
        className=" h-[100vh] w-[100%] bg-no-repeat bg-cover bg-center container mx-auto"
        style={{ backgroundImage: `url(${Yellow.src})` }}
      >
        <div className="w-[30%] h-[100%] bg-black opacity-60 p-8 hidden lg:block">

            <p className="text-white text-[20px] font-poppins -opacity-20 mt-24">
              We understand the importance of reliable and efficient
              transportation. That's why we offer dispatching services that are
              tailored to meet the unique needs of both truckers and load
              providers.
            </p>

            <h1 className="-opacity-20  text-[#49afd1] text-[24px] font-poppins font-medium mt-4">
              Julia K
            </h1>
            <div className=" -opacity-20 bg-[#49afd1] mt-8 w-[150px] h-[55px] flex justify-center items-center rounded-md text-white">
              Trucker ___
            </div>
            </div>
            </div>
          </div>
          <div className="shadow-[#49afd1]/50 mt-8 p-4">
          <div
        className=" h-[100vh] w-[100%] bg-no-repeat bg-cover bg-center container mx-auto"
        style={{ backgroundImage: `url(${Gray.src})` }}
      >
        <div className="w-[30%] h-[100%] bg-black opacity-60 p-8 hidden lg:block">

            <p className="text-white text-[20px] font-poppins -opacity-20 mt-24">
              We understand the importance of reliable and efficient
              transportation. That's why we offer dispatching services that are
              tailored to meet the unique needs of both truckers and load
              providers.
            </p>
            <h1 className="-opacity-20  text-[#49afd1] text-[24px] font-poppins font-medium mt-4">
              Jeff H
            </h1>
            <div className="-opacity-20  bg-[#49afd1] mt-8 w-[150px] h-[55px] flex justify-center items-center rounded-md text-white">
              Trucker ___
            </div>
            </div>
            </div>
          </div>
          <div className="shadow-[#49afd1]/50 mt-8 p-4">
          <div
        className=" h-[100vh] w-[100%] bg-no-repeat bg-cover bg-center container mx-auto"
        style={{ backgroundImage: `url(${White.src})` }}
      >
        <div className="w-[30%] h-[100%] bg-black opacity-60 p-8 hidden lg:block">

            <p className="text-white text-[20px] font-poppins -opacity-20 mt-24">
              We understand the importance of reliable and efficient
              transportation. That's why we offer dispatching services that are
              tailored to meet the unique needs of both truckers and load
              providers.
            </p>
            <h1 className="-opacity-20  text-[#49afd1] text-[24px] font-poppins font-medium mt-4">
              Parker
            </h1>
            <div className=" -opacity-20 bg-[#49afd1] mt-8 w-[150px] h-[55px] flex justify-center items-center rounded-md text-white">
              Broker ___
            </div>
            </div>
            </div>
          </div>

          <div className="shadow-3xl mt-8 p-4">
          <div
        className=" h-[100vh] w-[100%] bg-no-repeat bg-cover bg-center container mx-auto"
        style={{ backgroundImage: `url(${Red.src})` }}
      >
        <div className="w-[30%] h-[100%] bg-[black] opacity-60 p-8 hidden lg:block">

            <p className="text-white text-[20px] font-poppins -opacity-20 mt-24">
              We understand the importance of reliable and efficient
              transportation. That's why we offer dispatching services that are
              tailored to meet the unique needs of both truckers and load
              providers.
            </p>

            <h1 className="-opacity-20  text-[#49afd1] text-[24px] font-poppins font-medium mt-4">
              Jeff H
            </h1>
            <div className="-opacity-20  bg-[#49afd1] mt-8 w-[150px] h-[55px] flex justify-center items-center rounded-md text-white">
              Trucker ___
            </div>
            </div>
            </div>
          </div>
          <div className="shadow-3xl mt-8 p-4">
          <div
        className=" h-[100vh] w-[100%] bg-no-repeat bg-cover bg-center container mx-auto"
        style={{ backgroundImage: `url(${Smallwhite.src})` }}
      >
        <div className="w-[30%] h-[100%] bg-black opacity-60 p-8 hidden lg:block">

            <p className="text-white text-[20px] font-poppins -opacity-20 mt-24">
              We understand the importance of reliable and efficient
              transportation. That's why we offer dispatching services that are
              tailored to meet the unique needs of both truckers and load
              providers.
            </p>
            <h1 className="text-[#49afd1] -opacity-20 text-[24px] font-poppins font-medium mt-4">
              Leena
            </h1>
            <div className="-opacity-20  bg-[#49afd1] mt-8 w-[150px] h-[55px] flex justify-center items-center rounded-md text-white">
              Broker ___
            </div>
            </div>
            </div>
          </div>
          
        </Slider>
      </div>
    </>
  );
}

export default Cards;
