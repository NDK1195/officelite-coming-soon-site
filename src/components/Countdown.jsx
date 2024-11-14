import { useEffect, useState } from "react";

function Countdown({
  textColor,
  countDownColor,
  countDownBackground,
  countDownTextColor,
}) {
  const formattedCountDownDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 3,
    new Date().getDate(),
  ).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const [remainingTime, setRemainingTime] = useState(null);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  useEffect(() => {
    const now = new Date();

    const countDownDate = new Date(
      now.getFullYear(),
      now.getMonth() + 3,
      now.getDate(),
    );

    const intervalId = setInterval(() => {
      setRemainingTime(countDownDate.getTime() - now.getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <h2
        className={`mb-4 text-center font-bold uppercase leading-[48px] tracking-[5px] ${textColor === "#333950" ? "text-#333950" : "text-white"} lg:text-left`}
      >
        Coming <span className="text-#5175FF">{formattedCountDownDate}</span>
      </h2>

      <div
        className={`grid w-[328px] grid-cols-4 gap-4 text-center font-bold ${countDownColor === "#5175FF" ? "text-#5175FF" : "text-white"} md:w-[448px]`}
      >
        <div
          className={`rounded-[13px] ${countDownBackground === "#5175FF" ? "bg-#5175FF bg-opacity-10" : "bg-#333950"} px-5 py-3 md:py-5`}
        >
          <p className="text-[32px] leading-[48px] md:text-[56px]">{days}</p>
          <p
            className={`text-xs leading-7 opacity-50 md:text-base ${countDownTextColor === "#333950" ? "text-#333950" : "text-white"}`}
          >
            days
          </p>
        </div>
        <div
          className={`rounded-[13px] ${countDownBackground === "#5175FF" ? "bg-#5175FF bg-opacity-10" : "bg-#333950"} px-5 py-3 md:py-5`}
        >
          <p className="text-[32px] leading-[48px] md:text-[56px]">{hours}</p>
          <p
            className={`text-xs leading-7 opacity-50 md:text-base ${countDownTextColor === "#333950" ? "text-#333950" : "text-white"}`}
          >
            hours
          </p>
        </div>
        <div
          className={`rounded-[13px] ${countDownBackground === "#5175FF" ? "bg-#5175FF bg-opacity-10" : "bg-#333950"} px-5 py-3 md:py-5`}
        >
          <p className="text-[32px] leading-[48px] md:text-[56px]">{minutes}</p>
          <p
            className={`text-xs leading-7 opacity-50 md:text-base ${countDownTextColor === "#333950" ? "text-#333950" : "text-white"}`}
          >
            min
          </p>
        </div>
        <div
          className={`rounded-[13px] ${countDownBackground === "#5175FF" ? "bg-#5175FF bg-opacity-10" : "bg-#333950"} px-5 py-3 md:py-5`}
        >
          <p className="text-[32px] leading-[48px] md:text-[56px]">{seconds}</p>
          <p
            className={`text-xs leading-7 opacity-50 md:text-base ${countDownTextColor === "#333950" ? "text-#333950" : "text-white"}`}
          >
            sec
          </p>
        </div>
      </div>
    </div>
  );
}
export default Countdown;
