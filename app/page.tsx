import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="pb-40">
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Experience/>

    </main>
  );
}
