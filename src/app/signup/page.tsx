import SignForm from "@/components/signform";
import SignWith from "@/components/signwith";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[50px] pb-[70px]">
      <h1 className="text-[#FC76AA] md:text-[32px] text-[20px] md:tracking-[-1.6px] font-Gotham">
        Create an account
      </h1>
      <h1 className="text-black/60 text-[16px] tracking-[-0.32px]">
        Let’s create your account
      </h1>

      <SignForm page={"signup"} />

      <Link
        href="signup/registrationSuccess"
        className="w-[90%] max-w-[341px] h-[58px] bg-[#FC76AA] flex items-center justify-center rounded-[10px]
        text-white md:text-xl text-base font-semibold hover:text-[#FC76AA] hover:bg-white border-2 border-[#FC76AA]
      "
      >
        Sign Up
      </Link>

      <SignWith />

      <h1 className="tracking-[-0.4px] md:text-xl text-base text-black/60">
        Already a member?
        <Link
          href={"/signin"}
          className="text-black font-[350px] underline-offset-2 underline"
        >
          {" "}
          Log In
        </Link>
      </h1>
    </div>
  );
};

export default Signup;
