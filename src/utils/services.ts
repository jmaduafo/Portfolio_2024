import { Services } from "@/types/type"
import Image1 from "../../public/images/services/list/serviceList_1.jpg"
import Image2 from "../../public/images/services/list/serviceList_2.jpg"
import Image3 from "../../public/images/services/list/serviceList_3.jpg"
import Image4 from "../../public/images/services/list/serviceList_4.jpg"

const services = [
    {
        title: "Frontend Development",
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
            "Lenis Scroll",
        ],
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        image: Image2
    },
    {
        title: "Backend Development",
        technologies: [
            "JavaScript",
            "TypeScript",
            "next.js",
            "node.js",
            "firebase",
            "supabase",
            "express",
            "mongoDB"
        ],
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        image: Image1
        
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
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        image: Image3
    },
    {
        title: "UI Design",
        technologies: [
            "Figma",
            "InDesign",
            "Artboard"
        ],
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        image: Image4
    },
]

export const allServices : Services[] = []

services.forEach((item, i) => {
    allServices.push({
        ...item,
        id: i + 1
    })
})