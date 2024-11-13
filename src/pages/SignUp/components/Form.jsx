import Button from "../../../components/Button";
function Form() {
  return (
    <form className="mx-6 rounded-[13px] bg-white p-6 shadow-box md:mx-0 md:px-[43px] md:pb-[51px] md:pt-10">
      <div className="mb-10 flex flex-col gap-6">
        {/* input group */}
        <div className="flex items-center justify-between border-b border-#747B95 border-opacity-50 px-4 pb-4 leading-7">
          <input
            type="text"
            className="outline-none placeholder:text-#747B95 placeholder:text-opacity-50 focus:text-#333950 focus:opacity-100"
            placeholder="Name"
          />
          <span className="hidden text-xl text-#F05B5B">
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
        </div>
        {/* input group */}

        {/* input group */}
        <div className="flex items-center justify-between border-b border-#747B95 border-opacity-50 px-4 pb-4 leading-7">
          <input
            type="text"
            className="outline-none placeholder:text-#747B95 placeholder:text-opacity-50 focus:text-#333950 focus:opacity-100"
            placeholder="Email Address"
          />
          <span className="hidden text-xl text-#F05B5B">
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
        </div>
        {/* input group */}

        {/* input group */}
        <div className="relative flex items-center justify-between border-b border-#747B95 border-opacity-50 px-4 pb-4 font-bold leading-7">
          <input type="text" className="outline-none" value="" disabled />
          {/* options */}
          <div className="absolute left-0 top-14 w-full rounded-lg border border-[#33395026] bg-white px-8 py-6 text-#333950 shadow-box">
            {/* option */}
            <div className="flex items-center justify-between border-b border-#747B95 border-opacity-25 pb-4">
              <p>
                Basic Pack <span className="ml-2 opacity-40">Free</span>
              </p>
              <span className="text-xs text-#5175FF">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
            {/* option */}
            {/* option */}
            <div className="flex items-center justify-between border-b border-#747B95 border-opacity-25 py-4">
              <p>
                Pro Pack <span className="ml-2 opacity-40">$9.99</span>
              </p>
              <span className="text-xs text-#5175FF">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
            {/* option */}
            {/* option */}
            <div className="flex items-center justify-between pt-4">
              <p>
                Ultimate Pack <span className="ml-2 opacity-40">$19.99</span>
              </p>
              <span className="text-xs text-#5175FF">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
            {/* option */}
          </div>
          {/* options */}

          <span className="text-xs text-#5175FF">
            <i className="fa-solid fa-angle-up"></i>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
        {/* input group */}

        {/* input group */}
        <div className="flex items-center justify-between border-b border-#747B95 border-opacity-50 px-4 pb-4 leading-7">
          <input
            type="text"
            className="outline-none placeholder:text-#747B95 placeholder:text-opacity-50 focus:text-#333950 focus:opacity-100"
            placeholder="Phone Number"
          />
          <span className="hidden text-xl text-#F05B5B">
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
        </div>
        {/* input group */}

        {/* input group */}
        <div className="flex items-center justify-between border-b border-#747B95 border-opacity-50 px-4 pb-4 leading-7">
          <input
            type="text"
            className="outline-none placeholder:text-#747B95 placeholder:text-opacity-50 focus:text-#333950 focus:opacity-100"
            placeholder="Company"
          />
          <span className="hidden text-xl text-#F05B5B">
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
        </div>
        {/* input group */}
      </div>
      <Button
        type="submit"
        className="w-full bg-#5175FF text-white hover:bg-#829CFF"
      >
        Get on the list
      </Button>
    </form>
  );
}
export default Form;
