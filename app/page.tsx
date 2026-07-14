"use client";

import { Projects } from "./components/Projects/Projects";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiPython,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaServer } from "react-icons/fa";
import { useEffect } from "react";

export default function Home() {
  const projects = [
    {
      id: 1,
      image: "images/emandamento.png",
      title: "Projeto 1",
      description: "Descrição do projeto 1",
    },
    {
      id: 2,
      image: "images/emandamento.png",
      title: "Projeto 2",
      description: "Descrição do projeto 2",
    },
    {
      id: 3,
      image: "images/emandamento.png",
      title: "Projeto 3",
      description: "Descrição do projeto 3",
    },
    {
      id: 4,
      image: "images/emandamento.png",
      title: "Projeto 4",
      description: "Descrição do projeto 4",
    },
    {
      id: 5,
      image: "images/emandamento.png",
      title: "Projeto 5",
      description: "Descrição do projeto 5",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.25 },
    );
    document
      .querySelectorAll<HTMLElement>(".textAnimation")
      .forEach((el) => observer.observe(el));

    document
      .querySelectorAll<HTMLElement>(".imageAnimation")
      .forEach((el) => observer.observe(el));

    document
      .querySelectorAll<HTMLElement>(".titleProjectsAnimations")
      .forEach((el) => observer.observe(el));

    document
      .querySelectorAll<HTMLElement>(".projectsAnimation")
      .forEach((el) => observer.observe(el));

    document
      .querySelectorAll<HTMLElement>(".skillsAnimation")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <main className=" pt-31 sm:pt-35">
      <section id="headerSection" className="pt-35 h-[81vh] sm:px-21 px-5 ">
        <h1 className="sm:text-9xl text-5xl font-bold">
          <span className="hidden typewriterDesktop sm:block">Hello, I'm Davi Dias!</span>

          <span className="block sm:hidden">
            <span className="typewriterMobile1 block">Hello, I'm</span>
            <span className="typewriterMobile2 block">Davi Dias!</span>
          </span>
        </h1>

        <div className="flex gap-4 pt-3 sm:p-4">
          <button className="cursor-pointer bg-[#091F3A] text-[#EAF4FF] rounded-md px-3 py-1 sm:px-6 sm:py-2">
            Baixar CV
          </button>
          <a href="#footer" >
            <button className="cursor-pointer bg-[#EAF4FF] text-[#091F3A] rounded-md px-3 py-1 sm:px-6 sm:py-2">
              Contacts
            </button>
          </a>
        </div>
      </section>

      <section
        className="flex flex-col gap-5 max-sm:items-center sm:justify-evenly sm:flex-row h-auto sm:h-screen w-full bg-[#060f1e] py-20 sm:px-10 sm:py-50"
        id="aboutSection"
      >
        <div className="flex imageAnimation w-[230px] h-[210px] sm:w-[461px] sm:h-[421px] rounded-4xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/images/davi.jpeg"
            alt="Davi Dias"
          />
        </div>
        <div className="textAnimation flex sm:text-left gap-4 flex-col w-[75%] sm:w-[50%]">
          <h2 className=" text-center sm:text-left text-2xl sm:text-5xl font-bold">
            Minha trajetória no mundo da tecnologia
          </h2>
          <p className="sm:text-lg text-gray-400 text-justify">
            Estudante de Sistemas de Informação dedicado ao desenvolvimento web
            Full Stack. Profissional em contínuo aperfeiçoamento técnico, focado
            na melhoria contínua de habilidades e na aplicação de boas práticas
            para a entrega de soluções eficientes de software.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="h-auto w-screen bg-[#060f1e] sm:px-10 px-5 py-20 sm:py-50"
      >
        {/* titleProjectsAnimations */}
        <h2 className=" text-[2em] sm:text-[3.5em] font-bold">
          Meus Projetos
        </h2>
        <Projects projects={projects} />
      </section>

      <section
        id="skillsSection"
        className="flex sm:flex-row flex-col gap-y-10 sm:gap-x-5 justify-center h-auto sm:h-screen w-screen bg-[#060f1e] px-10 py-20"
      >
        <div className="skillsAnimation bg-[#0a1629] h-auto sm:h-90 w-auto sm:w-120 rounded-[8px] overflow-hidden outline-[#1d2e3f] outline-2">
          <h2 className="text-3xl font-bold bg-[#091F3A] px-8 py-4">
            Hard Skills
          </h2>
          <div>
            <ul id="hardSkills">
              <li className="hover:text-yellow-400">
                <abbr title="JavaScript">
                  <SiJavascript />
                </abbr>
              </li>
              <li className="hover:text-blue-400">
                <abbr title="TypeScript">
                  <SiTypescript />
                </abbr>
              </li>
              <li className="hover:text-blue-400">
                <abbr title="React">
                  <SiReact />
                </abbr>
              </li>
              <li className="hover:text-green-400">
                <abbr title="Node.Js">
                  <FaNodeJs />
                </abbr>
              </li>
              <li className="hover:text-orange-400">
                <abbr title="GIT">
                  <SiGit />
                </abbr>
              </li>
              <li className="hover:text-orange-400">
                <abbr title="HTML">
                  <SiHtml5 />
                </abbr>
              </li>
              <li className="hover:text-purple-400">
                <abbr title="CSS">
                  <SiCss />
                </abbr>
              </li>
              <li className="hover:text-blue-400">
                <abbr title="PostgreSQL">
                  <SiPostgresql />
                </abbr>
              </li>
              <li className="hover:text-yellow-400">
                <abbr title="Python">
                  <SiPython />
                </abbr>
              </li>
              <li className="hover:text-black">
                <abbr title="Next.js">
                  <SiNextdotjs />
                </abbr>
              </li>
              <li className="hover:text-gray-400">
                <abbr title="Api Rest">
                  <FaServer />
                </abbr>
              </li>
              <li className="hover:text-blue-400">
                <abbr title="Tailwind CSS">
                  <SiTailwindcss />
                </abbr>
              </li>
            </ul>
          </div>
        </div>
        <div className="skillsAnimation bg-[#0a1629] h-90 w-auto sm:w-120 rounded-[8px] overflow-hidden outline-[#1d2e3f] outline-2">
          <h2 className="text-3xl font-bold bg-[#091F3A] px-8 py-4">
            Soft Skills
          </h2>
          <div className="text-[0.75em] sm:text-[1em]">
            <ul>
              <li>Aprendizagem contínua</li>
              <li>Criatividade</li>
              <li>Pensamento crítico</li>
              <li>Comunicação</li>
              <li>Trabalho em equipe</li>
              <li>Organização</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
