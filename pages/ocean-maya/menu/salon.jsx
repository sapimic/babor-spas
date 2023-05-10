import React from "react";
import Heading from "../../../components/Heading";
import Head from "next/head";
import MenuItem from "../../../components/MenuItem";

const Salon = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue - Beauty Salon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Beauty Salon"
        subHeading="Enhance your beauty in a beauitful way."
      />

      <div className="flex-column">
        <MenuItem heading="Regular Manicure" />
        <MenuItem heading="Regular Pedicure" />
        <MenuItem heading="Spa Manicure" />
        <MenuItem heading="Spa Pedicure" />
        <MenuItem heading="Paraffin Hand" />
        <MenuItem heading="Feet Paraffin" />
        <MenuItem heading="Waxing" />
        <MenuItem heading="Wash & Set" />
        <MenuItem heading="Wedding Hairstyles" />
        <MenuItem heading="Men Haircut" />
        <MenuItem heading="Ladies Haircut" />
        <MenuItem heading="Hair Conditioning" />
        <MenuItem heading="Mustache & Beard Shaving" />
        <MenuItem heading="Caribbean Braid" />
        <MenuItem heading="Make Up" />
      </div>
    </div>
  );
};

export default Salon;
