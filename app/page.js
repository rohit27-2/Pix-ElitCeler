
import Image from "next/image";
import Navbar from "./pages/NavBar";
import Hero from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import Gallery from "./pages/Pre-Events";

export default function Home() {
  return (
    <center>
      <div className="text-black ">
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        {/* <Gallery /> */}
        <FAQ />
        <Footer />
      </div>
    </center>
  );
}
