import modernHouse from "src/assets/about-us/modern-house.jpg";
import AboutHeroSection from "./_components/about-hero-section";
import AboutVillague from "./_components/about-villague";
import AboutOtherAmenities from "./_components/about-other-amenities";
import modernWoodenHouse from "src/assets/about-us/modern-wooden-house.jpg";
import AboutOtherAmenitiesCards from "./_components/about-other-amenities-cards";

export default function About() {
  return (
    <>
      <div
        className="flex flex-col relative bg-cover bg-center"
        style={{ backgroundImage: `url(${modernHouse})` }}
      >
        <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]"></div>

        <div className="z-10">
          <AboutHeroSection />
        </div>
      </div>

      <AboutVillague />

      <div
        className="relative bg-cover bg-center flex flex-col pt-[5em] xl:mt-[6.19875em] "
        style={{ backgroundImage: `url(${modernWoodenHouse})` }}
      >
        <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]"></div>

        <div className="z-20">
          <AboutOtherAmenities />
          <AboutOtherAmenitiesCards />
        </div>
      </div>
    </>
  );
}
