import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Github, Home, Inbox, Linkedin, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experience",
        icon: <Briefcase />,
        description: "Junior Software Enginner",
    },
    {
        id: 2,
        name: "Certifications",
        icon: <UsersRound />,
        description: "In progress",
    },
    {
        id: 3,
        name: "Projects",
        icon: <Wrench />,
        description: "3 completed",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.png",
    },
    {
        id: 2,
        url: "/slider-2.png",
    },
    {
        id: 3,
        url: "/slider-3.png",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Bienes Raices",
        image: "/bienes.png",
        urlGithub: "https://github.com/WashingtonLlumitaxi/BienesRaices_v2.1.git",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "GuitarLa",
        image: "/guitarla2.png",
        urlGithub: "https://github.com/WashingtonLlumitaxi/GuitarLA---JS.git",
        urlDemo: "https://precious-klepon-297bf3.netlify.app/",
    },
    {
        id: 3,
        title: "Web Portfolio",
        image: "/port1.png",
        urlGithub: "https://github.com/WashingtonLlumitaxi/Portafolio_Web_v2.git",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "2D and 3D Object Modeling",
        image: "/anima1.png",
        urlGithub: "https://github.com/WashingtonLlumitaxi/CompuMod_v2.git",
        urlDemo: "#!",
    },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development",
        experience: [
            {
                name: "HTML",
                subtitle: "Experienced",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Experienced",
                value: 75,
            },
            {
                name: "JavaScript",
                subtitle: "Intermediate",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Essential",
                value: 30,
            },
            {
                name: "React",
                subtitle: "Intermediate",
                value: 60,
            },
            {
                name: "Bootstrap",
                subtitle: "Intermediate",
                value: 60,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        experience: [
            {
                name: "Node JS",
                subtitle: "Experienced",
                value: 70,
            },
            {
                name: "Spring Boot",
                subtitle: "Essential",
                value: 40,
            },
            {
                name: "NoSQL",
                subtitle: "Essential",
                value: 30,
            },
            {
                name: "SQL",
                subtitle: "Intermediate",
                value: 60,
            },
            {
                name: "PHP",
                subtitle: "Essential",
                value: 40,
            },
            {
                name: "C#",
                subtitle: "Intermediante",
                value: 50,
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Linkedin",
        subtitle: "/in/david-llumitaxi",
        link: "https://www.linkedin.com/in/david-llumitaxi-10b26322a/",
        icon: <Linkedin />,
    },
    {
        id: 2,
        title: "GitHub",
        subtitle: "/washingtonllumitaxi",
        link: "https://github.com/settings/profile",
        icon: <Github />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "davidllumitaxi67@gmail.com",
        link: "mailto:test@test.com",
        icon: <Inbox />,
    },
];
