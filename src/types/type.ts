import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export type Projects = {
    id: number;
    title: string;
    roles: string[];
    technologies?: string[];
    year: string;
    position?: string;
    size?: string;
    marginBottom?: string;
    padding?: string;
    website?: string;
    github?: string;
    duration?: string;
    description1?: string[];
    description2?: string[];
    mainImage?: StaticImageData;
    mainImageAlt?: string | undefined;
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