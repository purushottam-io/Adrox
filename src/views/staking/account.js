import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import axios from "axios";
import stroke from "./assets/strokeEffect.png";
import ellipse from "./assets/ellipse.png";
import dollarBlue from "./assets/dollarBlue.png";
import starBlue from "./assets/starBlue.png";
import swap from "./assets/swapBlue.png";
import HomeHeader from "../homePage/pages/homeHeader";
import { Home } from "lucide-react";
import adam2 from "./assets/adam3.png";
import Footer from "../landingPage/pages/footer";
import { Helmet } from "react-helmet";
import CopiedModal from "../signupPage/pages/copiedModal";

export default function Account ( { closeModal } )
{
  const [ showModal, setShowModal ] = useState( false );
  const [ clipBoard, setClipBoard ] = useState( "Copy to Clipboard" );
  const history = useNavigate();

  const handleCopyToClipboard = () =>
  {
    navigator.clipboard.writeText( Cookies.get( "referral_id" ) ).then(
      setShowModal( true ),
      setClipBoard( "Copied..." ),
      setTimeout( () =>
      {
        setClipBoard( "Copy to Clipboard" );
      }, 2000 )
    );
  };

  return (
    <div className=" font-nunito bg-[#0F011A]  text-white overflow-hidden relative">
      <div>
        <HomeHeader></HomeHeader>
      </div>
      <Helmet>
        <title>Adrox - Account</title>
      </Helmet>

      <div className="flex justify-center items-center  w-screen relative mb-20">
        <div className="flex max-md:flex-col h-9/12 gap-20 lg:gap-56 mt-40 p-10 w-">
          <div className="left flex flex-col gap-20 p- z-50 max-md:items-center">
            <div className="top flex justify-start">
              <div className="flex flex-col gap-2 md:items-start items-center">
                <img src={ adam2 } className="w-20"></img>
                <p className="text-[52px] font-700">{ Cookies.get( "full_name" ) }</p>
                <div className="flex items-center gap-2  p-2 px-6 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer">
                  <p className="text-[12px]">Edit Profile Picture</p>
                  <i class="fa-regular fa-pen-to-square"></i>
                </div>
              </div>
            </div>
            <div className="bottom flex flex-col gap-3 max-md:items-center">
              <div className="w-full flex gap-2 items-center max-md:text-center">
                <a className="p-1 px-3 rounded-lg bg-slate-600 bg-opacity-20">
                  Referral id
                </a>
                <p>{ Cookies.get( "referral_id" ) }</p>
              </div>
              <div className="flex items-center gap-2 ">
                <i class="fa-regular fa-clone font-100"></i>
                <p
                  className="underline text-[px] font-100 cursor-pointer"
                  onClick={ handleCopyToClipboard }
                >
                  { clipBoard }
                </p>
              </div>
            </div>
          </div>

          <div className="right flex flex-col gap-20 max-md:items-center">
            <div className="up flex gap-8 max-sm:flex-col">
              <div className="p-7 px-10 flex flex-col gap-5 border border-slate-600 rounded-2xl bg-slate-500 bg-opacity-5">
                <p className="p-1 px-2 rounded-lg bg-slate-600 bg-opacity-20 text-[15px] font-200 w-32">
                  ADROX Wallet
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-100">Holdings</p>
                  <div className="h-[1px] w-full bg-white bg-opacity-15 "></div>
                  <p className="font-700 text-[32px]">$ 1,000 USDT</p>
                </div>
              </div>

              <div className="p-7 px-10 flex flex-col gap-5 border border-slate-600 rounded-2xl bg-slate-500 bg-opacity-5">
                <p className="p-1 px-2 rounded-lg bg-slate-600 bg-opacity-20 text-[16px] font-200 w-32">
                  ADROX Wallet
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-100">Holdings</p>
                  <div className="h-[1px] w-full bg-white bg-opacity-15 "></div>
                  <p className="font-700 text-[32px]">$ 1,000 USDT</p>
                </div>
              </div>
            </div>

            <div className="down flex max-sm:flex-col md:flex-col gap-8 text-slate-300 max-sm:items-start max-md:items-center sm:justify-center z-50">
              <div className="flex flex-col gap-3">
                <div className="flex p-2 px-2 bg-slate-600 bg-opacity-15 w-20 items-center justify-center rounded-md gap-2">
                  <i class="fa-regular fa-envelope"></i>
                  <p className="text-[12px] font-100">Email</p>
                </div>
                <p className="font-500 text-[24px]">{ Cookies.get( "email" ) || "email" }</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex p-2 px-2 bg-slate-600 bg-opacity-15 w-32 items-center justify-center rounded-md gap-2">
                  <i class="ri-smartphone-line"></i>{ " " }
                  <p className="text-[12px] font-100">Phome Number</p>
                </div>
                <p className="font-500 text-[24px]">
                  { "+91 " + ( Cookies.get( "mobile_number" ) || "phoneNo" ) }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-[80%] sm:-right-[60%] top-[50%] sm:top-[20%]">
          <img src="/ellipse.png" alt="ellipse" />
        </div>
        <div className="absolute -left-[110%] sm:-left-[80%] md:-left-[40%] w-[80rem] -top-[30%]">
          <img src="/ellipse.png" alt="ellipse" />
        </div>
      </div>

      <div className="bg-[#0F011A] z-[1000]">
        <Footer></Footer>
      </div>
      <div>
        { showModal && (
          <CopiedModal
            closeModal={ () => setShowModal( false ) }
            text="Refferal id Copied to clipboard"
          />
        ) }
      </div>
    </div>
  );
}
