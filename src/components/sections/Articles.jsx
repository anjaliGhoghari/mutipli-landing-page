import React from "react";
import styles from "../../styles/style";
import arrow_up from "../../assets/icons/arrow-right-up-line.svg";
import { articles } from "../../constants/articles";

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
            {articles.map((articles,index)=>(
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={1000 + index * 500}
                className="mb-7  border border-[#2C2C2C] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group card relative"
              >
                <div className="card-content w-[361px] h-[403px]">
                  <img
                    src={articles.image}
                    className="object-cover h-full group-hover:h-[299px] w-full transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="m-6 absolute bottom-0 left-0 flex justify-center items-end translate-y-8 transform opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100  ">
                    <p className="text-xl font-[380] text-white">
                     {articles.title}
                    </p>
                    <img src={arrow_up} />
                  </div>
                </div>
             
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;
