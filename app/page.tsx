import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Portfolio from "@/components/Portfolio";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="pb-40">
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  );
}
