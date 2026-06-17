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
      image: "images/teste.png",
      title: "Projeto 1",
      description: "Descrição do projeto 1",
    },
    {
      id: 2,
      image: "images/teste.png",
      title: "Projeto 2",
      description: "Descrição do projeto 2",
    },
    {
      id: 3,
      image: "images/teste.png",
      title: "Projeto 3",
      description: "Descrição do projeto 3",
    },
    {
      id: 4,
      image: "images/teste.png",
      title: "Projeto 4",
      description: "Descrição do projeto 4",
    },
    {
      id: 5,
      image: "images/teste.png",
      title: "Projeto 5",
      description: "Descrição do projeto 5",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visibleText");
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
    <main className="pt-35">
      <section id="headerSection" className="pt-35 h-[81vh] px-21">
        <h1 className="typewriter text-9xl font-bold">Hello, I'm Davi Dias!</h1>

        <div className="flex gap-4 p-4">
          <button className="bg-[#091F3A] text-[#EAF4FF] rounded-md px-6 py-2">
            Baixar CV
          </button>
          <button className="bg-[#EAF4FF] text-[#091F3A] rounded-md px-6 py-2">
            Contacts
          </button>
        </div>
      </section>

      <section
        className="flex justify-evenly h-screen w-screen bg-[#060f1e] px-10 py-50"
        id="aboutSection"
      >
        <div className="imageAnimation w-[461px] h-[421px] rounded-4xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/images/davi.jpeg"
            alt="Davi Dias"
          />
        </div>
        <div className="textAnimation flex gap-4 flex-col w-[50%]">
          <h2 className="text-5xl font-bold">
            Minha trajetória no mundo da tecnologia
          </h2>
          <p className="text-lg text-gray-400 text-justify">
            Estudante de Sistemas de Informação dedicado ao desenvolvimento web
            Full Stack. Profissional em contínuo aperfeiçoamento técnico, focado
            na melhoria contínua de habilidades e na aplicação de boas práticas
            para a entrega de soluções eficientes de software.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="h-[130vh] w-screen bg-[#060f1e] px-10 py-50 "
      >
        <h2 className="titleProjectsAnimations text-[3.5em] font-bold pl-5">
          Meus Projetos
        </h2>
        <Projects projects={projects} />
      </section>

      <section
        id="skillsSection"
        className="flex gap-x-5 justify-center h-screen w-screen bg-[#060f1e] px-10 py-20"
      >
        <div className="skillsAnimation bg-[#0a1629] h-90 w-120 rounded-[8px] overflow-hidden outline-[#1d2e3f] outline-2">
          <h2 className="text-3xl font-bold bg-[#091F3A] px-8 py-4">
            Hard Skills
          </h2>
          <div>
            <ul id="hardSkills">
              <li>
                <abbr title="JavaScript">
                  <SiJavascript className="hover:text-yellow-400" />
                </abbr>
              </li>
              <li>
                <abbr title="TypeScript">
                  <SiTypescript className="hover:text-blue-400"/>
                </abbr>
              </li>
              <li>
                <abbr title="React">
                  <SiReact className="hover:text-blue-400"/>
                </abbr>
              </li>
              <li>
                <abbr title="Node.Js">
                  <FaNodeJs className="hover:text-green-400"/>
                </abbr>
              </li>
              <li>
                <abbr title="GIT">
                  <SiGit className="hover:text-orange-400"/>
                </abbr>
              </li>
              <li>
                <abbr title="HTML">
                  <SiHtml5 className="hover:text-orange-400"/>
                </abbr>
              </li>
              <li>
                <abbr title="CSS">
                  <SiCss className="hover:text-purple-400"/>
                </abbr>
              </li>
              <li>
                <abbr title="PostgreSQL">
                  <SiPostgresql className="hover:text-blue-400"/>
                </abbr>
              </li>
              <li>
                <abbr title="Python">
                  <SiPython className="hover:text-yellow-400"/>
                </abbr>
              </li>
              <li>
                <abbr title="Next.js">
                  <SiNextdotjs className="hover:text-black"/>
                </abbr>
              </li>
              <li>
                <abbr title="Api Rest">
                  <FaServer className="hover:text-gray-400"/>
                </abbr>
              </li>
              <li>
                <abbr title="Tailwind CSS">
                  <SiTailwindcss className="hover:text-blue-400"/>
                </abbr>
              </li>
            </ul>
          </div>
        </div>
        <div className="skillsAnimation bg-[#0a1629] h-90 w-120 rounded-[8px] overflow-hidden outline-[#1d2e3f] outline-2">
          <h2 className="text-3xl font-bold bg-[#091F3A] px-8 py-4">
            Soft Skills
          </h2>
          <div>
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
