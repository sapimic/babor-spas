import Head from "next/head";
import IconCard from "../components/IconCard";
import LandingHero from "../components/LandingHero";
import FlexGallery from "../components/FlexGallery";
import Heading from "../components/Heading";
import logo from "../public/images/etra-logo.png";
import Link from "next/link";
import VideoHero from "../components/VideoHero";
import Image from "next/image";
import { FaMobileAlt } from "react-icons/fa";
import styles from "../styles/Home.module.scss";
import Popup from "../components/Popup";
import SelectionCard from "../components/SelectionCard";
import ReservationForm from "../components/ReservationForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue Spa</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ReservationForm />

      <div className={styles.logo}>
        <Image src={logo} alt="Etra Spa Logo" width={130} height={130} />
      </div>

      <LandingHero
        heading="Welcome to Ocean Blue Spa"
        secondaryHeading="Enjoy memorable experiences"
        url="url(../public/images/home/yinyang-home.jpg)"
      />

      <Heading
        mainHeading="Our spa menu"
        subHeading="A quick look at all the services and packages our spa offers."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row space-evenly">
          <SelectionCard
            img="/images/services/spa-menu.jpg"
            link="/services/menu"
            linkText="Our Spa Menu"
          />
        </div>
      </div>

      <Heading
        mainHeading="Enjoy in the right places"
        subHeading="Enjoy from our spa services at some of our most exotic places."
      />

      <FlexGallery />

      <Heading
        mainHeading="Let us help you"
        subHeading="We can help you choose what service or product is best for you."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row space-evenly">
          <IconCard
            heading="Services"
            body="Feel yourself at home with our wide range of services that help you relax and have a great time at our spa."
            img="/images/home/services.svg"
          />
          <IconCard
            heading="Products"
            body="We offer products that help you have a cleaner and more rejuvenated skin. As well as increase your overall health."
            img="/images/home/products.svg"
          />
          <IconCard
            heading="Bar"
            body="Enjoy from our amazing drinks at Yin Yang Spa. Choose drinks that relax and refresh you in an unique way."
            img="/images/home/bar.svg"
          />
        </div>
        <Link href="/team">
          <a className="button mt-20">
            <FaMobileAlt
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

      <VideoHero />
    </div>
  );
}
