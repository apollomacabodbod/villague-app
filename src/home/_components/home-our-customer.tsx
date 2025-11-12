import viewAll from "src/assets/our-customer/view-all.svg";
import doubleQuotes from "src/assets/our-customer/double-quotes.svg";
import star from "src/assets/our-customer/star.svg";
import portrait from "src/assets/our-customer/portrait.jpg";
import youngPretty from "src/assets/our-customer/young-pretty.jpg";

import { motion } from "framer-motion";

export default function HomeOurCustomer() {
  return (
    <>
      <div className="bg-[#222]  pt-[6.25em] mb-[8em]">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em]">
          <div className="md:flex md:items-start md:justify-between">
            <motion.p
              className="text-[#FFF] font-PlayfairDisplay text-[2.25rem] font-bold capitalize "
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
              What Our Customer Say About Us
            </motion.p>

            <motion.button
              className="flex items-center self-start bg-[#F6D167] px-[1.5em] py-[1em] gap-[0.5em] mt-[1.5em] md:mt-[0em]"
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
                View All
              </p>

              <img
                src={viewAll}
                alt=""
                className="object-cover object-center"
              />
            </motion.button>
          </div>

          <motion.p
            className="text-[#F5F5F5] font-Inter text-[1.125rem] font-normal lg:w-[37.5em] mt-[2em]"
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

          <div className="grid md:grid-cols-2  relative top-[4em] gap-[1.875em]">
            <div className="flex flex-col p-[2em] bg-[#FFF] gap-[1.5em]">
              <motion.img
                src={doubleQuotes}
                alt=""
                className="object-cover object-center w-[2.286em]"
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

              <motion.img
                src={star}
                alt=""
                className="object-cover object-center w-[6.375em] "
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
                className="text-[#222] font-PlayfairDisplay text-[1.5rem] font-bold "
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
                Awesome Services!
              </motion.p>

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
                Gravida vulputate aliquet tempor siteque sed quam pretium non
                urna sed etid aene haretra adipiscing penatibus a adipiscing
                gravida vulputate elemen aliquet eget senectus siteque sed quam
                pretium.
              </motion.p>

              <div className="flex flex-col">
                <div className="flex items-start gap-[1em]">
                  <div className="flex flex-col">
                    <motion.img
                      src={portrait}
                      alt=""
                      className="w-[4em] h-[4em] object-cover object-center"
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
                  </div>

                  <div className="flex flex-col gap-[0.5em]">
                    <motion.p
                      className="text-[#222] font-Inter text-[1.25rem] font-bold uppercase"
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
                      James Mason
                    </motion.p>
                    <motion.p
                      className="text-[#26C] font-Inter font-bold text-[0.75rem] uppercase"
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
                      Freelancer
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-[2em] bg-[#FFF] gap-[1.5em]">
              <motion.img
                src={doubleQuotes}
                alt=""
                className="object-cover object-center w-[2.286em]"
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

              <motion.img
                src={star}
                alt=""
                className="object-cover object-center w-[6.375em] "
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
                className="text-[#222] font-PlayfairDisplay text-[1.5rem] font-bold "
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
                Awesome Services!
              </motion.p>

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
                Gravida vulputate aliquet tempor siteque sed quam pretium non
                urna sed etid aene haretra adipiscing penatibus a adipiscing
                gravida vulputate elemen aliquet eget senectus siteque sed quam
                pretium.
              </motion.p>

              <div className="flex flex-col">
                <div className="flex items-start gap-[1em]">
                  <div className="flex flex-col">
                    <motion.img
                      src={youngPretty}
                      alt=""
                      className="w-[4em] h-[4em] object-cover object-center"
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
                  </div>

                  <div className="flex flex-col gap-[0.5em]">
                    <motion.p
                      className="text-[#222] font-Inter text-[1.25rem] font-bold uppercase"
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
                      Anna Jackson
                    </motion.p>
                    <motion.p
                      className="text-[#26C] font-Inter font-bold text-[0.75rem] uppercase"
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
                      Traveller
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
