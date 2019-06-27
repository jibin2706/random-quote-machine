import React from "react";
import Head from "next/head";
import QuoteGenerator from "../components/QuoteGenerator";
import "../components/styles.scss";

function index() {
  return (
    <div>
      <Head>
        <title>Quote Generator</title>
        <meta name="theme-color" content="color" />
      </Head>
      <QuoteGenerator />
    </div>
  );
}

export default index;
