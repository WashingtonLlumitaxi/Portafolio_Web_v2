import Link from "next/link";
import { Separator } from "./ui/separator";


const Footer = () => {
    return (
        <footer className="max-w-3xl mx-auto">
            <div className="md:flex md:justify-between">
                <div>
                    <h4 className="text-3xl font-bold my-6 md:my-0">WashingtonDev</h4>
                </div>
                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <Link href="#about-me">About me</Link>
                    <Link href="#skills">SKills</Link>
                    <Link href="#portfolio">Potfolio</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </div>
            <Separator className="my-4"/>
            <div className="text-center">&copy; 2024 | Landing Page by David Llumitaxi</div>
        </footer>

    );
}

export default Footer;