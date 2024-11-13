import { Link } from "react-router-dom";
import bgPatternHeader from "../../../assets/home/bg-pattern-header.svg";
import logo from "../../../assets/shared/logo.svg";
import Container from "../../../components/Container";
import Countdown from "../../../components/Countdown";
function Header() {
  return (
    <header className="relative overflow-hidden bg-[#fafafa] pb-[296px] md:pb-[358px] xl:pb-0">
      {/* background pattern */}
      <img
        src={bgPatternHeader}
        alt="background pattern"
        className="absolute -top-[170px] left-1/2 min-w-[458px] -translate-x-1/2 md:hidden"
      />
      {/* background pattern */}
      <Container className="xl:pl-[165px]">
        {/* logo */}
        <section className="mb-20 mt-11 flex justify-center md:mb-[104px] md:mt-[72px] md:justify-start xl:mt-[154px]">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[100px] md:w-[155px]" />
          </Link>
        </section>
        {/* logo */}

        {/* content */}
        <section className="flex flex-col items-center lg:items-start">
          <div className="mb-16 text-center md:mb-10 md:max-w-[573px] lg:max-w-[540px] lg:text-left">
            <h1 className="mb-6 text-[40px] font-bold leading-[48px] text-#333950 lg:text-[56px] lg:leading-[64px]">
              Work smarter. Save time.
            </h1>
            <p className="leading-[26px] text-#747B95 lg:text-lg lg:leading-7">
              Easily manage your projects. Get on the list and receive in-app
              perks available only to early subscribers. We are moving into
              final development and getting ready for official launch soon.
            </p>
          </div>
        </section>
        {/* content */}

        {/* countdown */}
        <section className="flex justify-center lg:justify-start">
          <Countdown
            textColor={"#333950"}
            countDownColor={"#5175FF"}
            countDownBackground={"#5175FF"}
            countDownTextColor={"#333950"}
          />
        </section>
        {/* countdown */}
      </Container>
    </header>
  );
}
export default Header;
