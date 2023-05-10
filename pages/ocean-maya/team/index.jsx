import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import ContactTeam from "../../../components/ContactTeam";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue - Team</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Our Team"
        subHeading="Welcome to Ocean Blue's team, make sure to contact us!"
      />

      <div className="flex-column justify-center align-center">
        <ContactTeam />
      </div>
    </div>
  );
};

export default index;
