import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import ServiceCard from "../../components/ServiceCard";
import { FaUsers } from "react-icons/fa";

const BeautySalon = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Beauty Salon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading mainHeading="Beauty Salon" subHeading="Beauty salon services." />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <ServiceCard img="/images/services/beauty-salon/bs-1.jpg" />
          <ServiceCard img="/images/services/beauty-salon/bs-2.jpg" />
          <ServiceCard img="/images/services/beauty-salon/bs-3.jpg" />
          <ServiceCard img="/images/services/beauty-salon/bs-4.jpg" />
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

export default BeautySalon;
