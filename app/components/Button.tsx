"use client";

import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    console.log("Login Clicked");
    router.push("/Login");
  };

  const handleSignUpClick = () => {
    console.log("SignUp Clicked");
    router.push("/SignUp");
  };

  return (
    <div className="pt-20">
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignUpClick}>GET STARTED</button>
    </div>
  );
};

export default Button;
