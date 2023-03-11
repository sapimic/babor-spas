import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import SelectionCard from "../../../components/SelectionCard";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Tropical</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Tropical Team"
        subHeading="Choose from our managers, reception, advisors and therapists."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <SelectionCard
            img="/images/team/reception.jpg"
            link="/team/tropical/reception"
            linkText="Our Reception"
          />
          <SelectionCard
            img="/images/team/advisors.jpg"
            link="/team/tropical/advisors"
            linkText="Our Advisors"
          />
          <SelectionCard
            img="/images/team/therapists.jpg"
            link="/team/tropical/therapists"
            linkText="Our Therapists"
          />
          <SelectionCard
            img="/images/team/managers.jpg"
            link="/team/tropical/managers"
            linkText="Our Managers"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
