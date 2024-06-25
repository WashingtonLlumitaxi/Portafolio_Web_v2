import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Container from "./shared/Container";

const Introduction = () => {
    return (  
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello I´m</h3>
                <h1 className="text-4xl mb-3 font-bold">David Llumitaxi 7️⃣</h1>
                <h2 className="text-2xl text-gray-400">Software Engineer</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2"/>Contact Me
                        </Link>
                        <Link className={buttonVariants({ variant: 'secondary'})} href="/CV_David-Llumitaxi.pdf"
                        target="_blank">
                            <Paperclip className="mr-2"/> Download CV
                        </Link>
                    </div>
                </div>
                <Image src="/avatar-1.png" alt="Profile pic" width={400} height={400} />
            </div>
        </Container>
    );
}

export default Introduction;