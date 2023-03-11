import Head from "next/head";
import React from "react";
import Heading from "../../components/Heading";
import Link from "next/link";
import ServiceCard from "../../components/ServiceCard";
import { FaUsers } from "react-icons/fa";

const Massages = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Massages</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading mainHeading="Massages" subHeading="Massage services." />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <ServiceCard img="/images/services/massages/m-1.jpg" />
          <ServiceCard img="/images/services/massages/m-2.jpg" />
          <ServiceCard img="/images/services/massages/m-3.jpg" />
          <ServiceCard img="/images/services/massages/m-4.jpg" />
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

export default Massages;
