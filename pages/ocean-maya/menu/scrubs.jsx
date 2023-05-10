import React from "react";
import Heading from "../../../components/Heading";
import Head from "next/head";
import MenuItem from "../../../components/MenuItem";

const Scrubs = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue - Scrubs</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Scrubs"
        subHeading="Enjoy our unique scrub services."
      />

      <div className="flex-column">
        <MenuItem
          heading="Sea Salt"
          price="$90"
          time="25min"
          description="Sea Salt from primitive sediments from Canada"
        />
        <MenuItem heading="Salt and Algae" price="$90" time="25min" />
        <MenuItem heading="Cream Scrub" price="$90" time="25min" />
      </div>
    </div>
  );
};

export default Scrubs;
