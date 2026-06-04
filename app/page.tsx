"user client";

import { Projects } from "./components/Projects/Projects";

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

  return (
    <main className="pt-35">
      <section id="headerSection" className="h-[60vh] px-21">
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
        className="flex justify-evenly h-screen w-screen bg-[#060f1e] px-10 py-60"
        id="aboutSection"
      >
        <div className="w-[461px] h-[421px] rounded-4xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/images/davi.jpeg"
            alt="Davi Dias"
          />
        </div>
        <div className=" flex gap-4 flex-col w-[50%]">
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
        className="h-[150vh] w-screen bg-[#060f1e] px-10 py-60 "
      >
        <h2 className="text-5xl font-bold">Meus Projetos</h2>
        <Projects projects={projects} />
      </section>

      <section id="skills" className=" flex gap-x-5 justify-center h-screen w-screen bg-[#060f1e] px-10 py-20" >
        <div className="bg-[#0a1629] h-90 w-120 rounded-[8px] overflow-hidden outline-[#1d2e3f] outline-2">
          <h2 className="text-3xl font-bold bg-[#091F3A] px-8 py-4">Hard Skills</h2>
        </div>
        <div className="bg-[#0a1629] h-90 w-120 rounded-[8px] overflow-hidden outline-[#1d2e3f] outline-2">
          <h2 className="text-3xl font-bold bg-[#091F3A] px-8 py-4">Soft Skills</h2>
        </div>
      </section>
    </main>
  );
}
2