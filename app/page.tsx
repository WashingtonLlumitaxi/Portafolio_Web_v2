import Introduction from "@/components/Introduction";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar/>
      <Introduction/>

    </main>
  );
}
