import { useNavigate } from "react-router-dom";

function Button({
  children,
  shadow = false,
  opacity = false,
  px = "px-[41.5px]",
  py = "py-[14px]",
  className,
  type = "button",
}) {
  const navigate = useNavigate();
  return (
    <button
      className={`${shadow ? "shadow-button" : ""} ${opacity ? "bg-opacity-[0.1526]" : ""} ${px} ${py} text-center text-base font-bold leading-7 ${className} rounded-[28px] transition-all`}
      type={type}
      onClick={() => navigate("/signup")}
    >
      {children}
    </button>
  );
}
export default Button;
