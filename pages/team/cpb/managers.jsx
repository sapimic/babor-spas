import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const Managers = () => {
  return (
    <div className="container">
      <Head>
        <title>Cofresi Palm Beach - Managers</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Cofresi Palm Beach Managers"
        subHeading="Our managers."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center">
          <TeamCard
            personName="Yajaime"
            role="Manager"
            img="/images/team/cpb/c-m-yajaime.jpg"
          />
          <TeamCard
            personName="Bethania"
            role="Assistent"
            img="/images/team/cpb/c-m-bethania.jpg"
            contactable="true"
            number="https://wa.me/18294260809"
          />
        </div>
      </div>
    </div>
  );
};

export default Managers;
