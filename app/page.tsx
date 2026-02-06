"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const HomePage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [emailError, setEmailError] = useState("");
  const [reasonError, setReasonError] = useState("");

  const blockedDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "protonmail.com",
    "yahoo.co.in",
    "hotmail.com",
  ];

  const validateEmail = (emailVal: string) => {
    const domain = emailVal.split("@")[1]?.toLowerCase();
    if (blockedDomains.includes(domain || "")) {
      return "Business emails only.";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const reasonErr =
      reason.length < 20 ? "Must be 20 characters or more." : "";

    setEmailError(emailErr);
    setReasonError(reasonErr);

    if (!emailErr && !reasonErr) {
      router.push("/success");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-black text-2xl font-bold my-6 text-center">
          Internal Tools Access
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your business email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(validateEmail(e.target.value));
            }}
            className="w-full p-3 border-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 hover:border-gray-500 focus:ring-gray-500"
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <div>
            <textarea
              placeholder="Why do you need access?"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
              }}
              className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 hover:border-gray-500 focus:ring-gray-500 h-30 "
              required
            />
            <p className="text-sm text-gray-500 text-right">
              {reason.length}/20
            </p>
            {reasonError && (
              <p className="text-red-500 text-sm">{reasonError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!email || !reason}
            className="w-full text-black bg-gray-200  py-3 px-4  disabled:hover:bg-gray-200  disabled:hover:text-black rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium disabled:cursor-not-allowed"
          >
            Request Access Token
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
