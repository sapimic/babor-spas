import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import SelectionCard from "../../../components/SelectionCard";

const index = () => {
  return (
    <div>
      <Head>
        <title>Etra Spas - Dominican Republic</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Dominican Republic Spas"
        subHeading="Choose one of our spas located in the Dominican Republic."
      />

      <div className="flex-row justify-center align-center mb-50">
        <SelectionCard
          link="/ocean-blue"
          linkText="Ocean Blue Spa"
          img="../images/location/ocean-blue-spa.jpg"
        />
      </div>
    </div>
  );
};

export default index;
