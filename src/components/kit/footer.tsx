import logo from "src/assets/header/logo.svg";
import facebook from "src/assets/footer/facebook.svg";
import instagram from "src/assets/footer/instagram.svg";
import twitter from "src/assets/footer/twitter.svg";
import youtube from "src/assets/footer/youtube.svg";
import chatWithUs from "src/assets/footer/chat-with-us.svg";
import Villague from "src/assets/footer/Villague.svg";

import footerFacebook from "src/assets/footer/footer-facebook.svg";
import footerTwitter from "src/assets/footer/footer-twitter.svg";
import footerInstagram from "src/assets/footer/footer-instagram.svg";
import footerYoutube from "src/assets/footer/footer-youtube.svg";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <div className="bg-[#222] pt-[6.25em]">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em]">
          {/* First component */}
          <div className="flex flex-col p-[4em] bg-[rgba(217,226,205,0.80)] shadow-[0_4px_30px_0_rgba(0, 0, 0, 0.03)]">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex flex-col gap-[0.5em]">
                <p className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold ">
                  Speak to us about your travel plans, we’re here to help.
                </p>
                <p className="text-[#222] font-Inter font-normal lg:w-[37.9375em]">
                  Diam et habitasse tortor cras donec urna eget dolor in turpis
                  venenatis eget pulvinar ipsum quisque non arcu nulla
                </p>
              </div>

              <button className="bg-[#222] py-[1em] px-[1.5em] flex items-center self-start gap-[0.5em] mt-[1em]">
                <p className="text-[#FFF] font-Inter text-[0.875rem] font-bold uppercase">
                  chat with us
                </p>

                <img
                  src={chatWithUs}
                  alt=""
                  className="object-cover object-center"
                />
              </button>
            </div>
          </div>

          {/* Second component */}

          <div className="grid sm:grid-cols-2 mt-[4.019375em] gap-[1.8125em]">
            <div className="flex flex-col gap-[2em]">
              <img
                src={Villague}
                alt=""
                className="object-cover object-center w-[7.9874375em] "
              />

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Diam et habitasse tortor cras donec urna eget dolor in turpis
                venenatis eget pulvinar ipsum quisque non arcu nulla
              </p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <p className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold ">
                Join Our Newsletter
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Diam et habitasse tortor cras donec urna eget dolor in turpis
                venenatis eget.
              </p>

              <div className="flex flex-col ">
                <div className="lg:flex lg:items-center lg:gap-[1em]">
                  <input
                    type="text"
                    className="py-[0.75em] px-[1em] outline-none w-full"
                    placeholder="Enter your email address"
                  />

                  <button className="flex items-start bg-[#F6D167] py-[0.75em] px-[1.5em] mt-[1em] lg:mt-[0em] w-full sm:w-auto">
                    <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
                      Subscribes
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Third Component */}
          <div className="grid grid-cols-1 sm:grid-cols-2   customThree:grid-cols-4 xl:grid-cols-5 gap-[4em] mt-[2em] pb-[2em]  border-b border-[rgba(255,255,255,0.20)]">
            <div className="flex flex-col gap-[1em]">
              <p className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold">
                Office
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                021 Hollywood Boulevard, LA
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                customer@example.com
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                (021) 345-6789
              </p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <p className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold">
                Services
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Family Experiences
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Events
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Weddings
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Tours
              </p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <p className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold">
                Quick Menu
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Home
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Services
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                About Us
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Blog
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Contact Us
              </p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <p className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold">
                Support
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Faq
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Privacy & Cookies
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Legal
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Accessibility
              </p>

              <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal ">
                Sitemap
              </p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <p className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold">
                Follow Us
              </p>

              <div className="flex items-center gap-[1em] ">
                <div className="relative bg-[#ACB889] rounded-[6.25em] w-[2em] h-[2em]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={footerFacebook}
                      alt=""
                      className="object-cover object-center  w-[0.5625em]"
                    />
                  </div>
                </div>

                <div className="relative bg-[#ACB889] rounded-[6.25em] w-[2em] h-[2em]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={footerTwitter}
                      alt=""
                      className="object-cover object-center  w-[0.875em]"
                    />
                  </div>
                </div>

                <div className="relative bg-[#ACB889] rounded-[6.25em] w-[2em] h-[2em]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={footerInstagram}
                      alt=""
                      className="object-cover object-center  w-[0.8125em]"
                    />
                  </div>
                </div>

                <div className="relative bg-[#ACB889] rounded-[6.25em] w-[2em] h-[2em]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={footerYoutube}
                      alt=""
                      className="object-cover object-center  w-[1em]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Component */}

          <div className="flex flex-col my-[2em]">
            <p className="text-[#FFF] font-Inter text-[0.875rem] font-normal text-center ">
              © 2021 Aalia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
