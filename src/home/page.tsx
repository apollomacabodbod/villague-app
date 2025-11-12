import modernVilla from "src/assets/home/modern-villa.jpg";
import HomeHeroSection from "./_components/home-hero-section";
import HomeOurVillas from "./_components/home-our-villas";
import HomeOurVillasCards from "./_components/home-our-villas-cards";
import HomeAboutVillague from "./_components/home-about-villague";
import HomeOurFacilitiesCards from "./_components/home-our-facilities-cards";
import HomeOurFacilities from "./_components/home-our-facilities";
import HomeOtherAmenities from "./_components/home-other-amenities";
import HomeSpecialOffer from "./_components/home-special-offer";
import HomeOurCustomer from "./_components/home-our-customer";

export default function Home() {
  return (
    <>
      <div
        className="relative flex flex-col bg-cover bg-center  "
        style={{ backgroundImage: `url(${modernVilla})` }}
      >
        <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]"></div>
        <div className="z-10">
          <HomeHeroSection />
        </div>
      </div>

      <div className="bg-[#FFF] ">
        <HomeOurVillas />
        <HomeOurVillasCards />
      </div>

      <HomeAboutVillague />

      <div className="bg-[#FFF]">
        <HomeOurFacilities />
        <HomeOurFacilitiesCards />
        <HomeOtherAmenities />
        <HomeSpecialOffer />
      </div>

      <HomeOurCustomer />
    </>
  );
}
