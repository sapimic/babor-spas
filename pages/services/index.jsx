import Head from "next/head";
import React from "react";
import Heading from "../../components/Heading";
import SelectionCard from "../../components/SelectionCard";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue Spa - Menu</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Heading
        mainHeading="Ocean Blue Menu"
        subHeading="Select one of the featured services."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <SelectionCard
            img="/images/services/spa-menu.jpg"
            link="/services/menu"
            linkText="Spa Menu"
          />
          <SelectionCard
            img="/images/services/aesthetic-medicine.jpg"
            link="/services/aesthetic-medicine"
            linkText="Aesthetic Medicine"
          />
          <SelectionCard
            img="/images/services/facial-treatments.jpg"
            link="/services/facial-treatments"
            linkText="Facial Treatments"
          />
          <SelectionCard
            img="/images/services/body-treatments.jpg"
            link="/services/body-treatments"
            linkText="Body Treatments"
          />
          <SelectionCard
            img="/images/services/massages.jpg"
            link="/services/massages"
            linkText="Massages"
          />
          <SelectionCard
            img="/images/services/beauty-salon.jpg"
            link="/services/beauty-salon"
            linkText="Beauty Salon"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
