import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import SelectionCard from "../../../components/SelectionCard";

const index = () => {
  return (
    <div>
      <Head>
        <title>Etra Spas - Mexico</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Mexico Spas"
        subHeading="Choose one of our spas located in Mexico."
      />
      <div className="flex-row justify-center align-center mb-50">
        <SelectionCard
          link="/ocean-maya"
          linkText="Ocean Maya Spa"
          img="../images/location/ocean-maya-spa.jpg"
        />
      </div>
    </div>
  );
};

export default index;
