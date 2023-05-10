import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import MenuItem from "../../../components/MenuItem";

const BodyTreatments = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue - Body Treatmets</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Body Treatments"
        subHeading="Relax with our amazing body rituals."
      />

      <div className="flex-column">
        <MenuItem
          heading="SOS After Sun"
          time="50min"
          price="$140"
          description="Highly soothing body treatment, soothes irritated skin intensively and immediately."
        />
        <MenuItem
          heading="Shaping Ritual"
          time="60min"
          price="$190"
          description="The ritual begins with an exfoliation with salts and then refreshing fragrance of Shaping, once finished the skin is prepared to receive the nourishing benefits of essential oils."
        />
        <MenuItem
          heading="Energizing Ritual"
          time="60min"
          price="$190"
          description="After performing an exfoliation therapy with primitive sediment salts from Canada and with the invigorating fragrance of Energizing, once finished the skin is prepared to receive the nourishing benefits of essential oils."
        />
        <MenuItem
          heading="Algae Powder"
          time="50min"
          price="$150"
          description="This treatment is ideal for treating most aesthetic problems such as flaccidity, cellulite, fluid retention, and localized fat."
        />
        <MenuItem
          heading="Thermic Ritual"
          time="50min"
          price="$190"
          description="Rich body treatment that combines the exfoliation of sea salts together with a wrap with a thermal effect essential oil."
        />
        <MenuItem
          heading="Anti-Aging Ocean Ritual"
          time="50min / 80min"
          price="$190 / $270"
          description="Experience the freshness of the ocean: vitalizing and energizing body treatment for the whole body and vegetable taurine from red algae."
        />
        <MenuItem
          heading="Anti-Aging Earth Ritual"
          time="50min / 80min"
          price="$190 / $270"
          description="The ritual begins with an exfoliation with salts and the refreshing fragrance of Shaping, once finished the skin is prepared to receive the nourishing benefits of essential oils."
        />
      </div>
    </div>
  );
};

export default BodyTreatments;
