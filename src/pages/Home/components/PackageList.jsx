import Button from "../../../components/Button";
import bgPatternPricing from "../../../assets/home/bg-pattern-pricing.svg";

function PackageList() {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-6 lg:grid-cols-3 lg:gap-[30px]">
      {/* package */}
      <div className="lg:px rounded-[13px] bg-white py-10 text-center shadow-box md:py-12 md:pl-12 md:pr-[68px] md:text-left lg:px-0 lg:py-10 lg:text-center">
        <div className="flex flex-col gap-14 md:flex-row md:justify-between md:gap-0 lg:flex-col lg:gap-14">
          <div className="text-#333950">
            <h3 className="mb-10 text-xl font-bold leading-7 md:mb-4 lg:mb-10">
              Basic
            </h3>
            <h2 className="mb-2 text-[56px] font-bold leading-[64px]">Free</h2>
            <p className="leading-7">Up to 5 users for free</p>
          </div>

          <div className="mb-8 flex flex-col gap-4 leading-7 text-#747B95 md:mb-0 md:self-end lg:mb-8 lg:self-auto">
            <p>Basic document collaboration</p>
            <p>2 GB storage</p>
            <p>Great security and support</p>
          </div>
        </div>

        <Button
          className="bg-#5175FF text-#5175FF hover:bg-opacity-25 md:mt-6 lg:mt-0"
          opacity={true}
        >
          Try for Free
        </Button>
      </div>
      {/* package */}

      {/* package */}
      <div className="lg:px relative overflow-hidden rounded-[13px] bg-#5175FF py-10 text-center shadow-box md:py-12 md:pl-12 md:pr-[100px] md:text-left lg:px-0 lg:py-10 lg:text-center">
        {/* background */}
        <div className="absolute -top-[379px] left-1/2 z-10 w-[880px] -translate-x-1/2 md:-left-[319px] md:-top-[282px] md:translate-x-0 lg:-top-[379px] lg:left-1/2 lg:-translate-x-1/2">
          <img src={bgPatternPricing} alt="background pattern" />
        </div>
        {/* background */}
        <div className="flex flex-col gap-14 md:flex-row md:justify-between md:gap-0 lg:flex-col lg:gap-14">
          <div className="text-white">
            <h3 className="mb-10 text-xl font-bold leading-7 md:mb-4 lg:mb-10">
              Basic
            </h3>
            <h2 className="mb-2 text-[56px] font-bold leading-[64px]">$9.99</h2>
            <p className="leading-7">Per user, billed monthly</p>
          </div>

          <div className="mb-8 flex flex-col gap-4 leading-7 text-white md:mb-0 md:self-end lg:mb-8 lg:self-auto">
            <p>All essential integrations</p>
            <p>50 GB storage</p>
            <p>More control and insights</p>
          </div>
        </div>

        <Button className="relative z-20 bg-white text-#5175FF hover:text-#829CFF md:mt-6 lg:mt-0">
          Try for Free
        </Button>
      </div>
      {/* package */}

      {/* package */}
      <div className="lg:px rounded-[13px] bg-white py-10 text-center shadow-box md:py-12 md:pl-12 md:pr-[92px] md:text-left lg:px-0 lg:py-10 lg:text-center">
        <div className="flex flex-col gap-14 md:flex-row md:justify-between md:gap-0 lg:flex-col lg:gap-14">
          <div className="text-#333950">
            <h3 className="mb-10 text-xl font-bold leading-7 md:mb-4 lg:mb-10">
              Ultimate
            </h3>
            <h2 className="mb-2 text-[56px] font-bold leading-[64px]">
              $19.99
            </h2>
            <p className="leading-7">Per user, billed monthly</p>
          </div>

          <div className="mb-8 flex flex-col gap-4 leading-7 text-#747B95 md:mb-0 md:self-end lg:mb-8 lg:self-auto">
            <p>Robust work management</p>
            <p>100 GB storage</p>
            <p>VIP support</p>
          </div>
        </div>

        <Button
          className="bg-#5175FF text-#5175FF hover:bg-opacity-25 md:mt-6 lg:mt-0"
          opacity={true}
        >
          Try for Free
        </Button>
      </div>
      {/* package */}
    </div>
  );
}
export default PackageList;
