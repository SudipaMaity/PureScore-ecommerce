import React from "react";
import { Link } from "react-router-dom";
import FbLogo from "../../assets/icons/Facebook.svg";
import InstaLogo from "../../assets/icons/Instagram.svg";
import LinkeDinLogo from "../../assets/icons/Linkedin.svg";
import Logo from "../../assets/Logo/PureScoreLogo.svg";
const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="py-10 px-20">
        <div className="grid grid-cols-2 w-full ">
          <div className="flex  flex-col gap-y-4">
            <div>
              <img src={Logo} alt="PureScore" />
            </div>

            <p className="w-[40%]">
              Lorem ipsum dolor sit amet consectetur. Eget neterdum scelerisque
              ut urna ac arcu cum{" "}
            </p>
          </div>
          <div className="flex justify-end gap-10">
            {/* <Link>Home</Link> */}
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <span>My Products</span>
            <span>Admin </span>
          </div>
        </div>
        <div className="w-full flex justify-between mt-10 ">
          <div className="flex gap-5">
            <img src={FbLogo} alt="Facebook" />
            <img src={InstaLogo} alt="Instagram" />
            <img src={LinkeDinLogo} alt="Linkedin" />
          </div>
          <div>copyright Purscore . All rights reserved</div>
          <div className="flex gap-3">
            <span>Privacy Policy</span>
            <span>|</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
