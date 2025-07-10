import React from "react";
import styles from "../../styles/style";
import card_1 from "../../assets/images/card-1.png";
import arrow_up from "../../assets/icons/arrow-right-up-line.svg";

function Articles() {
  return (
    <>
      <section id="careers" className="border-b border-containerLine ">
        <div className="container">
          <div className={`${styles.paddindY} inner-container`}>
            <h2 className={`${styles.heading3} mb-14`}>
              Articles and our conference pictures
            </h2>
            <div className="flex flex-wrap justify-between items-center">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="  border border-[#2C2C2C] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group card relative"
              >
                <div className="card-content w-[361px] h-[403px]">
                  <img
                    src={card_1}
                    className="object-cover h-full group-hover:h-[299px] w-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="m-6 absolute bottom-0 left-0 flex justify-center items-end translate-y-8 transform opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100  ">
                    <p className="text-xl font-[380] text-white">
                      Multipli Monthly: June 2025 Summary
                    </p>
                    <img src={arrow_up} />
                  </div>
                </div>
              </div>

              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
                className="  border border-[#2C2C2C] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group card relative"
              >
                <div className="card-content w-[361px] h-[403px]">
                  <img
                    src={card_1}
                    className="object-cover h-full group-hover:h-[299px] w-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="m-6 absolute bottom-0 left-0 flex justify-center items-end translate-y-8 transform opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100  ">
                    <p className="text-xl font-[380] text-white">
                      Multipli Monthly: June 2025 Summary
                    </p>
                    <img src={arrow_up} />
                  </div>
                </div>
              </div>

              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="  border border-[#2C2C2C] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group card relative"
              >
                <div className="card-content w-[361px] h-[403px]">
                  <img
                    src={card_1}
                    className="object-cover h-full group-hover:h-[299px] w-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="m-6 absolute bottom-0 left-0 flex justify-center items-end translate-y-8 transform opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100  ">
                    <p className="text-xl font-[380] text-white">
                      Multipli Monthly: June 2025 Summary
                    </p>
                    <img src={arrow_up} />
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;

// <div className="group relative w-[361px] h-[403px] overflow-hidden border border-[#2C2C2C] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
//   <img
//     src={card_1}
//     alt="card"
//     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//   />

//   {/* Hover content */}
//   <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent
//                   flex justify-between items-center gap-3 translate-y-8 opacity-0
//                   group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//     <p className="text-white text-[18px] font-[380] leading-tight">
//       Multipli Monthly: June 2025 Summary
//     </p>
//     <img src={arrow_up} alt="arrow" className="w-5 h-5" />
//   </div>
// </div>
