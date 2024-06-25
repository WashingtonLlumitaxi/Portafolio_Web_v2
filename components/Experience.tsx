import { dataExperience } from "@/data";
import Title from "./shared/Title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";

const Experience = () => {
    return (
        <div className="p-4 md:px-12 md:py-40 max-w-5xl mx-auto" id="skills">
            <Title title="Skills" subtitle="Frameworks & Tech"/>

            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {dataExperience.map((data) => (
                    <div key={data.id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl">{data.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {data.experience.map((item) => (
                                <div key={item.name} className="my-4">
                                    <p className="flex gap-2 mb-2"><BadgeCheck/>{item.name}</p>
                                    <p className="text-gray-400 mb-2">{item.subtitle}</p>
                                    <Progress value={item.value}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;