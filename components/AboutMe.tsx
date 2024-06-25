import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/Title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="About Me" subtitle="Know Me Better" />
            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/*Carrusel*/}
                    <Carousel opts={{
                        align: "start"
                    }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={250} height={400}
                                            className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8 text-justify">
                        I am a Junior Software Engineer, 
                        I'm in the
                        active search for a
                        position that allows me
                        contribute my knowledge
                        technical and, at the same time,
                        give me the opportunity to
                        grow professionally alongside
                        of experts in an environment
                        dynamic and challenging. I'm
                        committed to development
                        of innovative solutions and
                        I have a great interest in
                        collaborate on projects that
                        boost my development and
                        allow you to contribute
                        significantly to the success of
                        equipment
                    </p>
                    <Button>
                        <Phone size={20} className="mr-2" /> Write Me
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;