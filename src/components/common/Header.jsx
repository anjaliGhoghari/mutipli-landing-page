import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import Button from "../Button";
import {navLinks} from "../../constants/navLinks"
const Header = () => {
  const [active, setActive] = useState("Home");

  return (
    <>
      <header className="sticky z-50 top-0 bg-customBlack font-saans ">
        <div className="container">
          <div className="inner-container">
            <div className="flex justify-between w-full  py-6 sm:py-10 items-center ">
              <img src={logo} alt="logo" className="max-w-[120px]" />
              <nav>
                <ul className="text-[#ACAFB9] hidden lg:flex leading-7   text-[13px] font-normal gap-8 cursor-pointer">
                  {navLinks.map((nav, index) => (
                    <li key={nav.id}>
                      <button
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration={1000 + index * 300}
                        onClick={() => setActive(nav)}
                        className={`hover:text-[#C48BEF] ${
                          active === nav ? "nav-item" : ""
                        }`}
                      >
                        <a href={`#${nav.id}`} className="py-4 px-2">
                          {nav.title}
                        </a>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
