function Container({ children }) {
  return (
    <div className="relative mx-auto max-w-[1110px] px-6 md:px-10 xl:px-0">
      {children}
    </div>
  );
}
export default Container;
