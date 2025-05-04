import React, { useLayoutEffect, useRef } from 'react'
import chronixImg from "../assets/projectsImg/chronix.svg";
import resuflexImg from "../assets/projectsImg/resuflex.svg";
import rabbitImg from "../assets/projectsImg/rabbit.svg";
import tripImg from "../assets/projectsImg/trip.svg";
import {motion , useScroll , useTransform , useInView} from "framer-motion";


const MyProjects = () => {

  const prj1Ref = useRef(null);
  const prj2Ref = useRef(null);
  const prj3Ref = useRef(null);
  const prj4Ref = useRef(null);

  useLayoutEffect(() => {
    


    
  },[])
    const { scrollYProgress: prj2Scroll } = useScroll({ target: prj2Ref, offset: ["start 75%", "start start"] });
    const prj1Scale = useTransform(prj2Scroll, [0, 1], [1,.8]);

    const { scrollYProgress: prj3Scroll } = useScroll({ target: prj3Ref, offset: ["start 75%", "start start"] });
    const prj2Scale = useTransform(prj3Scroll, [0, 1], [1,.8]);

    const { scrollYProgress: prj4Scroll } = useScroll({ target: prj4Ref, offset: ["start 75%", "start start"] });
    const prj3Scale = useTransform(prj4Scroll, [0, 1], [1,.8]);

    const { scrollYProgress: prj4ScrollBottom } = useScroll({ target: prj4Ref, offset: ["end 80%", "end center"] });
    const prj4Scale = useTransform(prj4ScrollBottom, [0, 1], [1,.8]);

    const prj1InView = useInView(prj1Ref, { margin: "0px 0px -50% 0px", once: false });
    const prj2InView = useInView(prj2Ref, { margin: "0px 0px -75% 0px", once: false });
    const prj3InView = useInView(prj3Ref, { margin: "0px 0px -75% 0px", once: false });
    const prj4InView = useInView(prj4Ref, { margin: "0px 0px -75% 0px", once: false });


    const projects = [
        {
          id: 1,
          title: "ResuFlex – AI-Powered Resume Builder",
          name: "ResuFlex",
          techStack: ["Next.js", "Tailwind CSS", "Gemini API", "GSAP"],
          description:
            "A smart resume builder powered by Gemini API that lets users generate, customize, and download resumes in PDF format. It combines beautiful UI with intelligent content generation to create a seamless experience.",
          highlights: [
            "Dynamic resume generation using Gemini API",
            "Customizable templates with Tailwind CSS",
            "Smooth animations with GSAP",
            "Clean download functionality (PDF)",
          ],
          image: resuflexImg, 
        },
        {
          id: 2,
          title: "AI Trip Planner – Personalized Itinerary Generator",
          name: "AI Trip Planner",
          techStack: ["MERN Stack", "GSAP", "Framer Motion", "Gemini API"],
          description:
            "Built a full-stack travel assistant that delivers AI-powered itineraries based on user preferences. Real-time travel data is stored in MongoDB while UI interactions are powered by GSAP and Framer Motion for a modern experience.",
          highlights: [
            "Personalized trips via Gemini API",
            "User preference capture and MongoDB storage",
            "Animations using GSAP and Framer Motion",
            "Built with React.js and Express backend",
          ],
          image: tripImg,
        },
        {
          id: 3,
          title: "Rabbit – Full-Stack E-Commerce Site",
          name: "Rabbit E-Commerce Website",
          techStack: ["MERN Stack", "Tailwind CSS", "Mongoose", "PayPal API"],
          description:
            "A feature-rich e-commerce platform with user authentication, product management, and PayPal integration. Includes a fully functional admin panel and smooth UI built using Tailwind CSS.",
          highlights: [
            "Secure login system and admin panel",
            "Shopping cart and real payment integration",
            "Mongoose schema validation",
            "Built with React + Node.js",
          ],
          image: {rabbitImg},
        },
        {
            id: 4,
            title: "Chronix – Premium Luxury Watch Experience",
            name: "Chronix",
            techStack: ["MERN Stack", "Framer Motion", "GSAP"],
            description:
              "Chronix is a visually stunning, premium watch showcase website built with MERN stack. Designed to deliver an immersive experience, it features high-end animations using GSAP and Framer Motion, mimicking the elegance of luxury brands.",
            highlights: [
              "Elegant scroll-based animations with GSAP",
              "Framer Motion used for fluid transitions and effects",
              "Showcases high-quality watch imagery and design",
              "Fully responsive and performance-optimized",
            ],
            image: {chronixImg}, 
          }
          
      ];
      

      const imageVariantsToLeft = {
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 15 } }
      };

      const imageVariantsToRight = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 15 } }
      };
      


    return (
    <section className="h-[400vh] bg-[#5C5C5C] text-white relative flex gap-0 flex-col">

        <h2 style={{ fontFamily: "Big Shoulders , sans-serif" }}
        className="text-[6rem] w-full relative text-white pt-10 top-0 left-0 font-bold self-start tracking-wider text-center z-[0]">Projects</h2>


        {/* prj 1 */}
        <motion.section style={{scale : prj1Scale}} ref={prj1Ref} className="w-full h-[75vh] sticky top-0 left-0 flex items-center justify-center px-8 z-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Big Shoulders, sans-serif' }}>
                ResuFlex – AI-Powered Resume Builder
            </h2>
            <p className="text-lg text-white mb-6 leading-relaxed" style={{ fontFamily: 'Lexend, sans-serif' }}>
                A smart resume builder powered by Gemini API that lets users generate, customize, and download resumes in PDF format.
                It combines beautiful UI with intelligent content generation to create a seamless experience.
            </p>

            <ul className="list-disc pl-5 text-white space-y-2 text-base">
                <li>Dynamic resume generation using Gemini API</li>
                <li>Customizable templates with Tailwind CSS</li>
                <li>Smooth interface built with Next.js</li>
                <li>Download resumes in PDF format</li>
            </ul>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
            <motion.img
              variants={imageVariantsToLeft}
              initial="hidden"
              animate={prj1InView ? "visible" : "hidden"}
              src={projects[0].image}
              alt="ResuFlex Project Screenshot"
              className="object-cover"
            />

            </div>
        </div>
        </motion.section>


        {/* prj 2 */}
        <motion.section style={{scale : prj2Scale}} ref={prj2Ref} className="w-full h-screen sticky top-0 left-0 bg-[#4b4a4a] flex items-center justify-center px-8 z-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Image Section */}
            <div className="w-full md:w-1/2">
            <motion.img
              variants={imageVariantsToRight}
              initial="hidden"
              animate={prj2InView ? "visible" : "hidden"}
              src={tripImg}
              alt="ResuFlex Project Screenshot"
              className="object-cover"
            />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Big Shoulders, sans-serif' }}>
            AI Trip Planner – Personalized Itinerary Generator
            </h2>
            <p className="text-lg text-white mb-6 leading-relaxed" style={{ fontFamily: 'Lexend, sans-serif' }}>
            Built a full-stack travel assistant that delivers AI-powered itineraries based on user preferences. Real-time travel data is stored in MongoDB while UI interactions are powered by GSAP and Framer Motion for a modern experience.
            </p>

            <ul className="list-disc pl-5 text-white space-y-2 text-base">
                <li>Personalized trips via Gemini API</li>
                <li>User preference capture and MongoDB storage</li>
                <li>Animations using GSAP and Framer Motion</li>
                <li>Built with React.js and Express backend</li>
            </ul>
            </div>            
        </div>
        </motion.section>


        {/* prj 3 */}
        <motion.section style={{scale : prj3Scale}} ref={prj3Ref} className="w-full h-screen sticky top-0 left-0 bg-[#5C5C5C] flex items-center justify-center px-8 z-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Big Shoulders, sans-serif' }}>
            Rabbit – Full-Stack E-Commerce Site
            </h2>
            <p className="text-lg text-white mb-6 leading-relaxed" style={{ fontFamily: 'Lexend, sans-serif' }}>
            A feature-rich e-commerce platform with user authentication, product management, and PayPal integration. Includes a fully functional admin panel and smooth UI built using Tailwind CSS.
            </p>

            <ul className="list-disc pl-5 text-white space-y-2 text-base">
                <li>Secure login system and admin panel</li>
                <li>Shopping cart and real payment integration</li>
                <li>Mongoose schema validation</li>
                <li>Built with React + Node.js</li>
            </ul>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
            <motion.img
              variants={imageVariantsToLeft}
              initial="hidden"
              animate={prj3InView ? "visible" : "hidden"}
              src={rabbitImg}
              alt="ResuFlex Project Screenshot"
              className="object-cover"
            />
            </div>
        </div>
        </motion.section>

          
          {/* prj 4 */}
  
        <motion.section style={{scale : prj4Scale}} ref={prj4Ref} className="w-full h-screen sticky top-0 left-0 bg-[#4a4a4a] flex items-center justify-center px-8 z-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Image Section */}
            <div className="w-full md:w-1/2">
            <motion.img
              variants={imageVariantsToRight}
              initial="hidden"
              animate={prj4InView ? "visible" : "hidden"}
              src={chronixImg}
              alt="ResuFlex Project Screenshot"
              className="object-cover"
            />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Big Shoulders, sans-serif' }}>
            Chronix – Premium Luxury Watch
            </h2>
            <p className="text-lg text-white mb-6 leading-relaxed" style={{ fontFamily: 'Lexend, sans-serif' }}>
            Chronix is a visually stunning, premium watch showcase website built with MERN stack. Designed to deliver an immersive experience, it features high-end animations using GSAP and Framer Motion, mimicking the elegance of luxury brands.
            </p>

            <ul className="list-disc pl-5 text-white space-y-2 text-base">
                <li>Elegant scroll-based animations with GSAP</li>
                <li>Framer Motion used for fluid transitions and effects</li>
                <li>Showcases high-quality watch imagery and design</li>
                <li>Fully responsive and performance-optimized</li>
            </ul>
            </div>            
        </div>
        </motion.section>

    </section>
  )
}

export default MyProjects