import Button from "../../../components/Button";
import illustration from "../../../assets/home/illustration-charts.svg";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row-reverse">
      {/* illustration */}
      <div className="max-w-[171px] md:max-w-[281px] lg:max-w-[475px]">
        <img src={illustration} alt="illustration charts" className="w-full" />
      </div>
      {/* illustration */}
      {/* content */}
      <div className="text-center md:max-w-[345px] md:text-left lg:max-w-[540px]">
        <h1 className="mb-6 text-[40px] font-bold leading-[48px] text-#333950 lg:text-[56px] lg:leading-[64px]">
          A simple solution to complex tasks is coming soon
        </h1>
        <p className="mb-6 leading-[26px] text-#747B95 lg:mb-8 lg:text-lg lg:leading-7">
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </p>
        <Button
          shadow={true}
          className="bg-#5175FF text-white hover:bg-#829CFF"
        >
          Get Started
        </Button>
      </div>
      {/* content */}
    </div>
  );
}
export default Hero;
