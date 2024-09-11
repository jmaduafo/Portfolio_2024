import { Projects } from "@/types/type";

import ElysianMiddle1 from '../../public/images/elysian/imagesMiddle1.png'
import ElysianMiddle2 from '../../public/images/elysian/imagesMiddle2.png'
import ElysianMiddle3 from '../../public/images/elysian/imagesMiddle3.jpg'
import ElysianOutro1 from '../../public/images/elysian/imagesOutro1.png'
import ElysianOutro2 from '../../public/images/elysian/imagesOutro2.jpg'
import ElysianOutro3 from '../../public/images/elysian/imagesOutro3.png'
import ElysianIntro from '../../public/images/elysian/introImage.png'

import SylvanMiddle1 from '../../public/images/sylvan/imagesMiddle1.jpg'
import SylvanMiddle2 from '../../public/images/sylvan/imagesMiddle2.png'
import SylvanMiddle3 from '../../public/images/sylvan/imagesMiddle3.jpg'
import SylvanOutro1 from '../../public/images/sylvan/imagesOutro1.jpg'
import SylvanOutro2 from '../../public/images/sylvan/imagesOutro2.jpg'
import SylvanOutro3 from '../../public/images/sylvan/imagesOutro3.jpg'
import SylvanIntro from '../../public/images/sylvan/introImage.png'
import SylvanMain from '../../public/images/sylvan/mainImage.jpg'

import OracleMiddle1 from '../../public/images/oracle/imagesMiddle1.png'
import OracleMiddle2 from '../../public/images/oracle/imagesMiddle2.png'
import OracleMiddle3 from '../../public/images/oracle/imagesMiddle3.jpg'
import OracleOutro1 from '../../public/images/oracle/imagesOutro1.jpg'
import OracleOutro2 from '../../public/images/oracle/imagesOutro2.jpg'
import OracleOutro3 from '../../public/images/oracle/imagesOutro3.jpg'
import OracleIntro from '../../public/images/oracle/introImage.png'

import LofiMiddle1 from '../../public/images/lofi_train/imagesMiddle1.gif'
import LofiMiddle2 from '../../public/images/lofi_train/imagesMiddle2.jpg'
import LofiMiddle3 from '../../public/images/lofi_train/imagesMiddle3.jpg'
import LofiOutro1 from '../../public/images/lofi_train/imagesOutro1.gif'
import LofiOutro2 from '../../public/images/lofi_train/imagesOutro2.jpg'
import LofiOutro3 from '../../public/images/lofi_train/imagesOutro3.jpg'
import LofiIntro from '../../public/images/lofi_train/introImage.jpg'

