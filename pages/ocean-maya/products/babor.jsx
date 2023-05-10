import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import Link from "next/link";
import ProductCard from "../../../components/ProductCard";
import { FaUsers } from "react-icons/fa";

const Babor = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue Spa - Babor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Babor"
        subHeading="Our full Babor product catalog."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center gap-150">
          <ProductCard
            img="/images/products/babor/argan-cream.jpg"
            name="Argan Cream"
            type="Nourishing skin smoother"
          />
          <ProductCard
            img="/images/products/babor/egf-collagen.jpg"
            name="EGF & Collagen Cream"
            type="Lifting & firming, anti-aging"
          />
          <ProductCard
            img="/images/products/babor/u-repair-cleanser.jpg"
            name="Repair Cleanser"
            type="Repair RX"
          />
          <ProductCard
            img="/images/products/babor/stress-repair-lotion.jpg"
            name="De-Stress & Repair Lotion"
            type="Refreshes the skin"
          />
          <ProductCard
            img="/images/products/babor/cellulite-lotion.jpg"
            name="3D Cellulite Lotion"
            type="Active concentrate"
          />
          <ProductCard
            img="/images/products/babor/cellulite-fluid.jpg"
            name="3D Cellulite Fluid"
            type="Active concentrate"
          />
          <ProductCard
            img="/images/products/babor/glow-cream.jpg"
            name="Glow Cream"
            type="Hydration, luminosity"
          />
          <ProductCard
            img="/images/products/babor/cleansing-milk.jpg"
            name="Cleansing Milk"
            type="Cleaning milk"
          />
          <ProductCard
            img="/images/products/babor/gel-tonic.jpg"
            name="Gel & Tonic"
            type="Skin perfectioner"
          />
          <ProductCard
            img="/images/products/babor/shaping-body.jpg"
            name="Shaping For Body"
            type="Body shaping lotion"
          />
          <ProductCard
            img="/images/products/babor/detox-v-cream.jpg"
            name="Detox Vitamin Cream"
            type="Detoxification cream"
          />
          <ProductCard
            img="/images/products/babor/lift-express.jpg"
            name="Lift Express"
            type="Softer skin"
          />
          <ProductCard
            img="/images/products/babor/active-purifier.jpg"
            name="Active Purifier"
            type="For imperfections"
          />
          <ProductCard
            img="/images/products/babor/collagen-concetrate.jpg"
            name="Collagen Concetrate"
            type="Better juicy skin"
          />
          <ProductCard
            img="/images/products/babor/perfect-glow.jpg"
            name="Perfect Glow"
            type="Helps dry skin"
          />
          <ProductCard
            img="/images/products/babor/3d-firming.jpg"
            name="3D Firming"
            type="Facial firming"
          />
          <ProductCard
            img="/images/products/babor/vitalizing-cream.jpg"
            name="Vitalizing Cream"
            type="Facial treatment cream"
          />
          <ProductCard
            img="/images/products/babor/mimical-c-cream.jpg"
            name="Control Cream"
            type="Anti-aging, hydration"
          />
          <ProductCard
            img="/images/products/babor/soothing-cream.jpg"
            name="Soothing Cream"
            type="Reduces tightness"
          />
          <ProductCard
            img="/images/products/babor/balancing-cream.jpg"
            name="Balancing Cream"
            type="Age preventing"
          />
          <ProductCard
            img="/images/products/babor/calming-cream.jpg"
            name="Calming Cream"
            type="Sensitive skin"
          />
          <ProductCard
            img="/images/products/babor/cooling-gel.jpg"
            name="Cooling Eye Gel"
            type="Age preventing"
          />
          <ProductCard
            img="/images/products/babor/detox-vitamin.jpg"
            name="Refine Cellular"
            type="Detox vitamin cream"
          />
          <ProductCard
            img="/images/products/babor/hydration-ampoules.jpg"
            name="Hydration Ampoules"
            type="Hydration plus"
          />
          <ProductCard
            img="/images/products/babor/m-eye-cream.jpg"
            name="Moisturizing Eye Cream"
            type="Age Preventing"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-30.jpg"
            name="Protect Cellular 30"
            type="Body protector"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-50.jpg"
            name="Protect Cellular 50"
            type="Body protector"
          />
          <ProductCard
            img="/images/products/babor/purifying-cream.jpg"
            name="Purifying Cream"
            type="Age preventing"
          />
          <ProductCard
            img="/images/products/babor/r-eye-cream.jpg"
            name="Retinol Eye Cream"
            type="Sensitive eyes"
          />
          <ProductCard
            img="/images/products/babor/rose-toning.jpg"
            name="Rose Toning Essence"
            type="Cleansing"
          />
          <ProductCard
            img="/images/products/babor/spa-shaping.jpg"
            name="Spa Shaping"
            type="Body cream"
          />
          <ProductCard
            img="/images/products/babor/spot-corrector.jpg"
            name="Refine cellular"
            type="Age spot corrector"
          />
          <ProductCard
            img="/images/products/babor/ultimate-repair.jpg"
            name="Repair Cellular"
            type="Ultimate repair cream"
          />
          <ProductCard
            img="/images/products/babor/v-eye-cream.jpg"
            name="Vitalizing Eye Cream"
            type="Eye cream"
          />
          <ProductCard
            img="/images/products/babor/vitamin-ampoules.jpg"
            name="Vitamin Ampoules"
            type="Dull skin"
          />
        </div>
        <Link href="/team">
          <a className="button mt-80">
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

export default Babor;
