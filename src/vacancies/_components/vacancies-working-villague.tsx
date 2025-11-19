import modernHouse from "src/assets/vacancies/modern-house.jpg";
import check from "src/assets/vacancies/check.svg";
import modernMansion from "src/assets/vacancies/modern-mansion.jpg";
import applyButton from "src/assets/vacancies/apply-button.svg";
import caretDown from "src/assets/vacancies/caret-down.svg";
import { useState } from "react";
import submit from "src/assets/vacancies/submit.svg";
import { motion } from "framer-motion";

export default function VacanciesWorkingVillague() {
  const [selectOpen, setSelectOpen] = useState(false);
  return (
    <>
      <div className="grid customThree:grid-cols-2 xl:max-w-[1200px] xl:mx-auto  xl:px-[1.25em] xl:relative xl:bottom-[2em] mt-[10em] xl:mt-[0em] mb-[5em]">
        <div className="flex flex-col">
          <div className="flex flex-col p-[4em] bg-[#222]">
            <motion.p
              className="text-[#FFF] font-PlayfairDisplay text-[2.25rem] font-bold capitalize"
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
              Advantages of working at Villague:
            </motion.p>

            <div className="flex flex-col gap-[1em] mt-[2em]">
              <div className="flex items-center gap-[1em]">
                <motion.img
                  src={check}
                  alt=""
                  className="object-cover object-center w-[1.125em]"
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
                  className="text-[#FFF] font-Inter text-[1.125rem] font-normal"
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
                  Competitive Salary
                </motion.p>
              </div>

              <div className="flex items-center gap-[1em]">
                <motion.img
                  src={check}
                  alt=""
                  className="object-cover object-center w-[1.125em]"
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
                  className="text-[#FFF] font-Inter text-[1.125rem] font-normal"
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
                  Leadership Program
                </motion.p>
              </div>

              <div className="flex items-center gap-[1em]">
                <motion.img
                  src={check}
                  alt=""
                  className="object-cover object-center w-[1.125em]"
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
                  className="text-[#FFF] font-Inter text-[1.125rem] font-normal"
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
                  Medical, Dental & Vision
                </motion.p>
              </div>

              <div className="flex items-center gap-[1em]">
                <motion.img
                  src={check}
                  alt=""
                  className="object-cover object-center w-[1.125em]"
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
                  className="text-[#FFF] font-Inter text-[1.125rem] font-normal"
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
                  Paid Time Off
                </motion.p>
              </div>

              <div className="flex items-center gap-[1em]">
                <motion.img
                  src={check}
                  alt=""
                  className="object-cover object-center w-[1.125em]"
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
                  className="text-[#FFF] font-Inter text-[1.125rem] font-normal"
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
                  Professional Development
                </motion.p>
              </div>

              <div className="flex items-center gap-[1em]">
                <motion.img
                  src={check}
                  alt=""
                  className="object-cover object-center w-[1.125em]"
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
                  className="text-[#FFF] font-Inter text-[1.125rem] font-normal"
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
                  Bonus/incentive every month
                </motion.p>
              </div>

              <div className="flex items-center gap-[1em]">
                <motion.img
                  src={check}
                  alt=""
                  className="object-cover object-center w-[1.125em]"
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
                  className="text-[#FFF] font-Inter text-[1.125rem] font-normal"
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
                  Leadership Program
                </motion.p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <motion.img
              src={modernHouse}
              alt=""
              className="object-cover object-center aspect-[509/722]"
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
        </div>

        <div className="flex flex-col">
          {/*  */}
          <div className="flex flex-col">
            <motion.img
              src={modernMansion}
              alt=""
              className="object-cover object-center aspect-[540/331]"
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

          {/*  */}

          <div className="flex flex-col bg-[#FFF] p-[4em] gap-[2em]">
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
              Villague Recruitment
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
              Gravida vulputate aliquet tempor sitadi piscin penatibu s aliquam
              adipiscing gravi elementum aliquet eget senectus felis enim diam
              molestie.
            </motion.p>

            <button className="flex items-center self-start bg-[#F6D167] py-[1em] px-[1.5em] gap-[0.5em] cursor-pointer">
              <motion.p
                className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase"
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
                Looking for staff
              </motion.p>

              <motion.img
                src={applyButton}
                alt=""
                className="object-cover object-center w-[0.6875em]"
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
            </button>
          </div>

          {/*  */}

          <div className="flex flex-col bg-[#222] backdrop-blur-[0.46875em] p-[2em] h-full">
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
                Submit Application
              </motion.p>

              <motion.p
                className="text-[#FFF] font-Inter text-[1.125rem] font-normal"
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
                Diam et habitasse tortor cras donec urna eget dolor in
              </motion.p>
            </div>

            <div className="flex flex-col gap-[1em] mt-[2em]">
              <motion.input
                type="text"
                className="p-[1em] w-full outline-none placeholder-[#222]"
                placeholder="Full name"
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

              <div className="flex items-center justify-between gap-[1em]">
                <motion.input
                  type="text"
                  className="p-[1em] w-full outline-none placeholder-[#222]"
                  placeholder="Email address"
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
                  className="p-[1em] w-full outline-none placeholder-[#222]"
                  placeholder="Phone"
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

              {/*  */}

              <motion.div
                className="relative "
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
                <select
                  className="w-full  border border-[#90A3B1] bg-white p-[1em] appearance-none border-none outline-none"
                  onFocus={() => setSelectOpen(true)}
                  onBlur={() => setSelectOpen(false)}
                  defaultValue="" // 👈 important for placeholder
                >
                  {/* 🚀 Custom placeholder */}
                  <option value="" disabled hidden>
                    Select Vacancies
                  </option>

                  <option>Select 1</option>
                  <option>Select 2</option>
                  <option>Select 3</option>
                </select>

                <img
                  src={caretDown}
                  alt="Dropdown Icon"
                  className={`w-[0.5625em] h-[1em] absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    selectOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </motion.div>

              {/*  */}

              <motion.input
                type="text"
                className="pt-[1em] pb-[4em] px-[1em] w-full outline-none placeholder-[#222]"
                placeholder="Work Experience"
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
                className="flex items-center self-start bg-[#F6D167] py-[1em] px-[1.5em] gap-[0.5em]"
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
                <p className="text-[#222] font-Inter font-bold uppercase">
                  Submit
                </p>
                <img
                  src={submit}
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
