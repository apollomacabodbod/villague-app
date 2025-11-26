import mediterraneanVilla from "src/assets/villas/mediterranean-villa.jpg";
import modernVilla from "src/assets/villas/modern-villa.jpg";
import modernVillaWithPool from "src/assets/villas/modern-villa-with-pool.jpg";
import kuta from "src/assets/villas/kuta.svg";
import location from "src/assets/villas/location.svg";
import { motion } from "framer-motion";

export default function HomeOurVillasCards() {
  const data = [
    {
      id: 1,
      Title: "The Secret Jungle Villa",
      location: "Bali, Indonesia",
      price: "$290,00",
      image: mediterraneanVilla,
    },
    {
      id: 2,
      Title: "The Secret Jungle Villa",
      location: "Bali, Indonesia",
      price: "$290,00",
      image: modernVilla,
    },

    {
      id: 2,
      Title: "The Secret Jungle Villa",
      location: "Bali, Indonesia",
      price: "$290,00",
      image: modernVillaWithPool,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[1.875em] mt-[4em] mb-[6.25em]">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-[1em]">
            <motion.div
              className="relative  h-[25em] bg-cover bg-center "
              style={{ backgroundImage: `url(${item.image})` }}
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
              <motion.div
                className="absolute top-[88.25%] left-[4.84%]" // top % = (desired pixel distance / parent height) * 100  and left %  = (desired pixel distance / parent width) * 100
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
                <div className="flex flex-col py-[0.5em] px-[1em] bg-[#FFF] rounded-[3.125em]">
                  <div className="flex items-center justify-between gap-[0.5em]">
                    <img src={kuta} alt="" />

                    <p className="text-[#26C] font-Inter text-[0.75rem] font-bold uppercase">
                      Kuta
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

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
              {item.Title}
            </motion.p>

            <motion.div
              className="flex items-center gap-[0.5em] "
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
              <img src={location} alt="" />
              <p className="text-[#828282] font-Inter text-[0.75rem] font-bold uppercase ">
                {item.location}
              </p>
            </motion.div>

            <motion.p
              className="text-[#F08420] font-Inter text-[1.25rem] font-bold uppercase"
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
              {item.price}
            </motion.p>
          </div>
        ))}
      </div>
    </>
  );
}
