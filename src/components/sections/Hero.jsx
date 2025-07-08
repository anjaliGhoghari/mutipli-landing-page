import React from "react";
import Button from "../Button";
import styles from "../../styles/style";
import DotGrid from "../../../Hero.jsx/DotGrid/DotGrid";

function Hero() {
  return (
    <>
      <section id="home" className="border-b border-containerLine">
        <div className="container ">
          <div className="inner-container pb-24">
            <div
              style={{ width: "100%", height: "600px", position: "relative" }}
            >
              <DotGrid
                dotSize={3}
                gap={15}
                baseColor="#141414"
                activeColor="#A020F0"
                proximity={80}
                shockRadius={200}
                shockStrength={20}
                resistance={1550}
                returnDuration={3.1}
              />
            </div>
            <div className="flex justify-center items-center text-center flex-col">
              <h1
                style={{ fontSize: "clamp(2.8rem, calc(7vw + 1rem), 4rem)" }}
                className={`${styles.heading1}`}
              >
                Yields from the world’s top asset managers made accessible.
              </h1>
              <p className={`${styles.paragraph} mt-3 mb-9`}>
                The smart gateway to institutional-grade, delta-neutral crypto
                yields.
              </p>
              <Button />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
