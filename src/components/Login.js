import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>
      <form className="absolute rounded-lg bg-opacity-80 bg-black p-12 w-1/4 mx-auto my-36 right-0 left-0 text-white">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="py-3 my-4 w-full px-4 rounded-lg bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Enter Email"
          className="py-3 my-4 w-full px-4 rounded-lg bg-gray-700"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="py-3 my-4 w-full px-4 rounded-lg bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-600 w-full font-bold rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered! Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
