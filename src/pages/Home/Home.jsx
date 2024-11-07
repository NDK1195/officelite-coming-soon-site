import Footer from "./components/Footer";
import Header from "./components/Header";

function Home() {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_1248px] md:grid-rows-[1fr_986px] lg:grid-rows-[1fr_603px]">
      <Header />
      <Footer />
    </div>
  );
}
export default Home;
