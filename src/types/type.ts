import { StaticImageData } from "next/image";

export type Projects = {
    id: number;
    title: string;
    roles: string[];
    technologies?: string[];
    year: string;
    website?: string;
    github?: string;
    duration?: string;
    description1?: string[];
    description2?: string[];
    mainImage?: StaticImageData;
    mainImageAlt?: string;
    introImage?: StaticImageData;
    imagesMiddle?: StaticImageData[];
    imagesOutro?: StaticImageData[];
}

export type Services = {
    id: number;
    title: string;
    technologies: string[];
    description: string;
}