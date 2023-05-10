import React from "react";
import Head from "next/head";
import Heading from "../components/Heading";
import SelectionCard from "../components/SelectionCard";

const index = () => {
  return (
    <div>
      <Head>
        <title>Etra Spas</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Welcome to Etra Spas"
        subHeading="Choose where you are located."
      />

      <div className="flex-row justify-center align-center mb-50">
        <SelectionCard
          link="/location/dominican-republic"
          linkText="Dominican Republic"
          img="../images/location/dominican-republic.jpg"
        />
        <SelectionCard
          link="/location/mexico"
          linkText="Mexico"
          img="../images/location/mexico.jpg"
        />
      </div>
    </div>
  );
};

export default index;
