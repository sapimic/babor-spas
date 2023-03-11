import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import ServiceCard from "../../components/ServiceCard";
import VideoCard from "../../components/VideoCard";

const BodyTreatments = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Body Treatments</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Body Treatments"
        subHeading="Body treatment services."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <VideoCard link="https://www.youtube.com/embed/MG4lnGePGkw?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/W3ZGb1boKtc?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/G2VP3q9i19s?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/MO8L83--R1Y?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/_TOe6INTdQ0?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/xSvg8Nki6o8?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/hSMBHvY0fVE?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/gwbOw1LsIoE?mute=1" />
          <ServiceCard img="/images/services/body-treatments/bt-1.jpg" />
          <ServiceCard img="/images/services/body-treatments/bt-2.jpg" />
          <ServiceCard img="/images/services/body-treatments/bt-3.jpg" />
          <ServiceCard img="/images/services/body-treatments/bt-4.jpg" />
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

export default BodyTreatments;
