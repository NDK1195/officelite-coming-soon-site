import bgPatternFooter from "../../../assets/home/bg-pattern-footer.svg";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Countdown from "../../../components/Countdown";
import PackageList from "./PackageList";

function Footer() {
  return (
    <footer className="relative scale-100 bg-#25293A">
      <div className="relative h-full overflow-hidden">
        {/* background pattern */}
        <img
          src={bgPatternFooter}
          alt="background pattern"
          className="absolute left-1/2 top-[156px] w-full min-w-[1202px] -translate-x-1/2 lg:-left-96 lg:-top-64 lg:translate-x-0"
        />
        {/* background pattern */}

        {/* package list */}
        <section className="fixed -top-[794px] left-1/2 z-20 w-full max-w-[1110px] -translate-x-1/2 overflow-visible px-6 md:-top-[498px] md:px-10 lg:-top-[254px] xl:px-0">
          <PackageList />
        </section>
        {/* package list */}

        <Container>
          {/* countdown */}
          <section className="flex flex-col items-center gap-10 pt-[894px] md:gap-12 md:pt-[598px] lg:flex-row lg:justify-between lg:gap-0 lg:pt-[336px]">
            <Countdown />
            <Button className="bg-#5175FF text-white hover:bg-#829CFF">
              Get Started
            </Button>
          </section>
        </Container>
        {/* countdown */}
      </div>
    </footer>
  );
}
export default Footer;
