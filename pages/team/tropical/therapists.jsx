import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const therapists = () => {
  return (
    <div className="container">
      <Head>
        <title>Tropical - Therapists</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading mainHeading="Tropical Therapists" subHeading="Our therapists." />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard
            personName="Diana"
            img="/images/team/tropical/t-diana.jpg"
          />
          <TeamCard
            personName="Naftaly"
            img="/images/team/tropical/t-naftaly.jpg"
          />
          <TeamCard
            personName="Albany"
            img="/images/team/tropical/t-albany.jpg"
          />
          <TeamCard
            personName="Claritza"
            img="/images/team/tropical/t-claritza.jpg"
          />
          <TeamCard
            personName="Doraliza"
            img="/images/team/tropical/t-doraliza.jpg"
          />
          <TeamCard
            personName="Karen"
            img="/images/team/tropical/t-karen.jpg"
          />
          <TeamCard
            personName="Paola"
            img="/images/team/tropical/t-paola.jpg"
          />
          <TeamCard
            personName="Gleibi"
            img="/images/team/tropical/t-gleibi.jpg"
          />
          <TeamCard
            personName="Romelia"
            img="/images/team/tropical/t-romelia.jpg"
          />
          <TeamCard
            personName="Denia"
            img="/images/team/tropical/t-denia.jpg"
          />
          <TeamCard
            personName="Raquel"
            img="/images/team/tropical/t-raquel.jpg"
          />
          <TeamCard
            personName="Yanelys"
            img="/images/team/tropical/t-yanelys.jpg"
          />
          <TeamCard personName="Nery" img="/images/team/tropical/t-nery.jpg" />
          <TeamCard
            personName="Vianka"
            img="/images/team/tropical/t-vianka.jpg"
          />
          <TeamCard
            personName="Mariana"
            img="/images/team/tropical/t-mariana.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default therapists;
