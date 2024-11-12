function Container({ children, className }) {
  return (
    <div
      className={`relative mx-auto max-w-[1110px] px-6 md:px-10 xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
export default Container;
