import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import InvalidPopup from "./incorrectPhraseModal"; // popup to show invalid input
import ValidPopup from "./correctPhraseModal"; // popup to show success

export default function LoginEmail() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showInvalidPopup, setShowInvalidPopup] = useState(false); 
  const [showValidPopup, setShowValidPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // const handleLoginClick = () => {
  //   navigate("/homePage");
  // };

  useEffect(() => {
    const validateForm = () => {
      // const phoneRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // const isNameValid = fullName.trim() !== "";

      setIsFormValid(emailRegex.test(email));
    };

    validateForm();
  }, [email]);

  const handleLoginClick = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError("");

    if (!isFormValid) {
      setError("enter valid email");
      setIsLoading(false);
      return;
    }

    const data = {
      email_or_phone: email,
      password: password,
    };
    console.log("data: ", data);

    try {
      const response = await fetch(
        "https://adrox-89b6c88377f5.herokuapp.com/api/users/login-with-credentials/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Cookies.set(response.me);
      console.log("Login responseData: ", response);

      if (response.ok) {
        setShowValidPopup(true);
        setTimeout(() => {
          navigate("/homePage");
        }, 2000);
        setIsLoading(false);
      } else {
        setShowInvalidPopup(true);
        setIsLoading(false);
      }
    } catch (error) {
      setShowInvalidPopup(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full gap-10 py-5 sm:p-10 z-50 my-10">
      <div className="w-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Here"
          className="bg-transparent border-b-2 pb-2 outline-none w-full"
          // onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="text-red-500 text-[14px]">{error}</p>
      </div>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password Here"
        className="bg-transparent border-b-2 pb-2 outline-none"
        //   onChange={(e) => setEmail(e.target.value)}
      ></input>
      <div className="text-center   z-50">
        <button
          className="p-2 px-20 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer"
          onClick={handleLoginClick}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>

      {showInvalidPopup && (
        <InvalidPopup
          text="invalid credentials. please try again."
          closeModal={() => setShowInvalidPopup(false)}
        />
      )}
      {showValidPopup && <ValidPopup text="Email successfully verified..." />}
    </div>
  );
}
