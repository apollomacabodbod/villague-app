import { useState } from "react";
import { motion } from "framer-motion";
import caretDown from "src/assets/home/caret-down.svg";
import date from "src/assets/home/date.svg";
import profileGuest from "src/assets/home/profile-guest.svg";
import bookNow from "src/assets/home/book-now.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function HomeHeroSection() {
  const [selectOpen, setSelectOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-[9em]  max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[5em]">
        <div className="flex flex-col ">
          <p className="text-[#F6D167] font-Inter text-[0.875rem] font-bold uppercase ">
            Enjoy the finest stays
          </p>

          <p className="font-PlayfairDisplay text-[3.4rem] lg:text-[4.5rem] font-bold capitalize text-[#FFF]">
            Find Your Best Villa House and Appartment
          </p>

          <p className="font-Inter text-[1.125rem] font-normal text-[#FFF] ">
            Gravida vulputate aliquet tempor siteque sed pretium non urna sed
            etid aenean haretra quam placerat adipiscing{" "}
          </p>
        </div>

        <div className="flex flex-col bg-[rgba(255,255,255,0.20)] backdrop-blur-[0.46875em] p-[2em]">
          <p className="font-PlayfairDisplay text-[1.25rem] font-bold text-[#FFF] ">
            Quick Booking
          </p>

          <p className="text-[#FFF] font-Inter text-[1.125rem] font-normal mt-[1em] ">
            Diam et habitasse tortor cras donec urna eget dolor in turpis
            venenatis eget .
          </p>

          <input
            type="text"
            className="outline-none p-[1em] text-[#222] placeholder-black mt-[2em]"
            placeholder="Email address"
          />

          {/* Custom Select with Arrow */}
          <motion.div
            className="relative mt-[1em]"
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
              className="w-full  border border-[#90A3B1] p-[1em] text-[#222] placeholder-black  appearance-none outline-none"
              onFocus={() => setSelectOpen(true)}
              onBlur={() => setSelectOpen(false)}
            >
              <option>Select one of our villa</option>
              <option>Select one of our villa</option>
              <option>Select one of our villa</option>
            </select>

            <img
              src={caretDown}
              alt="Dropdown Icon"
              className={`w-[0.5625em] h-[1em] absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                selectOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </motion.div>

          {/* Custom Date  */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1em] mt-[1em]">
            <div className="relative  w-full">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Check in"
                dateFormat="MM/dd/yyyy"
                className="w-full border border-[#90A3B1] bg-[#FFF] py-[0.75em] pl-[1em] pr-[2.5em]  focus:outline-none placeholder-black"
                wrapperClassName="w-full" // 👈 Force DatePicker wrapper to full width
              />

              {/* Calendar Icon */}
              <img
                src={date}
                alt="Calendar Icon"
                className="w-[1em] h-[1em] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>

            <div className="relative  w-full">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Check out"
                dateFormat="MM/dd/yyyy"
                className="w-full border border-[#90A3B1] bg-[#FFF] py-[0.75em] pl-[1em] pr-[2.5em]  focus:outline-none placeholder-black"
                wrapperClassName="w-full" // 👈 Force DatePicker wrapper to full width
              />

              {/* Calendar Icon */}
              <img
                src={date}
                alt="Calendar Icon"
                className="w-[1em] h-[1em] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-[1em]  bg-[#FFF] p-[1em]">
            <input
              type="text"
              className="outline-none text-[#222] placeholder-black w-full"
              placeholder="Number of guest"
            />

            <img src={profileGuest} alt="" className=" object-cover" />
          </div>

          <button className="flex items-center justify-center bg-[#F6D167]  px-[1.5em] py-[1em] mt-[1em] gap-[0.5em]">
            <p className="text-[#222] font-Inter text-[0.875rem] font-bold uppercase ">
              book now
            </p>
            <img src={bookNow} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
