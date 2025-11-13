import modernHouse from "src/assets/about-us/modern-house.jpg";
import AboutHeroSection from "./_components/about-hero-section";

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
    </>
  );
}
