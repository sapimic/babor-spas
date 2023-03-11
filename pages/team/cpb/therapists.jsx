import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const Therapists = () => {
  return (
    <div className="container">
      <Head>
        <title>Cofresi Palm Beach - Therapists</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Cofresi Palm Beach Therapists"
        subHeading="Our therapists."
      />
      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard personName="Suna" img="/images/team/cpb/c-suna.jpg" />
          <TeamCard personName="Yemi" img="/images/team/cpb/c-yemi.jpg" />
          <TeamCard personName="Idania" img="/images/team/cpb/c-idania.jpg" />
          <TeamCard personName="Florian" img="/images/team/cpb/c-florian.jpg" />
          <TeamCard personName="Maribel" img="/images/team/cpb/c-maribel.jpg" />
          <TeamCard personName="Yuliana" img="/images/team/cpb/c-yuliana.jpg" />
          <TeamCard personName="Belkis" img="/images/team/cpb/c-belkis.jpg" />
          <TeamCard
            personName="Maricela"
            img="/images/team/cpb/c-maricela.jpg"
          />
          <TeamCard personName="Rosa" img="/images/team/cpb/c-rosa.jpg" />
          <TeamCard
            personName="Marianela"
            img="/images/team/cpb/c-marianela.jpg"
          />
          <TeamCard
            personName="Lysmalier"
            img="/images/team/cpb/c-lysmalier.jpg"
          />
          <TeamCard personName="Maria" img="/images/team/cpb/c-maria.jpg" />
          <TeamCard
            personName="Niurquys"
            img="/images/team/cpb/c-niurquys.jpg"
          />
          <TeamCard
            personName="Aracelis"
            img="/images/team/cpb/c-aracelis.jpg"
          />
          <TeamCard personName="Darys" img="/images/team/cpb/c-darys.jpg" />
          <TeamCard personName="Daniela" img="/images/team/cpb/c-daniela.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Therapists;
