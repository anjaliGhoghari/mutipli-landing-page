import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/style";
import sec_1 from "../../assets/images/sec-1.png";
import sec_2 from "../../assets/images/sec-2.png";
import sec_3 from "../../assets/images/sec-3.png";

const texts = [
  {
    heading: "Institutional Grade Asset Management",
    paragraph:
      "Earn reliable, high quality yield backed by the largest and safest delta-neutral funds in crypto. Built with institutional-grade transparency.",
  },
  {
    heading: "Proprietary Predictive Engine for Smart Fund Allocation",
    paragraph:
      "AlphaIQ™, our patented intelligence engine, dynamically allocates capital to top-performing funds using predictive analytics—maximizing yield and capital efficiency.",
  },
  {
    heading: "Tokenize and Leverage Fund Liquidity for Borrowing and Lending",
    paragraph:
      "The First Protocol for Aggregation and Tokenization of Liquid Delta-Neutral Funds. Seamlessly tokenize deployed capital and unlock additional on-chain yield through integrated DeFi strategies.",
  },
];

const images = [sec_1, sec_2, sec_3];

function Assetsmanament() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeImage, setFadeImage] = useState(images[0]);
  const [fade, setFade] = useState(false);

  const handleInView = (idx) => {
    if (idx !== currentIndex) {
      setFade(true);
      setTimeout(() => {
        setFadeImage(images[idx]);
        setFade(false);
      }, 300); // should match CSS transition time
      setCurrentIndex(idx);
    }
  };

  return (
    <section id="podcast" className="border-b border-containerLine">
      <div className="container">
        <div className="inner-container">
          <div className="flex flex-row justify-between min-h-screen">
            <div className="w-full flex flex-col">
              {texts.map((item, idx) => {
                const [ref, inView] = useInView({
                  threshold: 0.6,
                  triggerOnce: false,
                });
                useEffect(() => {
                  if (inView) {
                    handleInView(idx);
                  }
                }, [inView]);

                return (
                  <div
                    ref={ref}
                    key={idx}
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    className="min-h-screen flex flex-col justify-center"
                  >
                    <h2 className={`${styles.heading2} max-w-[426px] mb-3`}>
                      {item.heading}
                    </h2>
                    <p
                      className={`${styles.paragraph} max-w-[426px] tracking-wider leading-[30px]`}
                    >
                      {item.paragraph}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="w-full flex-[120%] sticky top-20 h-[80vh] flex justify-center items-center">
              <img
                src={fadeImage}
                alt={`Visual ${currentIndex + 1}`}
                className={` object-contain absolute transition-opacity duration-500 ease-in-out ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assetsmanament;
