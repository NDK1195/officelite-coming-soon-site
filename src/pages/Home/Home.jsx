import logo from "../../assets/shared/logo.svg";
import Container from "../../components/Container";
import Hero from "./components/Hero";

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
        <Hero />
        {/* hero */}
      </Container>
    </>
  );
}
export default Home;
