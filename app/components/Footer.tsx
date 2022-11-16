import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer>
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
          <p className="text-xl font-bold uppercase ">Akashlungi</p>
          <p className="text-sm text-gray-500 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quas.
          </p>
        </div>
        {/* Copy right */}
        <div className="bg-gray-500 text-white text-center">
          <p className="uppercase text-sm font-light">© 2021 akashlungi.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
