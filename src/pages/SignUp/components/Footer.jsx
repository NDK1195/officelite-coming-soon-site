import bgPatternFooter from "../../../assets/home/bg-pattern-footer.svg";
import Form from "./Form";

function Footer() {
  return (
    <footer className="relative scale-100 bg-#25293A">
      {/* background pattern */}
      <div className="relative h-full overflow-hidden">
        <img
          src={bgPatternFooter}
          alt="background pattern"
          className="absolute left-1/2 top-0 w-full -translate-x-1/2 md:-top-1/2 lg:-left-[465px] lg:-top-[483px] lg:min-w-[1440px] lg:translate-x-0"
        />
      </div>
      {/* background pattern */}

      {/* form */}
      <div className="fixed -top-[232px] left-1/2 z-20 w-full max-w-[445px] -translate-x-1/2 md:-top-[254px] xl:-left-[190px] xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-0">
        <Form />
        {/* form */}
      </div>
    </footer>
  );
}
export default Footer;
