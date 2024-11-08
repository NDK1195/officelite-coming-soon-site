import bgPatternHeader from "../../../assets/home/bg-pattern-header.svg";
import logo from "../../../assets/shared/logo.svg";
import Container from "../../../components/Container";
import Hero from "./Hero";
function Header() {
  return (
    <header className="relative overflow-hidden bg-[#fafafa] pb-[894px] md:pb-[638px] lg:pb-[438px]">
      {/* background pattern */}

      <img
        src={bgPatternHeader}
        alt="background pattern"
        className="absolute -top-[170px] left-1/2 min-w-[458px] -translate-x-1/2 md:-top-[164px] md:left-[395px] md:-translate-x-0 lg:-top-[419px] lg:left-[656px]"
      />

      {/* background pattern */}
      <Container>
        {/* logo */}
        <section className="mb-20 mt-11 flex justify-center md:mb-[104px] md:mt-[72px] md:justify-start xl:mt-20">
          <img src={logo} alt="logo" className="w-[100px] md:w-[155px]" />
        </section>
        {/* logo */}

        {/* hero */}
        <section>
          <Hero />
        </section>
        {/* hero */}
      </Container>
    </header>
  );
}
export default Header;
