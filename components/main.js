import React from "react";
import SignIn from "./signIn";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center my-60">
      <p className="text-7xl font-bold mb-10">🏏 Criz, a Cricket Quiz App</p>
      <SignIn value="Sign In to Play!" />
    </div>
  );
};

export default Main;
