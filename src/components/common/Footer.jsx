import React from "react";
import logo from "../../assets/icons/logo.svg";
import styles from "../../styles/style";
import { footerLinks } from "../../constants/footerLinks";
import footer from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer className="bg-customBlack">
      <div className="container">
        <div className={`${styles.paddindY} inner-container`}>
          <div className="flex flex-col lg:flex-row justify-between items-start ">
            <div className="flex flex-col justify-start">
              <img src={logo} alt="logo" className="max-w-[120px] h-[28px]" />
              <p className= {`${styles.heading2} mt-8 mb-16 lg:mb-0  max-w-[500px] w-full`}>
                Yields from the world’s <br className="hidden md:block" /> top
                asset managers <br className="hidden md:block" /> made
                accessible.
              </p>
            </div>
            <div className="flex flex-col ss:flex-row justify-end gap-6 sm:gap-8">
              {footerLinks.map((link, index) => {
                // Only render new column when index is multiple of 4
                if (index % 4 === 0) {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-6 min-w-[250px]"
                    >
                      {footerLinks.slice(index, index + 4).map((item) => (
                        <div key={item.name} className="w-[200px] sm:w-[250px]">
                          <div className="relative w-full h-[1px] bg-[#2C2C2C] footerline" />
                          <p className="mt-4 text-right text-[#ACAFB9] text-[16px]">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-8 flex justify-center items-center">
          <img
            src={footer}
            alt="footer"
            className="w-full max-w-[1167px] h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
