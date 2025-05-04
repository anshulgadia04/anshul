import React, { useState, useEffect, useRef } from "react";
import HeroBg from "../assets/HeroBg.svg";
import MyImg from "../assets/MyImage.svg";
import WhatIOffer from "./WhatIOffer";
import Marquee from "./Marquee";
import reactSvg from "../assets/skills/react.svg";
import nextSvg from "../assets/skills/next.svg";
import gsapSvg from "../assets/skills/gsap.svg";
import framerSvg from "../assets/skills/framer-motion.svg";
import nodejsSvg from "../assets/skills/nodejs.svg";
import threejsSvg from "../assets/skills/threejs.svg";
import cppSvg from "../assets/skills/cpp.svg";
import pythonSvg from "../assets/skills/python.svg";
import jsSvg from "../assets/skills/js.svg";
import tsSvg from "../assets/skills/ts.svg";
import javaSvg from "../assets/skills/java.svg";
import tailwindSvg from "../assets/skills/tailwind.svg";
import mongoSvg from "../assets/skills/mongo.svg";
import mysqlSvg from "../assets/skills/mysql.svg";
import gitSvg from "../assets/skills/git.svg";
import githubSvg from "../assets/skills/github.svg";
import vscodeSvg from "../assets/skills/vscode.svg";
import figmaSvg from "../assets/skills/figma.svg";
import MagneticEffect from "./MagneticEffect";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import TrueFocus from "./TrueFocus";
import MyProjects from "./MyProjects";
import Contact from "./Contact";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const mouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const [reverse, setReverse] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const numbersRef = useRef(null);
  const isInView = useInView(numbersRef, { once: false });

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setReverse(false);
      } else {
        // Scrolling up
        setReverse(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const services = [
    {
      title: "UI & UX DESIGN",
      content:
        "I design clean, modern, and intuitive interfaces that make apps and websites visually appealing and easy to use. I also craft user journeys and flows that deliver a seamless and satisfying experience, focusing on solving real-world user problems.",
    },
    {
      title: "INTERACTION DESIGN",
      content:
        "I create dynamic, interactive experiences that engage users through animations, transitions, and intuitive behaviors.",
    },
    {
      title: "VISUAL DESIGN",
      content:
        "I bring ideas to life with typography, colors, imagery, and layouts that create strong emotional connections and brand identity.",
    },
    {
      title: "Frontend Development",
      content:
        "I build responsive, high-performance web applications using modern technologies like React.js, Next.js, and Tailwind CSS.",
    },
  ];

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div>
      <nav className="relative w-full bg-white overflow-hidden">
        <div className="relative flex flex-row flex-nowrap justify-center items-center mx-auto px-10 py-8">
          <ul className="flex flex-row gap-8 text-white mx-auto text-sm md:text-[1.125rem]">
            <li
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-black cursor-pointer font-semibold"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection(aboutRef)}
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-[#7E7E7E] cursor-pointer font-light"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection(servicesRef)}
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-[#7E7E7E] cursor-pointer font-light"
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection(projectRef)}
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-[#7E7E7E] cursor-pointer font-light"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection(skillsRef)}
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-[#7E7E7E] cursor-pointer font-light"
            >
              Skills
            </li>
            <li
              onClick={() => scrollToSection(contactRef)}
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-[#7E7E7E] cursor-pointer font-light"
            >
              Contact
            </li>
          </ul>
        </div>
        {/* <img draggable="false" src={Logo} alt="" className='absolute top-5 left-10 w-12 h-12' /> */}
      </nav>

      <main ref={homeRef} className="h-screen w-full relative overflow-hidden bg-white flex justify-center items-center">
        {/* Background Image in center */}
        <img
          className="absolute z-0 w-[40vw] h-[40vw] object-contain"
          src={HeroBg}
          alt="Center Image"
        />

        {/* Motion blending circle on top */}
        <motion.div
          style={{ mixBlendMode: "difference" }}
          animate={{ x: position.x - 75, y: position.y - 150, scale }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 50,
            mass: 0.5,
          }}
          className="w-[150px] h-[150px] rounded-full bg-white absolute top-0 left-0 z-20 pointer-events-none"
        />

        <div
          onMouseEnter={() => setScale(2)}
          onMouseLeave={() => setScale(1)}
          className="text-[6rem] text-black z-10 relative text-center hover:cursor-default"
        >
          <p className="audiowide-regular p-0 -mb-12 text-[4.5rem]">
            Anshul Gadia
          </p>
          <h1
            className="p-0 text-[7rem] -mb-10"
            style={{ fontFamily: "Mechsuit" }}
          >
            Full Stack
          </h1>
          <h2
            className="text-transparent p-0 text-[7rem]"
            style={{ fontFamily: "hypik", WebkitTextStroke: "1px black" }}
          >
            Developer
          </h2>
        </div>
      </main>

      <section ref={numbersRef} className="w-full py-10">
        <div className="w-[75%] flex flex-row flex-wrap justify-between items-center mx-auto">
          <div className="flex flex-col justify-center items-center">
            <p
              style={{
                fontFamily: "Big Shoulders , sans-serif",
                fontVariantNumeric: "tabular-nums",
              }}
              className="text-[7.5rem] font-bold w-[4ch]"
            >
              {isInView ? <CountUp end={5} duration={3} suffix="+" /> : null}
            </p>
            <p
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-[#5C5C5C] -mt-5 font-semibold text-[1.125rem]"
            >
              Projects Completed
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p
              style={{
                fontFamily: "Big Shoulders , sans-serif",
                fontVariantNumeric: "tabular-nums",
              }}
              className="text-[7.5rem] font-bold w-[4ch]"
            >
              {isInView ? <CountUp end={10} duration={3} suffix="+" /> : null}
            </p>
            <p
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-[#5C5C5C] -mt-5 font-semibold text-[1.125rem]"
            >
              Skills Acquired
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p
              style={{
                fontFamily: "Big Shoulders , sans-serif",
                fontVariantNumeric: "tabular-nums",
              }}
              className="text-[7.5rem] font-bold w-[4ch]"
            >
              {isInView ? <CountUp end={3} duration={3} suffix="+" /> : null}
            </p>
            <p
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-[#5C5C5C] -mt-5 font-semibold text-[1.125rem]"
            >
              Competitions Participated
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p
              style={{
                fontFamily: "Big Shoulders , sans-serif",
                fontVariantNumeric: "tabular-nums",
              }}
              className="text-[7.5rem] font-bold w-[4ch]"
            >
              {isInView ? <CountUp end={500} duration={3} suffix="+" /> : null}
            </p>
            <p
              style={{ fontFamily: "Lexend, sans-serif" }}
              className="text-[#5C5C5C] -mt-5 font-semibold text-[1.125rem]"
            >
              Hours of Learning
            </p>
          </div>
        </div>
      </section>

      {/* about me */}
      <section className="w-full flex flex-row justify-center items-center p-20">
        <div className="w-1/2 pt-20">
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            src={MyImg}
            alt="MyImage"
            className="w-[85%]"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
          <motion.h2
            style={{ fontFamily: "Big Shoulders , sans-serif" }}
            ref={aboutRef}
            custom={0}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[7rem] font-bold self-start tracking-wide"
          >
            <TrueFocus
              sentence="About Me"
              blurAmount={7}
              borderColor="#5C5C5C"
              pauseBetweenAnimations={2}
              animationDuration={1}
            />
          </motion.h2>
          <motion.p
            custom={1}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            style={{ fontFamily: "Lexend, sans-serif" }}
            className="text-[#969696] text-xl tracking-tight mb-5"
          >
            I’m Anshul Gadia, a web developer and AI enthusiast on a mission to
            build innovative, user-centric digital experiences. Currently
            pursuing a B.Tech in Computer Science at BML Munjal University, I
            specialize in creating cutting-edge web apps with Next.js, the MERN
            stack, and Tailwind CSS. My recent internship at CyberAegis IT
            Solutions had me designing a multilingual EduTech platform that
            transformed user experience, making learning more accessible and
            engaging.
          </motion.p>
          <motion.p
            custom={1}
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            style={{ fontFamily: "Lexend, sans-serif" }}
            className="text-[#969696] text-xl tracking-tight mb-16"
          >
            I’m not just about coding—I’m about creating smart solutions. From
            an AI-powered trip planner to a wardrobe recommendation system, I
            combine my love for AI with real-world applications that anticipate
            and adapt to user needs. With a strong foundation in JavaScript,
            Python, and a toolkit full of modern tools, I’m always ready to take
            on the next big challenge and make a lasting impact.
          </motion.p>
          <motion.button
            onClick={() => scrollToSection(contactRef)}
            style={{ fontFamily: "Lexend, sans-serif" }}
            className="w-full bg-[#5C5C5C] text-white py-3 hover:cursor-pointer hover:bg-[#4b4b4b]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "tween", stiffness: 100 }}
          >
            Contact Me
          </motion.button>
        </div>
      </section>

      {/* what i offer you */}
      <div ref={servicesRef}></div>
      <WhatIOffer services={services} />

      {/* my projects */}
      <span ref={projectRef} />
      <MyProjects />

      {/* <section className='relative bg-red-50 h-[120vh] w-full overflow-hidden'>
        <div className="absolute top-[0%] -left-[20%] w-[150%] rotate-[5deg] translate-y-[200%]">
          <Marquee/>
        </div>

        <div className="absolute top-[30%] -left-[20%] w-[150%] rotate-[5deg] translate-y-[200%]">
          <Marquee/>
        </div>

        <div className="absolute top-[60%] -left-[20%] w-[150%] rotate-[-5deg] translate-y-[200%]">
          <Marquee/>
        </div>

        <div className="absolute top-[20%] -left-[20%] w-[150%] rotate-[-15deg] translate-y-[200%]">
          <Marquee/>
        </div>

        <div className='w-full h-full flex flex-col justify-center items-center'> 
          <h1 style={{fontFamily : 'Big Shoulders , sans-serif'}} className="text-[8rem] font-extrabold uppercase tracking-wider outline-text text-center">
            THINGS I'M WORKING ON
          </h1>

          <h1 style={{fontFamily : 'Big Shoulders , sans-serif'}} className="text-[8rem] font-extrabold uppercase tracking-wider text-center text-[#5C5C5C]">
            THINGS I'M WORKING ON
          </h1>

          <h1 style={{fontFamily : 'Big Shoulders , sans-serif'}} className="text-[8rem] font-extrabold uppercase tracking-wider outline-text text-center">
            THINGS I'M WORKING ON
          </h1>
        </div>



        </section> */}

      <section className="relative h-[120vh] w-full overflow-hidden">
        <div className="absolute top-[0%] -left-[20%] w-[150%] rotate-[5deg] translate-y-[200%]">
          <Marquee reverse={reverse} />
        </div>

        <div className="absolute top-[30%] -left-[20%] w-[150%] rotate-[5deg] translate-y-[200%]">
          <Marquee reverse={reverse} />
        </div>

        <div className="absolute top-[60%] -left-[20%] w-[150%] rotate-[-5deg] translate-y-[200%]">
          <Marquee reverse={reverse} />
        </div>

        <div className="absolute top-[20%] -left-[20%] w-[150%] rotate-[-15deg] translate-y-[200%]">
          <Marquee reverse={reverse} />
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: "Big Shoulders, sans-serif" }}
            className="text-[8rem] font-extrabold uppercase tracking-wider outline-text text-center"
          >
            THINGS I'M WORKING ON
          </h1>

          <h1
            style={{ fontFamily: "Big Shoulders, sans-serif" }}
            className="text-[8rem] font-extrabold uppercase tracking-wider text-center text-[#5C5C5C]"
          >
            THINGS I'M WORKING ON
          </h1>

          <h1
            style={{ fontFamily: "Big Shoulders, sans-serif" }}
            className="text-[8rem] font-extrabold uppercase tracking-wider outline-text text-center"
          >
            THINGS I'M WORKING ON
          </h1>
        </div>
      </section>

      {/* skills section */}
      <section className="w-full flex flex-col justify-center items-center p-16">
        <h1
          ref={skillsRef}
          style={{ fontFamily: "Big Shoulders, sans-serif" }}
          className="text-[7rem] font-extrabold uppercase text-center"
        >
          Skills / Technologies I Use
        </h1>

        {/* row1 */}
        <div className="flex flex-col justify-center items-center w-full mt-10 p-5 mb-5">
          <div className="flex flex-row justify-center items-center flex-wrap gap-14">
            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2 cursor-default">
                <img width={50} height={50} src={reactSvg} />
                <p
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  className="text-3xl font-bold"
                >
                  React
                </p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={nextSvg}
                />
                <p className="text-3xl font-bold">Next</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={gsapSvg}
                />
                <p className="text-3xl font-bold">GSAP</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={framerSvg}
                />
                <p className="text-3xl font-bold">Framer Motion</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={nodejsSvg}
                />
                <p className="text-3xl font-bold">Nodejs</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={threejsSvg}
                />
                <p className="text-3xl font-bold">Threejs</p>
              </div>
            </MagneticEffect>
          </div>
        </div>

        {/* row2 */}
        <div className="flex flex-col justify-center items-center w-full p-5 mb-5">
          <div className="flex flex-row justify-center items-center flex-wrap gap-14">
            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={javaSvg}
                />
                <p className="text-3xl font-bold">Java</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={cppSvg}
                />
                <p className="text-3xl font-bold">C++</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={jsSvg}
                />
                <p className="text-3xl font-bold">JavaScript</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={tsSvg}
                />
                <p className="text-3xl font-bold">TypeScript</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={pythonSvg}
                />
                <p className="text-3xl font-bold">Python</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={tailwindSvg}
                />
                <p className="text-3xl font-bold">Tailwind</p>
              </div>
            </MagneticEffect>
          </div>
        </div>

        {/* row3 */}
        <div className="flex flex-col justify-center items-center w-full p-5">
          <div className="flex flex-row justify-center items-center flex-wrap gap-14">
            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={mongoSvg}
                />
                <p className="text-3xl font-bold">MongoDB</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={mysqlSvg}
                />
                <p className="text-3xl font-bold">MySQL</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={gitSvg}
                />
                <p className="text-3xl font-bold">Git</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={githubSvg}
                />
                <p className="text-3xl font-bold">GitHub</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={vscodeSvg}
                />
                <p className="text-3xl font-bold">VSCode</p>
              </div>
            </MagneticEffect>

            <MagneticEffect>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  style={{ fontFamily: "Big Shoulders, sans-serif" }}
                  width={50}
                  height={50}
                  src={figmaSvg}
                />
                <p className="text-3xl font-bold">Figma</p>
              </div>
            </MagneticEffect>
          </div>
        </div>
      </section>

      <span ref={contactRef} />
      <Contact />

      {/* footer */}
      <footer className="bg-[#5C5C5C] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
          {/* Top Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-20 text-sm font-light">
            <a onClick={() => scrollToSection(homeRef)} >Home</a>
            <a onClick={() => scrollToSection(aboutRef)} >About</a>
            <a onClick={() => scrollToSection(servicesRef)}>Services</a>
            <a onClick={() => scrollToSection(projectRef)}>Projects</a>
            <a onClick={() => scrollToSection(skillsRef)}>Skills</a>
          </nav>

          <div className="flex space-x-4 flex-wrap">
            <a href="https://www.instagram.com/jain___anshulll?igsh=MXB1cXI0MTZtMDZtNQ%3D%3D&utm_source=qr" target="_blank" className="bg-white/10 hover:bg-white/20 p-2 rounded-md hover:cursor-pointer">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="http://linkedin.com/in/anshulgadia04" target="_blank" className="bg-white/10 hover:bg-white/20 p-2 rounded-md hover:cursor-pointer">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://github.com/anshulgadia04" target="_blank" className="bg-white/10 hover:bg-white/20 p-2 rounded-md hover:cursor-pointer">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://leetcode.com/u/anshulgadia04/" target="_blank" className="bg-white/10 hover:bg-white/20 p-2 rounded-md hover:cursor-pointer">
              <SiLeetcode className="text-2xl" />
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="w-full border-t border-gray-500 pt-4 flex flex-wrap justify-between text-xs text-gray-300">
            <span>Design by Anshul Gadia</span>
            <span>© 2025 https://anshul-gadia.vercel.app/</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
