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
          <div className="flex flex-col max-w-[1200px]  px-[1.25em] py-[4em] lg:px-[4em]  bg-[rgba(217,226,205,0.80)] shadow-[0_4px_30px_0_rgba(0, 0, 0, 0.03)]">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex flex-col gap-[0.5em]">
                <motion.p
                  className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                    },
                  }}
                >
                  Speak to us about your travel plans, we’re here to help.
                </motion.p>
                <motion.p
                  className="text-[#222] font-Inter font-normal lg:w-[37.9375em]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                    },
                  }}
                >
                  Diam et habitasse tortor cras donec urna eget dolor in turpis
                  venenatis eget pulvinar ipsum quisque non arcu nulla
                </motion.p>
              </div>

              <motion.button
                className="bg-[#222] py-[1em] px-[1.5em] flex items-center self-start gap-[0.5em] mt-[1.5em]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                <p className="text-[#FFF] font-Inter text-[0.875rem] font-bold uppercase">
                  chat with us
                </p>

                <img
                  src={chatWithUs}
                  alt=""
                  className="object-cover object-center w-[0.875em]"
                />
              </motion.button>
            </div>
          </div>

          {/* Second component */}

          <div className="grid sm:grid-cols-2 mt-[4.019375em] gap-[1.8125em]">
            <div className="flex flex-col gap-[2em]">
              <motion.img
                src={Villague}
                alt=""
                className="object-cover object-center w-[7.9874375em] "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              />

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Diam et habitasse tortor cras donec urna eget dolor in turpis
                venenatis eget pulvinar ipsum quisque non arcu nulla
              </motion.p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <motion.p
                className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Join Our Newsletter
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Diam et habitasse tortor cras donec urna eget dolor in turpis
                venenatis eget.
              </motion.p>

              <div className="flex flex-col ">
                <div className="lg:flex lg:items-center lg:gap-[1em]">
                  <motion.input
                    type="text"
                    className="py-[0.75em] px-[1em] outline-none w-full"
                    placeholder="Enter your email address"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                      },
                    }}
                  />

                  <motion.button
                    className="flex items-start bg-[#F6D167] py-[0.75em] px-[1.5em] mt-[1em] lg:mt-[0em] w-full sm:w-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                      },
                    }}
                  >
                    <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase">
                      Subscribes
                    </p>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Third Component */}
          <div className="grid grid-cols-1 sm:grid-cols-2   customThree:grid-cols-4 xl:grid-cols-5 gap-[4em] mt-[2em] pb-[2em]  border-b border-[rgba(255,255,255,0.20)]">
            <div className="flex flex-col gap-[1em]">
              <motion.p
                className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Office
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                021 Hollywood Boulevard, LA
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                customer@example.com
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                (021) 345-6789
              </motion.p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <motion.p
                className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Services
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Family Experiences
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Events
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Weddings
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Tours
              </motion.p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <motion.p
                className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Quick Menu
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Home
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Services
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                About Us
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Blog
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Contact Us
              </motion.p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <motion.p
                className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Support
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Faq
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Privacy & Cookies
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Legal
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Accessibility
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[0.875rem] font-normal "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Sitemap
              </motion.p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <motion.p
                className="text-[#FFF] font-PlayfairDisplay text-[1.25rem] font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Follow Us
              </motion.p>

              <div className="flex items-center gap-[1em] ">
                <motion.div
                  className="relative bg-[#ACB889] rounded-[6.25em] w-[2em] h-[2em]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                    },
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={footerFacebook}
                      alt=""
                      className="object-cover object-center  w-[0.5625em]"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative bg-[#ACB889] rounded-[6.25em] w-[2em] h-[2em]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                    },
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={footerTwitter}
                      alt=""
                      className="object-cover object-center  w-[0.875em]"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative bg-[#ACB889] rounded-[6.25em] w-[2em] h-[2em]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                    },
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={footerInstagram}
                      alt=""
                      className="object-cover object-center  w-[0.8125em]"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative bg-[#ACB889] rounded-[6.25em] w-[2em] h-[2em]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                    },
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={footerYoutube}
                      alt=""
                      className="object-cover object-center  w-[1em]"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Fourth Component */}

          <div className="flex flex-col my-[2em]">
            <motion.p
              className="text-[#FFF] font-Inter text-[0.875rem] font-normal text-center "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              © 2025 Aalia. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
