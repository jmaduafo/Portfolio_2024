import { Projects } from "@/types/type";

const projects = [
//   {
//     title: "Elysian",
//     alt: "a couple laughing and enjoying each other's company",
//     year: "2024",
//     roles: ["frontend", "backend", "creative direction", "web design"],
//     technologies: [
//       "Next.js",
//       "Typescript",
//       "Supabase",
//       "Tailwind",
//       "Shadcn UI",
//       "Framer Motion",
//       "GSAP",
//       "Figma",
//     ],
//     github: "jmaduafo/Rate-Date",
//     website: "https://rate-date-one.vercel.app/",
//     duration: "1.5 months",
//     description1: [
//       "Whether it's a romantic evening or a casual meetup, keep track of your experiences and make every date count! Elysian is a comprehensive web application designed for users to record their romantic and non-romantic dates, schedule future meetups, and plan dates effortlessly. Featuring interactive visual charts to showcase dating activity, Elysians helps users track their social life and stay organized. Additionally, users can share date ideas and post their success or horror dating stories, fostering a community of shared experiences and creativity.",
//       "",
//     ],
//     description2: [
//       "I spearheaded the design, front-end, and back-end development of Elysian, tackling each problem systematically and breaking tasks into manageable pieces. This methodical approach ensured that each feature was developed efficiently and effectively, from creating a seamless user interface with engaging design elements to implementing robust backend functionalities for data management. Throughout the project, I relished the challenges and enjoyed the creative process, ultimately delivering a dynamic and user-friendly web application.",
//       "",
//     ],
//     mainImage: "",
//     introImage: "",
//     imagesMiddle: [],
//     imagesOutro: [],
//   },
  {
    title: "Oracle",
    alt: "a couple laughing and enjoying each other's company",
    year: "2024",
    roles: ["frontend", "creative direction", "web design"],
    technologies: ["Next.js", "TypeScript", "Tailwind", "GSAP", "Framer Motion", "Figma"],
    github: "jmaduafo/Oracle",
    website: "https://oracle-beryl.vercel.app/",
    duration: "3 weeks",
    description1: [
      "Whether it's a romantic evening or a casual meetup, keep track of your experiences and make every date count! Elysian is a comprehensive web application designed for users to record their romantic and non-romantic dates, schedule future meetups, and plan dates effortlessly. Featuring interactive visual charts to showcase dating activity, Elysians helps users track their social life and stay organized. Additionally, users can share date ideas and post their success or horror dating stories, fostering a community of shared experiences and creativity.",
      "",
    ],
    description2: [
      "I spearheaded the design, front-end, and back-end development of Elysian, tackling each problem systematically and breaking tasks into manageable pieces. This methodical approach ensured that each feature was developed efficiently and effectively, from creating a seamless user interface with engaging design elements to implementing robust backend functionalities for data management. Throughout the project, I relished the challenges and enjoyed the creative process, ultimately delivering a dynamic and user-friendly web application.",
      "",
    ],
    size: 'w-[10vw]',
    position: 'justify-end',
    marginBottom: 'mb-[10vh]',
    padding: 'pr-[8vw]',
    mainImage: require('../../public/images/oracle/imagesMiddle3.jpg'),
    introImage: require('../../public/images/oracle/introImage.png'),
    imagesMiddle: [require('../../public/images/oracle/imagesMiddle1.png'), require('../../public/images/oracle/imagesMiddle2.png'), require('../../public/images/oracle/imagesMiddle3.jpg')],
    imagesOutro: [require('../../public/images/oracle/imagesOutro1.jpg'), require('../../public/images/oracle/imagesOutro2.png'), require('../../public/images/oracle/imagesOutro3.jpg')],
  },
  {
    title: "Lofi Train",
    alt: "a couple laughing and enjoying each other's company",
    year: "2023",
    roles: ["frontend", "web design"],
    technologies: ["React", "SASS", "Javascript", "Figma"],
    github: "jmaduafo/Lofi-Train",
    website: "https://jmaduafo.github.io/Lofi-Train/",
    duration: "2 weeks",
    size: 'w-[20vw]',
    marginBottom: 'mb-[20vh]',
    position: 'justify-center',
    padding: 'pr-[8vw]',
    description1: [
      "Whether it's a romantic evening or a casual meetup, keep track of your experiences and make every date count! Elysian is a comprehensive web application designed for users to record their romantic and non-romantic dates, schedule future meetups, and plan dates effortlessly. Featuring interactive visual charts to showcase dating activity, Elysians helps users track their social life and stay organized. Additionally, users can share date ideas and post their success or horror dating stories, fostering a community of shared experiences and creativity.",
      "",
    ],
    description2: [
      "I spearheaded the design, front-end, and back-end development of Elysian, tackling each problem systematically and breaking tasks into manageable pieces. This methodical approach ensured that each feature was developed efficiently and effectively, from creating a seamless user interface with engaging design elements to implementing robust backend functionalities for data management. Throughout the project, I relished the challenges and enjoyed the creative process, ultimately delivering a dynamic and user-friendly web application.",
      "",
    ],
    mainImage: require('../../public/images/lofi_train/imagesOutro3.png'),
    introImage: require('../../public/images/lofi_train/introImage.png'),
    imagesMiddle: [require('../../public/images/lofi_train/imagesMiddle1.gif'), require('../../public/images/lofi_train/imagesMiddle2.png'), require('../../public/images/lofi_train/imagesMiddle3.jpg')],
    imagesOutro: [require('../../public/images/lofi_train/imagesOutro1.gif'), require('../../public/images/lofi_train/imagesOutro2.png'), require('../../public/images/lofi_train/imagesOutro3.png')],
  },
];

export const allProjects : Projects[] = []

projects.forEach((item, i) => {
    allProjects.push({
        ... item,
        id: i
    })
})