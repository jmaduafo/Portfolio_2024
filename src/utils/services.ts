import { Services } from "@/types/type"

const services = [
    {
        title: "Web Development",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "react.js",
            "next.js",
            "tailwind",
            "GSAP",
            "Framer Motion",
            "node.js",
            "firebase",
            "supabase",
            "express",
            "mongoDB"
        ],
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    },
    {
        title: "Mobile Development",
        technologies: [
            "react native",
            "expo",
            "JavaScript",
            "TypeScript",
            "node.js",
        ],
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    },
    {
        title: "UI Design",
        technologies: [
            "Figma",
            "InDesign",
            "Artboard"
        ],
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    },
]

export const allServices : Services[] = []

services.forEach((item, i) => {
    allServices.push({
        ...item,
        id: i + 1
    })
})