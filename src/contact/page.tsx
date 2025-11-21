import modernMansion from "src/assets/contact/modern-mansion.jpg";
import ContactHeroSection from "./_components/contact-hero-section";

export default function Contact() {
  return (
    <>
      <div
        className="relative flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${modernMansion})` }}
      >
        <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]"></div>

        <div className="z-10">
          <ContactHeroSection />
        </div>
      </div>
    </>
  );
}
