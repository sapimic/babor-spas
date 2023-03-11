import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { FaUsers } from "react-icons/fa";

const Babor = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Babor</title>
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
            price="$112"
          />
          <ProductCard
            img="/images/products/babor/egf-collagen.jpg"
            name="EGF & Collagen Cream"
            type="Lifting & firming, anti-aging"
            price="$153"
          />
          <ProductCard
            img="/images/products/babor/u-repair-cleanser.jpg"
            name="Repair Cleanser"
            type="Repair RX"
            price="$54"
          />
          <ProductCard
            img="/images/products/babor/stress-repair-lotion.jpg"
            name="De-Stress & Repair Lotion"
            type="Refreshes the skin"
            price="$43"
          />
          <ProductCard
            img="/images/products/babor/cellulite-lotion.jpg"
            name="3D Cellulite Lotion"
            type="Active concentrate"
            price="$107"
          />
          <ProductCard
            img="/images/products/babor/cellulite-fluid.jpg"
            name="3D Cellulite Fluid"
            type="Active concentrate"
            price="$96"
          />
          <ProductCard
            img="/images/products/babor/glow-cream.jpg"
            name="Glow Cream"
            type="Hydration, luminosity"
            price="$40"
          />
          <ProductCard
            img="/images/products/babor/cleansing-milk.jpg"
            name="Cleansing Milk"
            type="Cleaning milk"
            price="$38"
          />
          <ProductCard
            img="/images/products/babor/gel-tonic.jpg"
            name="Gel & Tonic"
            type="Skin perfectioner"
            price="$38"
          />
          <ProductCard
            img="/images/products/babor/shaping-body.jpg"
            name="Shaping For Body"
            type="Body shaping lotion"
            price="$28"
          />
          <ProductCard
            img="/images/products/babor/detox-v-cream.jpg"
            name="Detox Vitamin Cream"
            type="Detoxification cream"
            price="$17"
          />
          <ProductCard
            img="/images/products/babor/lift-express.jpg"
            name="Lift Express"
            type="Softer skin"
            price="$72"
          />
          <ProductCard
            img="/images/products/babor/active-purifier.jpg"
            name="Active Purifier"
            type="For imperfections"
            price="$44"
          />
          <ProductCard
            img="/images/products/babor/collagen-concetrate.jpg"
            name="Collagen Concetrate"
            type="Better juicy skin"
            price="$61"
          />
          <ProductCard
            img="/images/products/babor/perfect-glow.jpg"
            name="Perfect Glow"
            type="Helps dry skin"
            price="$48"
          />
          <ProductCard
            img="/images/products/babor/3d-firming.jpg"
            name="3D Firming"
            type="Facial firming"
            price="$76"
          />
          <ProductCard
            img="/images/products/babor/vitalizing-cream.jpg"
            name="Vitalizing Cream"
            type="Facial treatment cream"
            price="$92"
          />
          <ProductCard
            img="/images/products/babor/mimical-c-cream.jpg"
            name="Control Cream"
            type="Anti-aging, hydration"
            price="$96"
          />
          <ProductCard
            img="/images/products/babor/soothing-cream.jpg"
            name="Soothing Cream"
            type="Reduces tightness"
            price="$78"
          />
          <ProductCard
            img="/images/products/babor/balancing-cream.jpg"
            name="Balancing Cream"
            type="Age preventing"
            price="$92"
          />
          <ProductCard
            img="/images/products/babor/calming-cream.jpg"
            name="Calming Cream"
            type="Sensitive skin"
            price="$92"
          />
          <ProductCard
            img="/images/products/babor/cooling-gel.jpg"
            name="Cooling Eye Gel"
            type="Age preventing"
            price="$62"
          />
          <ProductCard
            img="/images/products/babor/detox-vitamin.jpg"
            name="Refine Cellular"
            type="Detox vitamin cream"
            price="$149"
          />
          <ProductCard
            img="/images/products/babor/hydration-ampoules.jpg"
            name="Hydration Ampoules"
            type="Hydration plus"
            price="$55"
          />
          <ProductCard
            img="/images/products/babor/m-eye-cream.jpg"
            name="Moisturizing Eye Cream"
            type="Age Preventing"
            price="$67"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-30.jpg"
            name="Protect Cellular 30"
            type="Body protector"
            price="$64"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-50.jpg"
            name="Protect Cellular 50"
            type="Body protector"
            price="$48"
          />
          <ProductCard
            img="/images/products/babor/purifying-cream.jpg"
            name="Purifying Cream"
            type="Age preventing"
            price="$92"
          />
          <ProductCard
            img="/images/products/babor/r-eye-cream.jpg"
            name="Retinol Eye Cream"
            type="Sensitive eyes"
            price="$72"
          />
          <ProductCard
            img="/images/products/babor/rose-toning.jpg"
            name="Rose Toning Essence"
            type="Cleansing"
            price="$33"
          />
          <ProductCard
            img="/images/products/babor/spa-shaping.jpg"
            name="Spa Shaping"
            type="Body cream"
            price="$65"
          />
          <ProductCard
            img="/images/products/babor/spot-corrector.jpg"
            name="Refine cellular"
            type="Age spot corrector"
            price="$63"
          />
          <ProductCard
            img="/images/products/babor/ultimate-repair.jpg"
            name="Repair Cellular"
            type="Ultimate repair cream"
            price="$180"
          />
          <ProductCard
            img="/images/products/babor/v-eye-cream.jpg"
            name="Vitalizing Eye Cream"
            type="Eye cream"
            price="$61"
          />
          <ProductCard
            img="/images/products/babor/vitamin-ampoules.jpg"
            name="Vitamin Ampoules"
            type="Dull skin"
            price="$52"
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
