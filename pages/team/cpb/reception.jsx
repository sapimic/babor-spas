import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const Reception = () => {
  return (
    <div className="container">
      <Head>
        <title>Cofresi Palm Beach - Reception</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Cofresi Palm Beach Reception"
        subHeading="Our reception staff."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard
            personName="Elaine"
            img="/images/team/cpb/c-r-elaine.jpg"
            number="https://wa.me/18099728327"
            contactable="true"
            mailable="true"
            mail="mailto:recepcionista.yinyangspa@
            lhvcresorts.com"
          />
          <TeamCard
            personName="Martha"
            img="/images/team/cpb/c-r-martha.jpg"
            number="https://wa.me/18098663867"
            contactable="true"
            mailable="true"
            mail="mailto:recepcionista.yinyangspa@
            lhvcresorts.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Reception;
