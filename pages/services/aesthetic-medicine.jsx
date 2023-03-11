import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import ServiceCard from "../../components/ServiceCard";
import VideoCard from "../../components/VideoCard";

const AestheticMedicine = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Aesthetic Medicine</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Aesthetic Medicine"
        subHeading="Aesthetic medicine services."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <VideoCard link="https://www.youtube.com/embed/dhoXCTjLM0M?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/hSMBHvY0fVE?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/FrGd03boNAc?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/--L6kfmbiyg?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/MO8L83--R1Y?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/l2Y-YJiP-gU?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/_TOe6INTdQ0?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/m8mehoc-b4g?mute=1" />
          <ServiceCard img="/images/services/aesthetic-medicine/am-1.jpg" />
          <ServiceCard img="/images/services/aesthetic-medicine/am-2.jpg" />
          <ServiceCard img="/images/services/aesthetic-medicine/am-3.jpg" />
          <ServiceCard img="/images/services/aesthetic-medicine/am-4.jpg" />
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

export default AestheticMedicine;
