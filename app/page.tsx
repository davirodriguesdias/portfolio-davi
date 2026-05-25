"user client";

export default function Home() {
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
        <div className="flex gap-8">
          <ProjectCard
            src="/images/teste.png"
            alt="Projeto 1"
            value="Descrição breve do projeto, destacando as tecnologias utilizadas e os resultados alcançados."
            label="Projeto 1"
          />
          <ProjectCard
            src="/images/teste.png"
            alt="Projeto 1"
            value="Descrição breve do projeto, destacando as tecnologias utilizadas e os resultados alcançados."
            label="Projeto 1"
          />
           <ProjectCard
            src="/images/teste.png"
            alt="Projeto 1"
            value="Descrição breve do projeto, destacando as tecnologias utilizadas e os resultados alcançados."
            label="Projeto 1"
          />
        </div>
      </section>
    </main>
  );
}

function ProjectCard({src, alt, value, label, }: { src: string; alt: string; value: string; label: string }) {
  return (
    <div className="py-10">
      <div className="w-150 rounded-[8px] overflow-hidden">
        <img className="object-cover" src={src} alt={alt} />
      </div>
      <div>
        <h3 className="text-2xl font-bold my-2">{label}</h3>
        <p className="text-[1em] text-gray-400 text-justify">
          {value}
        </p>
      </div>
    </div>
  );
}


