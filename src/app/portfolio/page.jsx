"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react"; 
import  project1 from "../../../public/project1.png" 
import  project2 from "../../../public/project2.png" 
import  project3 from "../../../public/project3.png" 
import  project4 from "../../../public/project4.png" 

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Studynotion Ed-Tech App",
    desc: "MERN Stack Engineered an EdTech platform using MERN stack, featuring course commerce and lecture streaming functionalities. Enabled course purchasing and selling, integrating a secure payment gateway. Seamlessly managed state with Redux, while React Router facilitated  smooth lecture navigation. Integrated advanced search functionality, user authentication via JWT, and sleek UI design using Tailwind CSS.  backend data Stored on Cloudinary and MongoDb.",
    img: project1,
    link: "https://studynotion-edtech-project.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Glamour Food App",
    desc: "Glamour Food is a sophisticated food delivery application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers users a seamless experience for exploring and ordering from a curated selection of high-end, glamorous dishes from top restaurants. The app integrates Stripe payment processing to facilitate secure and convenient transactions. Users can easily browse through menus, place orders",
    img: project2,
    link: "https://glamour-food-app1.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "React Shopping Cart",
    desc: "Frontend Shopping Cart App using Reactjs , Redux-toolkit and Tailwind css library ", 
    img: project4,
    link: "",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "GP-Space",
    desc: "Created frontEnd WebPage with reactjs and tailwind css ",
    img: project3,
    link: "https://glittery-daifuku-90258f.netlify.app/",
  },
 
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[500vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen   flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
              <div className="flex flex-col gap-[2px] text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[300px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold mb-3 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <button
           
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            <a href="/contact">

            Hire Me
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;