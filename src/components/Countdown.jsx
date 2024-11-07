import { useEffect, useState } from "react";

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};
function Countdown() {
  const now = new Date();

  const countDownDate = new Date(
    now.getFullYear(),
    now.getMonth() + 3,
    now.getDate(),
  );

  const formattedCountDownDate = countDownDate.toLocaleDateString(
    undefined,
    options,
  );

  const [remainingTime, setRemainingTime] = useState(
    countDownDate.getTime() - now.getTime(),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(countDownDate.getTime() - now.getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div>
      <h2 className="mb-4 text-center font-bold uppercase leading-[48px] tracking-[5px] text-white lg:text-left">
        Coming <span className="text-#5175FF">{formattedCountDownDate}</span>
      </h2>

      <div className="grid w-[328px] grid-cols-4 gap-4 text-center font-bold text-white md:w-[448px]">
        <div className="rounded-[13px] bg-#333950 px-5 py-3 md:py-5">
          <p className="text-[32px] leading-[48px] md:text-[56px]">{days}</p>
          <p className="text-xs leading-7 opacity-50 md:text-base">days</p>
        </div>
        <div className="rounded-[13px] bg-#333950 px-4 py-[11px] md:py-4">
          <p className="text-[32px] leading-[48px] md:text-[56px]">{hours}</p>
          <p className="text-xs leading-7 opacity-50 md:text-base">hours</p>
        </div>
        <div className="rounded-[13px] bg-#333950 px-4 py-[11px] md:py-4">
          <p className="text-[32px] leading-[48px] md:text-[56px]">{minutes}</p>
          <p className="text-xs leading-7 opacity-50 md:text-base">min</p>
        </div>
        <div className="rounded-[13px] bg-#333950 px-4 py-[11px] md:py-4">
          <p className="text-[32px] leading-[48px] md:text-[56px]">{seconds}</p>
          <p className="text-xs leading-7 opacity-50 md:text-base">sec</p>
        </div>
      </div>
    </div>
  );
}
export default Countdown;
