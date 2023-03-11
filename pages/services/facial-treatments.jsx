import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import ServiceCard from "../../components/ServiceCard";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

const FacialTreatments = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Facial Treatments</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Facial Treatments"
        subHeading="Services related to facial treatments."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <ServiceCard img="/images/services/facial-treatments/ft-1.jpg" />
          <ServiceCard img="/images/services/facial-treatments/ft-2.jpg" />
          <ServiceCard img="/images/services/facial-treatments/ft-3.jpg" />
          <ServiceCard img="/images/services/facial-treatments/ft-4.jpg" />
        </div>
        <Link href="/team">
          <a className="button">
            <FaUsers
              style={{
                verticalAlign: "middle",
                fontSize: "20px",
                marginRight: "10px",
              }}
            />
            Contact Team
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FacialTreatments;
