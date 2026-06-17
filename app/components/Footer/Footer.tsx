export default function Footer() {
  return (
    <footer id="footer" className="flex flex-col gap-y-10 justify-center py-70 pr-30 bg-[#060f1e] h-screen w-screen">
      <div className="flex flex-row gap-x-10 justify-center">
        <div className="flex flex-col gap-3 h-60">
          <h2 className="text-[#354656]">Localização</h2>
          <p className="pl-1 font-bold text-2xl">Fortaleza-CE</p>
          <h2 className="text-[#354656]">Email</h2>
          <p className="pl-1 font-bold text-2xl">rodriguesdias007@gmail.com</p>
        </div>
        <div className="flex flex-col gap-3 border-l-2 border-[#354656] h-60 px-10">
          <h2 className="text-[#354656]">Redes Sociais</h2>
          <div className="flex flex-col gap-3 pl-1">
            <a
              className=" font-bold uppercase text-2xl border-b-3 w-23"
              target="_blank"
              href="https://github.com/davirodriguesdias"
            >
              Github
            </a>
            <a
              className=" font-bold uppercase text-2xl border-b-3 w-29"
              target="_blank"
              href="https://github.com/davirodriguesdias"
            >
              Linkedin
            </a>
            <a
              className=" font-bold uppercase text-2xl border-b-3 w-35"
              href=""
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[#354656]">
          Desenvolvido por{" "}
          <span className="font-bold text-white">Davi Dias</span> © 2026
        </p>
      </div>
    </footer>
  );
}
