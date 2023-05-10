import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import MenuItem from "../../../components/MenuItem";

const Facials = () => {
  return (
    <div className="container">
      <Head>
        <title>Ocean Blue - Facials</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Facials"
        subHeading="Enjoy with our relaxing facial treatments."
      />

      <div className="flex-column">
        <MenuItem
          heading="Express"
          price="$80"
          time="30min"
          description="Ideal facial for those who need a basic cleansing of the face."
        />
        <MenuItem
          heading="Calming After Sun"
          price="$140"
          time="50min"
          description="Facial focused on nourishing and soothing irritated skin after long exposure to the sun."
        />
        <MenuItem
          heading="Etra Tailored"
          price="$140"
          time="60min"
          description="This facial, personalized to each individual skin needs, will directly address all of today's skin needs: dry or oily, sensitive, or tired. "
        />
        <MenuItem
          heading="Algae Peel Off"
          price="$150"
          time="60min"
          description="Highly recommended facial treatment for dry skin and those lacking in elasticity."
        />
        <MenuItem
          heading="HSR Lifting"
          price="$185"
          time="80min"
          description="The anti-wrinkle expert; our High Skin Refiner treatment works in different dimensions."
        />
        <MenuItem
          heading="Detox Renovating"
          price="$185"
          time="80min"
          description="Repairing and firming facial thanks to the properties of Retinol. Intensely promotes the skin regeneration process."
        />
        <MenuItem
          heading="Collagen Botox Effect"
          price="$175"
          time="60min"
          description="Intensively restructures and plumps the skin from within, effectively reducing the appearance of lines and wrinkles."
        />
        <MenuItem
          heading="Glow CBD Cleanformance"
          price="$150"
          time="60min"
          description="Cleanses intensely, but gently, without affecting the microbiome or drying the skin, with sustainably obtained tree bark extract, with prebiotics, probiotics."
        />
        <MenuItem
          heading="Etra Man"
          price="$150"
          time="60min"
          description="Facial specially designed for the male complexion, providing an experience beyond a facial."
        />
        <MenuItem
          heading="Dr. Babor Detox"
          price="$155"
          time="60min"
          description="Facial with stable vitamin C concentrate helps improve the smoothness and firmness of the skin, reduces wrinkles, protects against oxidative damage from the environment and free radicals."
        />
        <MenuItem
          heading="Vitamin C (Illuminator)"
          price="$185"
          time="60min"
          description="Facial with stable vitamin C concentrate helps improve the smoothness and firmness of the skin, reduces wrinkles, protects against oxidative damage from the environment and free radicals."
        />
        <MenuItem
          heading="Plump Hyaluronic Acid"
          price="$165"
          time="60min"
          description="Facial with HYDRO-HYPE effect: from the inside + the outside. From the inside rehydrates the skin from the inside by stimulating the synthesis of the skin's own hyaluronic acid."
        />
      </div>
    </div>
  );
};

export default Facials;
