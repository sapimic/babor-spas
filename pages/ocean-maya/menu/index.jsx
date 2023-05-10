import Head from "next/head";
import React from "react";
import Heading from "../../../components/Heading";
import SelectionCard from "../../../components/SelectionCard";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue Spa - Menu</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Ocean Blue Menu"
        subHeading="All of our services in one place."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <SelectionCard
            img="/images/menu/massages.jpg"
            link="/menu/massages"
            linkText="Massages"
          />
          <SelectionCard
            img="/images/menu/scrub.jpg"
            link="/menu/scrubs"
            linkText="Scrubs"
          />
          <SelectionCard
            img="/images/menu/body-treatments.jpg"
            link="/menu/body-treatments"
            linkText="Body Treatments"
          />
          <SelectionCard
            img="/images/menu/facials.jpg"
            link="/menu/facials"
            linkText="Facials"
          />
          <SelectionCard
            img="/images/menu/beauty-salon.jpg"
            link="/menu/salon"
            linkText="Beauty Salon"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
