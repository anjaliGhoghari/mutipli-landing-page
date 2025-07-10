import React from "react";
import sec_1 from "../../assets/images/sec-1.png";
import styles from "../../styles/style";

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
      "The First Protocol for Aggregation and Tokenization of Liquid Delta-Neutral Funds.Seamlessly tokenize deployed capital and unlock additional on-chain yield through integrated DeFi strategies.",
  },
];
function Assetsmanament() {
  return (
    <section id="podcast" className="border-b border-containerLine ">
      <div className="container">
        <div className={`inner-container`}>
          <div className="w-full text-white">
            <div className="flex flex-row min-h-screen py-20 gap-10">
              <div className="lg:w-1/2 w-full sticky top-20 h-[80vh] flex justify-center items-center">
                <img
                  src={sec_1}
                  alt="Sticky Visual"
                  className="w-[668px] h-[800px] object-contain"
                />
              </div>

              <div className="lg:w-1/2 w-full flex flex-col gap-32">
                {texts.map((item, idx) => (
                  <div
                    key={idx}
                    className="min-h-screen flex flex-col justify-center px-6 gap-4"
                  >
                    <h2 className={`${styles.heading2} max-w-[403px]`}>
                      {item.heading}
                    </h2>
                    <p
                      className={`${styles.paragraph} tracking-wider leading-6`}
                    >
                      {item.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assetsmanament;
