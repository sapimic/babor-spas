import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const Advisors = () => {
  return (
    <div className="container">
      <Head>
        <title>Cofresi Palm Beach - Advisors</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Heading
        mainHeading="Cofresi Palm Beach Advisors"
        subHeading="Our advisors."
      />
      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard
            personName="Victor"
            img="/images/team/cpb/c-a-victor.jpg"
            contactable="true"
            number="https://wa.me/18093992640"
          />
          <TeamCard
            personName="Adrian"
            img="/images/team/cpb/c-a-adrian.jpg"
            contactable="true"
            number="https://wa.me/18298707134"
          />
          <TeamCard
            personName="Adri"
            img="/images/team/cpb/c-a-adry.jpg"
            contactable="true"
            number="https://wa.me/18096101574"
          />
        </div>
      </div>
    </div>
  );
};

export default Advisors;
