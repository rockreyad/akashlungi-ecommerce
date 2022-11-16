import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mx-2 mt-10">
        <div className="flex justify-between space-x-5">
          {/* Follow us on social media */}
          <div className="space-y-2">
            <p className="text-xl font-medium uppercase">Follow us on</p>
            <ul className="flex space-x-2">
              <li>
                <IoLogoFacebook className="text-sky-600 text-3xl" />
              </li>
              <li>
                <AiFillInstagram className="text-orange-600 text-3xl" />
              </li>
            </ul>
          </div>

          {/* Contact us */}
          <div className="space-y-2">
            <p className="text-xl font-medium uppercase">Contact us</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span>
                  <BsFillTelephoneFill className="text-amber-400" />
                </span>
                +8801312-085808
              </li>
            </ul>
          </div>
        </div>

        {/* About this Company */}

        <div className="my-10">
          <p className="text-xl font-bold uppercase ">project-l</p>
          <p className="text-sm text-gray-500 tracking-wider">
            Project-l is a mans fashion store. We sell all kinds of lungi and
            other mens fashion products, started its journey through a facebook
            page in 2020.
          </p>
        </div>
        {/* Copy right */}
      </footer>
      <div className="bg-gray-500 text-white text-center">
        <p className="uppercase text-sm font-light">© 2021 project-l</p>
      </div>
    </>
  );
};

export default Footer;
