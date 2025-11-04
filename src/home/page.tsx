import modernVilla from "src/assets/home/modern-villa.jpg";
import HomeHeroSection from "./_components/home-hero-section";

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
    </>
  );
}