const projects = [
  {
    title: "Elysian",
    alt: "a couple laughing and enjoying each other's company",
    year: "2024",
    roles: ["frontend", "backend", "creative direction", "web design"],
    technologies: [
      "Next.js",
      "Typescript",
      "Supabase",
      "Tailwind",
      "Shadcn UI",
      "Chart.js",
      "Framer Motion",
      "GSAP",
      "Figma",
    ],
    github: "jmaduafo/Rate-Date",
    website: "https://rate-date-one.vercel.app/",
    duration: "1.5 months",
    description1: [
      "Whether it's a romantic evening or a casual meetup, keep track of your experiences and make every date count! Elysian is a comprehensive web application designed for users to record their romantic and non-romantic dates, schedule future meetups, and plan dates effortlessly. Featuring interactive visual charts to showcase dating activity, Elysians helps users track their social life and stay organized. Additionally, users can share date ideas and post their success or horror dating stories, fostering a community of shared experiences and creativity.",
      "",
    ],
    description2: [
      "I spearheaded the design, front-end, and back-end development of Elysian, tackling each problem systematically and breaking tasks into manageable pieces. This methodical approach ensured that each feature was developed efficiently and effectively, from creating a seamless user interface with engaging design elements to implementing robust backend functionalities for data management. Throughout the project, I relished the challenges and enjoyed the creative process, ultimately delivering a dynamic and user-friendly web application.",
      "",
    ],
    size: "w-[10vw]",
    position: "md:justify-end",
    marginBottom: "mb-[20vh]",
    // padding: "translateX-[8vw]",
    mainImage: ElysianMiddle3,
    introImage: ElysianIntro,
    imagesMiddle: [
      ElysianMiddle1,
      ElysianMiddle2,
      ElysianMiddle3,
    ],
    imagesOutro: [
      ElysianOutro1,
      ElysianOutro2,
      ElysianOutro3,
    ],
  },
  {
    title: "Sylvan",
    alt: "a couple laughing and enjoying each other's company",
    year: "2023",
    roles: ["frontend", "backend", "creative direction", "web design"],
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "Firebase",
      "Redux",
      "Node.js",
      "Express.js",
      "Stripe",
      "Heroku",
      "Framer Motion",
      "Locomotive Scroll",
      "GSAP",
      "Cloudinary",
      "Figma",
    ],
    github: "jmaduafo/Sylvan",
    website: "https://sylvan-127ad.web.app/",
    duration: "2.5 weeks",
    description1: [
      "Introducing Sylvan Furniture, the ultimate destination for exquisite luxury furniture to make your home shine! Our curated collections are meticulously designed to transform living spaces into havens of sophistication. At Sylvan, we hold a steadfast commitment to customer satisfaction, understanding that every home is unique.",
      "Taking on the challenge of crafting Sylvan Home Furniture, I assumed both the design and development roles for this full-stack ecommerce site that centered around luxury furniture. Utilizing an array of coding languages, I ensured a robust technical foundation. Opting for a subtle 2D animation approach, the user experience was dynamically enriched without overwhelming simplicity. Prior to the development phase, Figma served as my design blueprint, ensuring that aesthetics seamlessly merged with functionality. The project, from conceptualization to execution, wrapped up within 2.5 weeks. Collaborating closely with Firebase, data integrity and user authentication were meticulously handled, contributing to the seamless functioning of Sylvan Home Furniture.",
    ],
    description2: [
      "I spearheaded the design, front-end, and back-end development of Elysian, tackling each problem systematically and breaking tasks into manageable pieces. This methodical approach ensured that each feature was developed efficiently and effectively, from creating a seamless user interface with engaging design elements to implementing robust backend functionalities for data management. Throughout the project, I relished the challenges and enjoyed the creative process, ultimately delivering a dynamic and user-friendly web application.",
      "",
    ],
    size: "w-[10vw]",
    position: "md:justify-start",
    marginBottom: "mb-[10vh]",
    // padding: "translateX-[-8vw]",
    mainImage: SylvanMain,
    introImage: SylvanIntro,
    imagesMiddle: [
      SylvanMiddle1,
      SylvanMiddle2,
      SylvanMiddle3,
    ],
    imagesOutro: [
    SylvanOutro1,
    SylvanOutro2,
    SylvanOutro3,
    ],
  },
  {
    title: "Oracle Music",
    alt: "a couple laughing and enjoying each other's company",
    year: "2024",
    roles: ["frontend", "creative direction", "web design"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "GSAP",
      "Framer Motion",
      "Figma",
    ],
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
    size: "w-[20vw]",
    marginBottom: "mb-[20vh]",
    position: "md:justify-center",
    // padding: "translateX-[-8vw]",
    mainImage: OracleMiddle3,
    introImage: OracleIntro,
    imagesMiddle: [
      OracleMiddle1,
      OracleMiddle2,
      OracleMiddle3,
    ],
    imagesOutro: [
    OracleOutro1,
    OracleOutro2,
    OracleOutro3,
    ],
  },
  {
    title: "Lofi Train",
    alt: "a couple laughing and enjoying each other's company",
    year: "2023",
    roles: ["frontend", "web design"],
    technologies: ["React.js", "SCSS", "Javascript", "Figma"],
    github: "jmaduafo/Lofi-Train",
    website: "https://jmaduafo.github.io/Lofi-Train/",
    duration: "2 weeks",
    size: "w-[20vw]",
    marginBottom: "mb-[20vh]",
    position: "md:justify-end",
    // padding: 'translateX-[10vw]',
    description1: [
      "Ever wish that you could go to a place to destress from a long day of work, school, or life? This application is a great place to not only listen to cozy, lofi music but also gives you the opportunity to customize the site to fit your vibe, making it your own personal safe space.",
      "Lofi Train is a personal side project that's surrounded by one of my favorite hobbies: music, specifically lofi music. Lofi brings a calm, serene energy that helps to balance out mental strain, especially when going through a stressful time or being absorbed in work. I wanted there to be a place for users to be absorbed in that feeling of inner peace that can mediate their feelings of stress. I was inspired by Rainmeter and wanted to create a similar aesthetic, thus Lofi Train was born.",
    ],
    description2: [
      "I spearheaded the design, front-end, and back-end development of Elysian, tackling each problem systematically and breaking tasks into manageable pieces. This methodical approach ensured that each feature was developed efficiently and effectively, from creating a seamless user interface with engaging design elements to implementing robust backend functionalities for data management. Throughout the project, I relished the challenges and enjoyed the creative process, ultimately delivering a dynamic and user-friendly web application.",
      "",
    ],
    mainImage: LofiOutro3,
    introImage: LofiIntro,
    imagesMiddle: [
      LofiMiddle1,
      LofiMiddle2,
      LofiMiddle3,
    ],
    imagesOutro: [
    LofiOutro1,
    LofiOutro2,
    LofiOutro3,
    ],
  },
];

export const allProjects: Projects[] = [];

projects.forEach((item, i) => {
  allProjects.push({
    ...item,
    id: i,
  });
});
