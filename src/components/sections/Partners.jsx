import { partners } from "../../constants/partners";
import styles from "../../styles/style";

function Partners() {
  return (
    <>
      <section className=" border-b border-containerLine ">
        <div className="container">
          <div className="inner-container">
            <div
              className={`${styles.paddindY} flex flex-col justify-start items-center`}
            >
              <h2 className={`${styles.heading2} mb-14`}>Our yield partners</h2>
              <div className="flex flex-wrap items-center justify-between w-full ">
                {partners.map((partners) => (
                  <div
                    key={partners.id}
                    className="flex justify-start items-start flex-1 mr-3 min-w-[120px]"
                  >
                    <img
                      src={partners.logo}
                      alt={`Logo of ${partners.id}`}
                      className="min-w-[118px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
