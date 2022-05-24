import React, { useContext } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Main from "../components/main";

import { Context } from "../context/store";

import Question from "../components/carousel/question";

export default function Home() {
  const {
    detail: { isLogin },
  } = useContext(Context);

  return (
    <div className="bg-black font-inter h-screen text-white">
      <Head>
        <title>criz</title>
      </Head>
      <Navbar />
      {!isLogin ? <Main /> : <Question />}
    </div>
  );
}
