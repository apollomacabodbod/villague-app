import beautifulExterior from "src/assets/vacancies/beautiful-exterior.jpg";
import VacanciesHeroSection from "./_components/vacancies-hero-section";
import VacanciesCards from "./_components/vacancies-cards";
import VacanciesVillahueJob from "./_components/vacancies-villahue-job";
import VacanciesWorkingVillague from "./_components/vacancies-working-villague";

export default function Vacancies() {
  return (
    <>
      <div
        className="flex flex-col relative bg-cover bg-center"
        style={{ backgroundImage: `url(${beautifulExterior})` }}
      >
        <div className="absolute inset-0 bg-[rgba(34,34,34,0.50)]"></div>

        <div className="z-10">
          <VacanciesHeroSection />
        </div>
      </div>

      <VacanciesCards />
      <VacanciesVillahueJob />
      <VacanciesWorkingVillague />
    </>
  );
}
