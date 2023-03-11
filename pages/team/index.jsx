import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import SelectionCard from "../../components/SelectionCard";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Team</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Our Team"
        subHeading="Choose our team from the Cofresi Palm Beach Spa or the Tropical Spa."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <SelectionCard
            img="/images/team/cpb.jpg"
            heading="CPB"
            link="/team/cpb"
            linkText="Spa in Cofresi Palm Beach"
          />
          <SelectionCard
            img="/images/team/tropical.jpg"
            heading="Tropical"
            link="/team/tropical"
            linkText="Spa in Tropical"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
