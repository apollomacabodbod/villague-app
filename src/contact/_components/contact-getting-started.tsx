import facebook from "src/assets/contact/facebook.svg";
import twitter from "src/assets/contact/twitter.svg";
import instagram from "src/assets/contact/instagram.svg";
import youtube from "src/assets/contact/youtube.svg";
import sendMessageButton from "src/assets/contact/send-message-button.svg";

import { motion } from "framer-motion";

export default function ContactGettingStarted() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] my-[6.25em] ">
        <motion.p
          className="text-[#222] font-PlayfairDisplay text-[2.25rem] font-bold capitalize"
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
          Let’s Get Started
        </motion.p>

        <div className="grid lg:grid-cols-2 mt-[2em] gap-[2em]">
          <div className="flex flex-col gap-[2em]">
            <motion.p
              className="text-[#828282] font-Inter text-[1.125rem] font-normal "
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
              Gravida vulputate aliquet tempor sit. Neque sed pretium non urna
              sed etid aenean haretra quam plac adipiscing penatibus aliquam
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-[1.875em]">
              <div className="flex flex-col gap-[1em]">
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
                  Office
                </motion.p>

                <motion.p
                  className="text-[#222] font-Inter text-[1.125rem] font-normal"
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
                  {" "}
                  021 Hollywood Boulevard, LA
                </motion.p>

                <motion.p
                  className="text-[#222] font-Inter text-[1.125rem] font-normal"
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
                  {" "}
                  customer@example.com
                </motion.p>

                <motion.p
                  className="text-[#222] font-Inter text-[1.125rem] font-normal"
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
                  {" "}
                  (021) 345-6789
                </motion.p>
              </div>

              {/* Card two */}

              <div className="flex flex-col gap-[1em]">
                <motion.p
                  className="text-[#222] font-PlayfairDisplay text-[1.25rem] font-bold"
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

                <div className="flex items-center gap-[1em]">
                  <motion.div
                    className="flex flex-col relative bg-[#ACB889] rounded-[6.25em] h-[2em] w-[2em]"
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
                        src={facebook}
                        alt=""
                        className="object-cover object-center w-[0.5625em]"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col relative bg-[#ACB889] rounded-[6.25em] h-[2em] w-[2em]"
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
                        src={twitter}
                        alt=""
                        className="object-cover object-center w-[0.875em]"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col relative bg-[#ACB889] rounded-[6.25em] h-[2em] w-[2em]"
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
                        src={instagram}
                        alt=""
                        className="object-cover object-center w-[0.8125em]"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col relative bg-[#ACB889] rounded-[6.25em] h-[2em] w-[2em]"
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
                        src={youtube}
                        alt=""
                        className="object-cover object-center w-[1em]"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.iframe
              title="Demografie Karte Deutschland"
              width="100%"
              height="300"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=021%20Hollywood%20Boulevard,%20LA+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
              <a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">
                Demografie Karte Deutschland
              </a>
            </motion.iframe>
          </div>

          {/* card Two */}

          <div className="flex flex-col bg-[#222] p-[2em]">
            <div className="flex flex-col gap-[1em] mb-[2em]">
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
                Send a Message
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[1.125rem] font-normal "
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
                venenatis eget .
              </motion.p>
            </div>

            <div className="flex flex-col gap-[1em]">
              <motion.input
                type="text"
                placeholder="Full name"
                className="outline-none w-full p-[1em] placeholder-[#222]"
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

              <motion.input
                type="text"
                placeholder="Email address"
                className="outline-none w-full p-[1em] placeholder-[#222]"
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

              <motion.input
                type="text"
                placeholder="Email address"
                className="outline-none w-full pt-[1em] px-[1em] pb-[8em] placeholder-[#222]"
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
                className="flex items-center justify-center bg-[#F6D167] py-[1em] px-[1.5em] gap-[0.5em]"
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
                  send message
                </p>

                <img
                  src={sendMessageButton}
                  alt=""
                  className="object-cover object-center w-[0.6875em]"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
