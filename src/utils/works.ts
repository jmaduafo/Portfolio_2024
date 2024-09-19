import { Projects } from "@/types/type";

import ElysianMiddle1 from '../../public/images/elysian/imagesMiddle1.jpg'
import ElysianMiddle2 from '../../public/images/elysian/imagesMiddle2.jpg'
import ElysianMiddle3 from '../../public/images/elysian/imagesMiddle3.jpg'
import ElysianOutro1 from '../../public/images/elysian/imagesOutro1.jpg'
import ElysianOutro2 from '../../public/images/elysian/imagesOutro2.jpg'
import ElysianOutro3 from '../../public/images/elysian/imagesOutro3.jpg'
import ElysianIntro from '../../public/images/elysian/introImage.jpg'

import SylvanMiddle1 from '../../public/images/sylvan/imagesMiddle1.jpg'
import SylvanMiddle2 from '../../public/images/sylvan/imagesMiddle2.jpg'
import SylvanMiddle3 from '../../public/images/sylvan/imagesMiddle3.jpg'
import SylvanOutro1 from '../../public/images/sylvan/imagesOutro1.jpg'
import SylvanOutro2 from '../../public/images/sylvan/imagesOutro2.jpg'
import SylvanOutro3 from '../../public/images/sylvan/imagesOutro3.jpg'
import SylvanIntro from '../../public/images/sylvan/introImage.jpg'
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
      "I spearheaded the design, frontend, and backend development of Elysian, tackling each problem systematically and breaking tasks into manageable pieces. This methodical approach ensured that each feature was developed efficiently and effectively, from creating a seamless user interface with engaging design elements to implementing backend functionalities for data management. Throughout the project, I relished the challenges and enjoyed the creative process, ultimately delivering a dynamic and user-friendly web application.",
    ],
    description2: [
      "A few problems that I faced while working on this project stemmed from utilizing Supabase, a backend-as-a-service, for the first time. I had some run-ins with the CRUD rules, and it took some time for me to figure out why data wasn't coming through from the backend, sometimes even after I had outlined the rules correctly. It also took some trial-and-error to master Supabase storage and how to appropriately categorize the images by user. The project was challenging (and fun) to code, but I also didn't hesitate to be free and creative with it. I approached the creation of the site with an anthropologist mindset, seeking to encourage the user to think about their dating habits and possibly why they date the way they do.",
      "",
    ],
    size: "w-[10vw]",
    position: "md:justify-end",
    marginBottom: "mb-[20vh]",
    // padding: "translateX-[8vw]",
    mainImage: ElysianOutro2,
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
      "I took on the challenge of designing and developing Sylvan Home Furniture, a full-stack ecommerce site for luxury furniture. I used various coding languages and subtle 2D animations to enhance the user experience without overcomplicating it. I used Figma to guide the design layout and typography and ensure that aesthetics and functionality worked together seamlessly. As I continued to work on it, Sylvan became a passion project, so I invested many, many hours in its development for days at a time, leading me to complete it in just 2.5 weeks, for both the design and development. Using Tailwind CSS deeply quickened the process, which made the responsiveness aspect of the project a lot less headache than if I were to use vanilla CSS or SCSS. Working with Firebase, I ensured smooth data handling and user authentication, keeping everything running effortlessly in the backend.",
    ],
    description2: [
      "I have used Redux for an open-source project before this project, but in this case, I was working alone with Redux, so I wanted to ensure that I truly understood and grasped how to use it effectively through watching Youtube videos and researching solutions on StackOverflow. It was the same with Stripe as well, which took some getting used to, and I ran into a lot of bugs when connecting the payment portal to my website, but after taking a step back, I was able to work through the problems with much satisfaction. I made sure to break my tasks down into checkboxes, taking every task one step at a time rather than focusing on multiple things at once. It made me stress a lot less and pay attention to the necessary details. Overall, I believe that this project conveys my design sense the best and highlights my skills as a UI designer and developer very well.",
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
      "Oracle of T.H.U.G.S. Music is a platform dedicated to representing those who are often silenced or dismissed, offering a space where their stories, struggles, and triumphs are celebrated through compelling melodies and lyrics, representing genres in Afro beats, hip hop, and more.",
      "As part of a freelance project for a new music company, I took on the challenge of designing and developing the client's website from start to finish. Drawing upon my expertise in web development and design, I crafted a platform that not only showcased my client's mission and values but also provided a seamless user experience for visitors. From conceptualization to implementation, I worked diligently to ensure that every aspect of the website reflected the company's commitment to amplifying the voices of the overlooked and marginalized. Through thoughtful design choices, intuitive navigation, and engaging multimedia content, I created a digital space where their music could shine and their message could resonate with audiences worldwide.",
    ],
    description2: [
      "Since this project was the first time that I used the Next.js framework, especially in tandem with TypeScript, the issues that I had came from adjusting to the server-side rendering framework, although, because I started from using regular React and was already very comfortable with the library, the learning curve for Next.js was hardly steep. Focusing on the frontend, mainly on the design aspect of the project, allowed me to work diligently and get used to the workflow of Next.js and TypeScript without focusing too hard on the more complex aspects of the framework, and eventually, I'd grown very comfortable using Next.js and much prefer it to vanilla React because of its flexibility and overall usability.",
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
      // "Lofi Train was one of my earliest projects and also one of my most impulsive works. I usually plan my projects better, but with this one in particular, I wanted to start it right away because of how highly inspired I was at the time. Looking back, there's definitely some things that I would change and even things that might need tweaking, but overall, I had a lot of fun coding this passion project. My main goal for this project was to master the Javascript audio library since I really wanted to create a project that had a music player for some reason. At the time that I worked on this project, I was pretty good with React, but I still felt that I needed some more practice. With what I know now, I would most likely use a backend to allow users to add their own media so that they can truly personalize their page even more. But even so, I love the site for what it is. Even now when I land on the page, I feel a sense of comfort and coziness, which is the feeling that I want to invoke from the user.",
      "Lofi Train was one of my earliest and most impulsive projects, sparked by intense inspiration. Though I usually plan more, I dove in to master the JavaScript audio library because I wanted to implement a music player in some way in my project. While there are aspects I'd tweak now, I enjoyed coding this passion project. With my current skills, I would most likely use a backend to allow users to add their own media so that they can truly personalize the site to them even more, but I’m proud of the cozy, comforting vibe the site delivers, which is the feeling that I wish to invoke from the user.",
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
