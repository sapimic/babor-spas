import Head from "next/head";
import IconCard from "../../components/IconCard";
import LandingHero from "../../components/LandingHero";
import FlexGallery from "../../components/FlexGallery";
import Heading from "../../components/Heading";
import logo from "../../public/images/etra-logo.png";
import Link from "next/link";
import VideoHero from "../../components/VideoHero";
import Image from "next/image";
import { FaMobileAlt } from "react-icons/fa";
import styles from "../../styles/Home.module.scss";
import Popup from "../../components/Popup";
import LocationHero from "../../components/LocationHero";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue Spa</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.logo}>
        <Image src={logo} alt="Etra Spa Logo" width={130} height={130} />
      </div>

      <LandingHero
        heading="Welcome to Ocean Blue Spa"
        secondaryHeading="Enjoy memorable experiences"
        url="url(./images/home/babor-welcome.jpg)"
      />

      <Heading
        mainHeading="Luxury Spa Experiences"
        subHeading="Wellness and beauty, sanctuary of peace, mindfulness, body and soul."
      />

      <FlexGallery />

      <Heading
        mainHeading="Enjoy in all our locations"
        subHeading="We have spas in the Dominican Republic, Mexico and soon in Jamaica."
      />

      <div className="flex-column justify-center align-center">
        <LocationHero
          bgColor="#15afb6"
          location="Dominican Republic"
          description="Enjoy countless experiencess in all our Spas in the Dominican
          Republic."
          imgUrl="./images/home/dominican-location.jpg"
        />
        <LocationHero
          bgColor="#15afb6"
          location="Mexico"
          description="Enjoy countless experiencess in all our Spas in the Dominican
          Republic."
          imgUrl="./images/home/mexico-location.jpg"
        />
        <LocationHero
          bgColor="#15afb6"
          location="Jamaica"
          description="We will soon be having amazing spas in Jamaica too!"
          imgUrl="./images/home/jamaica-location.jpg"
        />
      </div>

      <Heading
        mainHeading="Let us help you"
        subHeading="We can help you choose what service or product is best for you."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row space-evenly">
          <IconCard
            heading="Services"
            body="Whether you're seeking a massage, facial, or other treatment, we tailor each service to your individual needs and preferences, using the latest techniques and highest quality products to ensure that you leave feeling refreshed and renewed."
            img="/images/home/services.svg"
          />
          <IconCard
            heading="Products"
            body="From the refreshing scents to the soothing textures, our products are designed to help you relax, rejuvenate, and feel your best."
            img="/images/home/products.svg"
          />
          <IconCard
            heading="Bar"
            body="From freshly squeezed juices and herbal teas to nourishing smoothies and light bites, our spa bar provides the perfect balance of indulgence and wellness, helping you feel revitalized and energized both inside and out."
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
