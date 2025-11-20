import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import upArrow from "src/assets/pricing/up-arrow.svg";
import downArrow from "src/assets/pricing/down-arrow.svg";

export default function PricingQuickQuestionCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // first column
  const [openIndexTwo, setOpenIndexTwo] = useState<number | null>(null); // second column

  const containerRef = useRef<HTMLDivElement>(null);
  const containerRefTwo = useRef<HTMLDivElement>(null);

  // Close first column when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close second column when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRefTwo.current &&
        !containerRefTwo.current.contains(event.target as Node)
      ) {
        setOpenIndexTwo(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = [
    "How to order it?",
    "Amet at consectetur cras amet vestibulum",
    "Condimentum elementum eget bibendum at",
    "Volutpat quis consectetur pulvinar amet",
    "Incidunt acuvelit nibaret sodales quis",
  ];

  const renderDropdown = (
    openIndexState: number | null,
    setOpenIndexState: (index: number | null) => void,
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <div ref={ref} className="flex flex-col ">
      {items.map((title, index) => {
        const isOpen = openIndexState === index;
        return (
          <div key={index} className="flex flex-col gap-[1em]">
            <div
              className="flex items-center justify-between cursor-pointer select-none"
              onClick={() => setOpenIndexState(isOpen ? null : index)}
            >
              <p
                className={`font-PlayfairDisplay text-[0.8rem] sm:text-[0.9rem] lg:text-[1.25rem] font-bold ${
                  isOpen ? "text-[#26C]" : "text-black"
                }`}
              >
                {title}
              </p>
              <img
                src={isOpen ? upArrow : downArrow}
                alt=""
                className="w-[0.75em] transition-all duration-300"
              />
            </div>

            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <p className="text-[#828282] font-Inter text-[1.125rem] font-normal">
                Gravida vulputate aliquet tempor sit. Neque sed pretium non urna
                sed etid aenean haretra quam placerat adipiscing penatibus
                aliquam adipiscing gravida elementum aliquet eget senectus felis
                enim diam molestie.
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="grid sm:grid-cols-2 max-w-[1200px] lg:mx-auto px-[1.25em] gap-[1.875em] mt-[4.01625em] mb-[6.25em]">
      {renderDropdown(openIndex, setOpenIndex, containerRef)}
      {renderDropdown(openIndexTwo, setOpenIndexTwo, containerRefTwo)}
    </div>
  );
}
