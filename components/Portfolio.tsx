"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Image from "next/image";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-gray-400 hover:text-orange-500 transition-colors px-4 py-2"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    {children}
  </a>
);

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  link,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-zinc-900 border border-orange-500 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
  >
    <div className="relative h-48">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6 ">
      <h3 className="text-xl font-bold text-orange-500 mb-2">{title}</h3>
      <h2 className="text-sm font-bold text-blue-400 mb-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {link}
        </a>
      </h2>

      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-zinc-800 text-orange-500 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const animateCount = (
      setState: React.Dispatch<React.SetStateAction<number>>,
      end: number
    ) => {
      let start = 0;
      const duration = 2000; // Animation duration in milliseconds
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setState(end);
          clearInterval(timer);
        } else {
          setState(Math.ceil(start));
        }
      }, 10);
    };

    animateCount(setYears, 2);
    animateCount(setProjects, 25);
    animateCount(setClients, 15);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-[0%] z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="-ml-[8%]">
              <a href="#" className="">
                <img
                  src="/portfolio/logo1.png"
                  alt="Logo"
                  className="w-[50%] h-[30%]"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-zinc-900 py-4"
          >
            <div className="flex flex-col items-center space-y-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-[60%] lg:w-72 md:w-80 bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
              {/* Orange Background */}
              <div className="relative w-64 h-80 md:w-96 md:h-96 bg-orange-600 rounded-2xl overflow-hidden mx-auto flex justify-center items-center">
                <Image
                  src="/portfolio/vihanga1.png"
                  alt="Vihanga Fernando"
                  width={384}
                  height={500}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                SOFTWARE
                <br />
                ENGINEER
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg mb-8"
              >
                Passionate about creating intuitive and engaging user
                experiences. Specialize in transforming ideas into beautifully
                crafted products.
              </motion.p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-orange-500 ">
                    +{years}
                  </h2>
                  <p className="text-lg leading-tight text-gray-400">
                    Years of <br /> Experience
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-orange-500 ">
                    +{projects}
                  </h2>
                  <p className="text-lg leading-tight text-gray-400">
                    Projects <br /> Completed
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-orange-500 ">
                    +{clients}
                  </h2>
                  <p className="text-lg leading-tight text-gray-400">
                    Satisfied Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8 text-orange-500"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-lg  leading-[210%]"
          >
            I am an experienced Software Engineer with a goal-driven mindset and
            a strong foundation in the latest technologies. Currently pursuing a
            Bachelor’s degree in Information Technology at the University of
            Colombo, I have gained hands-on experience working with a variety of
            industry-specific software solutions. My expertise spans across
            multiple domains, allowing me to develop innovative and efficient
            solutions that meet industry demands. With a passion for continuous
            learning and problem-solving, I strive to create impactful software
            that drives business success.
          </motion.p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8 text-orange-500"
          >
            Experience
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-zinc-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">
                Intern Software Engineer
              </h3>
              <p className="text-orange-500 mb-4">
                Optimize Solutions | 2024 - 2025
              </p>
              <p className="text-gray-400">
                Developed and maintained multiple client-facing applications,
                focusing on performance optimization and user experience.
              </p>
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-zinc-900 p-6 rounded-lg mt-[3%]"
            >
              <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
              <p className="text-orange-500 mb-4">Freelancer</p>
              <p className="text-gray-400">
                I have developed web applications using React, Next.js, Node.js,
                .NET, and Java for global clients, delivering scalable,
                high-performance solutions with clean and maintainable code.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8 text-orange-500"
          >
            Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                Frontend Development
              </h3>
              <div className="space-y-4">
                {[
                  { name: "React", level: 90 },
                  { name: "TypeScript", level: 85 },
                  { name: "Next.js", level: 80 },
                  { name: "JavaScript", level: 85 },
                  { name: "Tailwind CSS", level: 90 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">{skill.name}</span>
                      <span className="text-orange-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-orange-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                Backend Development
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Node.js", level: 85 },
                  { name: ".NET", level: 80 },
                  { name: "Java", level: 90 },
                  { name: "SQL", level: 85 },
                  { name: "Express.js", level: 80 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">{skill.name}</span>
                      <span className="text-orange-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-orange-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-zinc-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Git", icon: "🔄" },
                  { name: "Docker", icon: "🐳" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Azure", icon: "☁️" },
                  { name: "CI/CD", icon: "⚡" },
                  { name: "Agile", icon: "🔄" },
                  { name: "REST APIs", icon: "🔌" },
                  { name: "GraphQL", icon: "📊" },
                ].map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-zinc-800 p-3 rounded-lg flex items-center gap-2"
                  >
                    <span>{tool.icon}</span>
                    <span className="text-gray-400">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-zinc-900 p-6 rounded-lg md:col-span-2 lg:col-span-3"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Quick Learner",
                  "Responsive Design",
                  "Performance Optimization",
                  "SEO",
                  "Web Security",
                  "Testing",
                  "Documentation",
                  "Team Leadership",
                  "Problem Solving",
                  "Communication",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="bg-zinc-800 text-gray-400 px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-zinc-900 items-stretch">
        <div className="container mx-auto max-w-6xl items-stretch">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8 text-orange-500"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce Platform"
              description=" I designed and developed a full-featured e-commerce website for a company . utilizing REST APIs extensively for seamless data management and integration. The platform included secure user authentication, an intuitive shopping interface, and an admin panel for efficient inventory, order, and user management. Key features such as product browsing, a dynamic shopping cart, and a smooth checkout process ensured an optimized user experience."
              image="/portfolio/e-commerce.png?height=300&width=400"
              technologies={["React.js", "Node.js", "My SQL", "REST API"]}
              link="https://grocerysdirect.com/"
            />
            <ProjectCard
              title="Restaurant Management Platform"
              description="This Restaurant Management Web Application with robust user and admin authentication, implementing logical role-based access where admins have full control. Using REST APIs extensively, the platform enables event catering bookings, food ordering, and efficient operation management, ensuring flexibility and a seamless user experience.
"
              image="/portfolio/restaurent.png?height=300&width=400"
              technologies={[
                "React.js",
                "Node.js",
                "My SQL",
                "REST API",
                "Express.js",
              ]}
              link="https://seaburry.com/"
            />
            <ProjectCard
              title="Visa Agency Management Site"
              description="During my internship, I developed a dynamic visa consulting service website using Next.js, integrating REST APIs for seamless functionality. The platform allows users to submit inquiries, book exams, and create personalized plans effortlessly. Designed with smooth animations for a modern look, it also leverages server-side rendering to ensure optimal performance and user experience."
              image="/portfolio/image.png?height=300&width=400"
              technologies={["Next.js", "TypeScript", "Framer Motion"]}
              link=""
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8 text-orange-500"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-2">
              Bachelor of Information Technology
            </h3>
            <p className="text-orange-500 mb-2">
              University of Colombo School of Computing
            </p>
            <p className="text-gray-400">Expected Graduation: 2026</p>
          </motion.div>
        </div>
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 p-6 rounded-lg mt-[3%]"
          >
            <h3 className="text-xl font-bold mb-2">
              Diploma in Information Technology
            </h3>
            <p className="text-orange-500 mb-2">
              University of Colombo School of Computing
            </p>
            <p className="text-gray-400">Graduation: 2024</p>
          </motion.div>
        </div>
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 p-6 rounded-lg mt-[3%]"
          >
            <h3 className="text-xl font-bold mb-2">
              Foundation in Information Technology
            </h3>
            <p className="text-orange-500 mb-2">
              University of Colombo School of Computing
            </p>
            <p className="text-gray-400">Graduation: 2022</p>
          </motion.div>
        </div>
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 p-6 rounded-lg mt-[3%]"
          >
            <h3 className="text-xl font-bold mb-2">Diploma in Python</h3>
            <p className="text-orange-500 mb-2">University of Moratuwa</p>
            <p className="text-gray-400">Graduation: 2023</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8 text-orange-500"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center space-x-8"
          >
            <a
              href="https://github.com/vinuxf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/vihanga-fernando-478498276/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:vihangafernando729@gmail.com"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Mail size={32} />
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-4 text-center text-gray-400">
        <p>&copy; 2023 Vihanga Fernando. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
