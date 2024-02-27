"use client";
import { motion, useScroll ,useInView } from "framer-motion";
import Image from "next/image";
import Brain from "../components/brain";
import { useRef } from "react";
const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefView = useInView(skillRef)
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container */}

        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* biography container */}
          <div className="flex flex-col gap-10  justify-center">
            {/* biography title */}
            <h1 className="font-bold text-2xl  "> BIOGRAPHY</h1>
            {/* biography desc */}
            <p className="text-lg font-semibold">
            I'm Gaurav Parasar, a MERN Full Stack Web Developer holding a Master's degree in Computer Applications from Jain University. Proficient in HTML, CSS, JavaScript, and the MERN stack (MongoDB, Express.js, React.js, Node.js) and familiar with Nextjs , I specialize in crafting dynamic and responsive web applications. With a passion for innovation, I thrive on transforming ideas into tangible digital experiences. I am dedicated to continuous learning and staying updated with the latest technologies to deliver cutting-edge solutions. Outside of coding, I enjoy exploring outdoor adventures like gyming and gaming . Let's connect and collaborate to bring your web projects to life!
            </p>
            {/* biography quote */}
            <span className="italic">Code is not just lines; it's a canvas where innovation meets imagination, and every keystroke paints a new possibility.</span>
            {/* biography sign */}
            <div className="self-end">
              <Image src="/signature.png" alt="" width={44} height={24} />
            </div>
            {/* biography scroll btn */}
            <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* skills container */}
          <div className="flex flex-col gap-12 pb-48 justify-center" ref={skillRef}>
            {/* skill title */}
            <motion.h1
            initial={{x:"-300px"}}
            animate={isSkillRefView ? {x:0} : {}}
            transition={{delay:0.2}}
          
            className="font-bold text-2xl  "> SKILLS</motion.h1>
            {/* skill list */}
            <motion.div 
            initial={{x:"-300px"}}
            animate={isSkillRefView ? {x:0} : {}}
             
            className="flex gap-4 flex-wrap ">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black  ">
                javascript
              </div>
              
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black   ">
                React js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black   ">
             Next js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black  ">
                Express js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black   ">
                Node js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black  ">
                Mongo Db
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black  ">
                TailwindCss
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black  ">
                Html
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black  ">
                Css
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black  ">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black  ">
                Oops
               </div>
            </motion.div>

            {/* skill scroll svg */}
            {/* <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg> */}
          </div>
          {/* experience container */}
          
        </div>

        {/* svg container */}
        <div className="hidden  lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 ">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
