import Navbar from "./_components/NavBar";
import Hero from "./_components/Home";
import AboutUs from "./_components/AboutUs";
import Services from "./_components/Services";
import FAQ from "./_components/FAQ";
import Footer from "./_components/Footer";
import Gallery from "./_components/Pre-Events";

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
        
      </div>
    </center>
  );
}
