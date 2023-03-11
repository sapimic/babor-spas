import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import MenuItem from "../../components/MenuItem";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

const menu = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Services Menu</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Spa Menu"
        subHeading="All services offered by Yin Yang Spa."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center">
          <MenuItem menuHeading="Therapeutic Massages">
            <p>Relaxing Massage</p>
            <p>Deep Tissue Massage</p>
            <p>Decontracting Massage</p>
            <p>Detox massage</p>
            <p>Premium Detox Massage</p>
            <p>Craniocervical Massage</p>
            <p>Lymphatic Drainagfle Massage</p>
            <p>Circulatory Massage</p>
            <p>Reflexology</p>
            <p>Aromatherapy</p>
            <p>Combination Massage</p>
          </MenuItem>
          <MenuItem menuHeading="Body Treatments">
            <p>Body Anti-Stress Exfoliation</p>
            <p>Body Revitalizing Exfoliation</p>
            <p>Hydro Energetic Cure Detox</p>
            <p>Coconut Fantasy</p>
            <p>Chocolate Delight</p>
            <p>After Sun S.O.S</p>
            <p>Paradise Black Mud</p>
            <p>Rejuvenating Sea Twist</p>
          </MenuItem>
          <MenuItem menuHeading="Yin Yang Rituals">
            <p>Signature Yin Yang Massage</p>
            <p>Hot Volcanic Stone Massage</p>
            <p>Balancing Treatment</p>
            <p>Amazon Dreams</p>
          </MenuItem>
          <MenuItem menuHeading="Facial Treatments">
            <p>De Lux Express Facial</p>
            <p>After Sun Facial S.O.S</p>
            <p>Facial Cleansing</p>
            <p>Skin Solution</p>
            <p>Skin Performance</p>
            <p>Skin Performance Extra</p>
            <p>Fluid Performance</p>
            <p>Skin Active</p>
          </MenuItem>
          <MenuItem menuHeading="Aesthetic Noninvasive Treatments">
            <p>Cavitation</p>
            <p>Diamond Microdermabrasion</p>
            <p>Radiofrequency</p>
            <p>Ultrasound</p>
            <p>Infrared Light Therapy</p>
            <p>Electrotherapy</p>
            <p>Pressotherapy</p>
          </MenuItem>
          <MenuItem menuHeading="Special Packages">
            <p>Welcome Package</p>
            <p>Always In Love</p>
            <p>My Ideal Spa Day</p>
            <p>Double Pampering</p>
            <p>King For A Day</p>
            <p>Perfect Brides Package</p>
          </MenuItem>
          <MenuItem menuHeading="Wellness & Personal Training">
            <p>Personal Training</p>
            <p>Group Exercise Classes</p>
          </MenuItem>
          <MenuItem menuHeading="HF Mediterranean Treatments">
            <p>Hand Renew</p>
            <p>Spa Manicure</p>
            <p>Mini Manicure</p>
            <p>Feet Restore</p>
            <p>SPA Pedicure</p>
            <p>Sports Pedicure</p>
            <p>Additional Nail Care Services</p>
          </MenuItem>
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

export default menu;
