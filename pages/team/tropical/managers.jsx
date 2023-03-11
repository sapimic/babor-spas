import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const Managers = () => {
  return (
    <div className="container">
      <Head>
        <title>Tropical - Managers</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading mainHeading="Tropical Managers" subHeading="Our managers." />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center">
          <TeamCard
            personName="Alexis"
            role="Manager"
            img="/images/team/tropical/t-m-alexis.jpg"
          />
          <TeamCard
            personName="Aleida"
            role="Assistent"
            img="/images/team/tropical/t-m-aleida.jpg"
            contactable="true"
            number="https://wa.me/18294714784"
          />
        </div>
      </div>
    </div>
  );
};

export default Managers;
