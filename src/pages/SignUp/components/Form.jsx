import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
function Form() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("basic");
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isCompanyError, setIsCompanyError] = useState(false);
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();

  const validateData = useCallback((data) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValidate = true;

    if (data.name.length === 0) {
      isValidate = false;
      setIsNameError(true);
    }
    if (data.email.length === 0) {
      isValidate = false;
      setIsEmailError(true);
    }
    if (emailRegex.test(data.email) === false) {
      isValidate = false;
      setIsEmailError(true);
    }
    if (data.phone.length === 0) {
      isValidate = false;
      setIsPhoneError(true);
    }
    if (data.company.length === 0) {
      isValidate = false;
      setIsCompanyError(true);
    }

    return isValidate;
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      company: companyRef.current.value,
    };

    if (validateData(data)) {
      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      companyRef.current.value = "";
      setIsNameError(false);
      setIsEmailError(false);
      setIsPhoneError(false);
      setIsCompanyError(false);
      return navigate("/");
    }
  };

  return (
    <form
      className="mx-6 rounded-[13px] bg-white p-6 shadow-box md:mx-0 md:px-[43px] md:pb-[51px] md:pt-10"
      onSubmit={handleSubmit}
    >
      <div className="mb-10 flex flex-col gap-6">
        {/* input group */}
        <div
          className={`${isNameError ? "border-#F05B5B" : "border-#747B95"} flex items-center justify-between border-b border-opacity-50 px-4 pb-4 leading-7`}
        >
          <input
            type="text"
            className={`outline-none ${isNameError ? "placeholder:text-#F05B5B" : "placeholder:text-#747B95"} placeholder:text-opacity-50 focus:text-#333950 focus:opacity-100`}
            placeholder="Name"
            ref={nameRef}
            onFocus={() => setIsNameError(false)}
          />
          <span
            className={`${isNameError ? "block" : "hidden"} text-xl text-#F05B5B`}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
        </div>
        {/* input group */}

        {/* input group */}
        <div
          className={`${isEmailError ? "border-#F05B5B" : "border-#747B95"} flex items-center justify-between border-b border-opacity-50 px-4 pb-4 leading-7`}
        >
          <input
            type="text"
            className={`outline-none ${isEmailError ? "placeholder:text-#F05B5B" : "placeholder:text-#747B95"} placeholder:text-opacity-50 focus:text-#333950 focus:opacity-100`}
            placeholder="Email Address"
            ref={emailRef}
            onFocus={() => setIsEmailError(false)}
          />
          <span
            className={`${isEmailError ? "block" : "hidden"} text-xl text-#F05B5B`}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
        </div>
        {/* input group */}

        {/* select */}
        <div
          className="relative flex cursor-pointer items-center justify-between border-b border-#747B95 border-opacity-50 px-4 pb-4 font-bold leading-7"
          onClick={() => setIsSelectOpen(!isSelectOpen)}
        >
          {selectedOption === "basic" && (
            <p>
              Basic Pack <span className="ml-2 opacity-40">Free</span>
            </p>
          )}
          {selectedOption === "pro" && (
            <p>
              Pro Pack <span className="ml-2 opacity-40">$9.99</span>
            </p>
          )}
          {selectedOption === "ultimate" && (
            <p>
              Ultimate Pack <span className="ml-2 opacity-40">$19.99</span>
            </p>
          )}

          {/* options */}
          {isSelectOpen && (
            <div className="absolute left-0 top-14 w-full rounded-lg border border-[#33395026] bg-white px-8 py-6 text-#333950 shadow-box">
              {/* option */}
              <div
                className="flex items-center justify-between border-b border-#747B95 border-opacity-25 pb-4"
                onClick={() => setSelectedOption("basic")}
              >
                <p>
                  Basic Pack <span className="ml-2 opacity-40">Free</span>
                </p>
                <span
                  className={`text-xs text-#5175FF ${selectedOption === "basic" ? "block" : "hidden"}`}
                >
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              {/* option */}
              {/* option */}
              <div
                className="flex items-center justify-between border-b border-#747B95 border-opacity-25 py-4"
                onClick={() => setSelectedOption("pro")}
              >
                <p>
                  Pro Pack <span className="ml-2 opacity-40">$9.99</span>
                </p>
                <span
                  className={`text-xs text-#5175FF ${selectedOption === "pro" ? "block" : "hidden"}`}
                >
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              {/* option */}
              {/* option */}
              <div
                className="flex items-center justify-between pt-4"
                onClick={() => setSelectedOption("ultimate")}
              >
                <p>
                  Ultimate Pack <span className="ml-2 opacity-40">$19.99</span>
                </p>
                <span
                  className={`text-xs text-#5175FF ${selectedOption === "ultimate" ? "block" : "hidden"}`}
                >
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
              {/* option */}
            </div>
          )}
          {/* options */}
          <span className="cursor-pointer text-xs text-#5175FF">
            {isSelectOpen ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </span>
        </div>
        {/* select */}

        {/* input group */}
        <div
          className={`${isPhoneError ? "border-#F05B5B" : "border-#747B95"} flex items-center justify-between border-b border-opacity-50 px-4 pb-4 leading-7`}
        >
          <input
            type="text"
            className={`outline-none ${isPhoneError ? "placeholder:text-#F05B5B" : "placeholder:text-#747B95"} placeholder:text-opacity-50 focus:text-#333950 focus:opacity-100`}
            placeholder="Phone Number"
            ref={phoneRef}
            onFocus={() => setIsPhoneError(false)}
          />
          <span
            className={`${isPhoneError ? "block" : "hidden"} text-xl text-#F05B5B`}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
        </div>
        {/* input group */}

        {/* input group */}
        <div
          className={`${isCompanyError ? "border-#F05B5B" : "border-#747B95"} flex items-center justify-between border-b border-opacity-50 px-4 pb-4 leading-7`}
        >
          <input
            type="text"
            className={`outline-none ${isCompanyError ? "placeholder:text-#F05B5B" : "placeholder:text-#747B95"} placeholder:text-opacity-50 focus:text-#333950 focus:opacity-100`}
            placeholder="Company"
            ref={companyRef}
            onFocus={() => setIsCompanyError(false)}
          />
          <span
            className={`${isCompanyError ? "block" : "hidden"} text-xl text-#F05B5B`}
          >
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
