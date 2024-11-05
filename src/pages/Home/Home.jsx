import logo from "../../assets/shared/logo.svg";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Countdown from "../../components/Countdown";
import Hero from "./components/Hero";
import PackageList from "./components/PackageList";

function Home() {
  return (
    <>
      <Container>
        {/* logo */}
        <section className="mb-20 flex justify-center md:mb-[104px] md:justify-start">
          <img src={logo} alt="logo" className="w-[100px] md:w-[155px]" />
        </section>
        {/* logo */}

        {/* hero */}
        <section className="mb-[100px] md:mb-[140px] lg:mb-[184px]">
          <Hero />
        </section>
        {/* hero */}

        {/* package list */}
        <section className="mb-[100px] lg:mb-[82px]">
          <PackageList />
        </section>
        {/* package list */}

        {/* countdown */}
        <section className="flex flex-col items-center gap-10 md:gap-12 lg:flex-row lg:justify-between lg:gap-0">
          <Countdown />
          <Button className="bg-#5175FF text-white hover:bg-#829CFF">
            Get Started
          </Button>
        </section>
        {/* countdown */}
      </Container>
    </>
  );
}
export default Home;
