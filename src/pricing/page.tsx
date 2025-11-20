import mediterraneanVilla from "src/assets/pricing/mediterranean-villa.jpg";
import PricingHeroSection from "./_components/pricing-hero-section";
import PricingPackage from "./_components/pricing-package";
import PricingCards from "./_components/pricing-cards";
import PricingOurPartners from "./_components/pricing-our-partners";
import PricingOurPartnersCards from "./_components/pricing-our-partners-cards";
import PricingCustomer from "./_components/pricing-customer";
import PricingQuickQuestion from "./_components/pricing-quick-question";

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
      <PricingCards />
      <PricingOurPartners />
      <PricingOurPartnersCards />
      <PricingCustomer />
      <PricingQuickQuestion />
    </>
  );
}
