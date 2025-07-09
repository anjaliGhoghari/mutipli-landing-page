import React from "react";
import styles from "../../styles/style";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Scale() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <>
      <section ref={ref} className="border-b border-containerLine ">
        <div className="container">
          <div className={`${styles.paddindY} inner-container`}>
            <h2 className={`${styles.heading3} mb-3`}>
              Built for stability. Designed for scale. Open to all.
            </h2>
            <p className={`${styles.paragraph} mb-14`}>
              Multipli is building the future of high grade institutional
              yields.
            </p>
            <div className="flex justify-between items-center flex-wrap">
              <div className=" flex items-start flex-col m-5 sm:m-0">
                {startCount ? (
                  <CountUp
                    end={10}
                    duration={10}
                    className={`${styles.heading1} mb-3`}
                  />
                ) : (
                  <span className="text-5xl font-bold text-white mb-3">0</span>
                )}
                <p className={`${styles.paragraph}`}>Supported chains</p>
              </div>
              <div className=" flex items-start flex-col m-5 sm:m-0">
                {startCount ? (
                  <CountUp
                    end={80}
                    duration={10}
                    className={`${styles.heading1} mb-3`}
                  />
                ) : (
                  <span className="text-5xl font-bold text-white mb-3">0</span>
                )}
                <p className={`${styles.paragraph}`}>Partners</p>
              </div>
              <div className="flex items-start flex-col m-5 sm:m-0">
                {startCount ? (
                  <CountUp
                    end={12.56}
                    duration={10}
                    decimals={2}
                    suffix="%"
                    className={`${styles.heading1} mb-3`}
                  />
                ) : (
                  <div className="flex items-baseline mb-3">
                    <span className="text-5xl font-bold text-white mb-3">
                      0
                    </span>
                  </div>
                )}
                <p className={`${styles.paragraph}`}>Average 7D APY</p>
              </div>

              <div className="flex items-start flex-col m-5 md:m-0">
                {startCount ? (
                  <CountUp
                    end={100}
                    duration={10}
                    prefix="$"
                    suffix="M"
                    className={`${styles.heading1} mb-3`}
                  />
                ) : (
                  <span className="text-5xl font-bold text-white mb-3">
                    $0M
                  </span>
                )}
                <p className={`${styles.paragraph}`}>Total value locked</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Scale;
