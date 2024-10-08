import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page5() {
  const history = useNavigate();
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#170328] to-[#2D0246] p-16">
      <div className="text-center flex flex-col gap-9">
        <h1 className="font-700 text-[48px]">
          Begin Your Crypto Journey Today!
        </h1>
        <div>
          <a className=" p-2 px-10 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer" onClick={() => history('/signup')}>
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
}
