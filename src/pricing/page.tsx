import mediterraneanVilla from "src/assets/pricing/mediterranean-villa.jpg";
import PricingHeroSection from "./_components/pricing-hero-section";
import PricingPackage from "./_components/pricing-package";

export default function Pricing() {
  return (
    <>
      <div
        className="flex flex-col relative bg-cover bg-center "
        style={{
          backgroundImage: `url(${mediterraneanVilla})`,
        }}
      >
        <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]"></div>

        <div className="z-10">
          <PricingHeroSection />
        </div>
      </div>

      <PricingPackage />
    </>
  );
}
