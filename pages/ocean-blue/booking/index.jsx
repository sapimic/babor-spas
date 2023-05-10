import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import ReservationForm from "../../../components/ReservationForm";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue Spa - Booking</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Book Now"
        subHeading="Treat yourself to a
        unique experience."
      />

      <div className="flex-column justify-center align-center">
        <ReservationForm />
      </div>
    </div>
  );
};

export default index;
