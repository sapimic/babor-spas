import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import MenuItem from "../../../components/MenuItem";

const Massages = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue - Massages</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Massages"
        subHeading="Our premium and normal massages."
      />

      <div className="flex-column">
        <MenuItem
          heading="Scalp Massage"
          time="25min"
          price="$75"
          description="Ideal for relieving tension and accumulated stress in the shoulders, neck, and head."
        />
        <MenuItem
          heading="Back Massage"
          time="25min"
          price="$75"
          description="Release the tension that accumulates due to the stress of everyday life."
        />
        <MenuItem
          heading="Reflexology"
          time="25min"
          price="$75"
          description="Your feet and hands are the maps of your body."
        />
        <MenuItem
          heading="Tired Legs Therapy"
          time="40min"
          price="$90"
          description="Reactivate the return circulation, relieve the heaviness caused by daily life."
        />
        <MenuItem
          heading="Swedish (Relaxing)"
          time="25min / 50min"
          price="$75 / $120"
          description="This massage therapy helps release tension and firm muscles and joints."
        />
        <MenuItem
          heading="Deep Muscle"
          time="25min / 50min"
          price="$80 / $145"
          description="This treatment is focused on working the deep muscles, and the fascia, as well as tendons, and ligaments."
        />
        <MenuItem
          heading="Aroma Therapy"
          time="25min / 50min"
          price="$80 / $145"
          description="An exotic mix of essential oils, selected especially for you, in combination with a relaxation."
        />
        <MenuItem
          heading="Massage Lymphathic"
          time="50min"
          price="$145"
          description="By stimulating the lymphatic system, this treatment will rid your body of toxins and activate your circulation."
        />
        <MenuItem
          heading="Combination Massage"
          time="80min"
          price="$175"
          description="Fusion of therapeutic techniques adjusted to your personal need."
        />
        <MenuItem
          heading="Hot Stones"
          time="80min"
          price="$175"
          description="Therapy with an ancient technique to relax your body and mind."
        />
      </div>
    </div>
  );
};

export default Massages;
