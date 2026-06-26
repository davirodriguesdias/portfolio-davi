import { FaMapMarkerAlt, FaEnvelope, FaMobile } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-col pt-50 max-sm:pb-20 sm:gap-y-10 justify-center sm:py-70 sm:pr-30 bg-[#060f1e] h-auto w-auto sm:h-screen sm:w-screen"
    >
      <div className="flex flex-col max-sm:pl-5 sm:flex-row max-sm:gap-y-10 sm:gap-x-10 justify-center">
        <div className="flex flex-col gap-3 sm:h-60">
          <h2 className="text-[#354656] flex items-center gap-1">
            {" "}
            <FaMapMarkerAlt /> Localização
          </h2>
          <p className="pl-1 font-bold text-[1.1em] sm:text-2xl">Fortaleza-CE</p>
          <h2 className="text-[#354656] flex items-center gap-1">
            {" "}
            <FaEnvelope /> Email
          </h2>
          <p className="pl-1 font-bold text-[1.1em] text-2xl">rodriguesdias007@gmail.com</p>
        </div>
        <div className="flex flex-col gap-3 sm:border-l-2 sm:border-[#354656] h-55 sm:h-60 sm:px-10">
          <h2 className="text-[#354656] flex items-center gap-1">
            <FaMobile />
            Redes Sociais
          </h2>
          <div className="flex flex-col gap-3 pl-1">
            <a
              className=" font-bold uppercase text-[1.3em] sm:text-2xl border-b-3 w-20 sm:w-23"
              target="_blank"
              href="https://github.com/davirodriguesdias"
            >
              Github
            </a>
            <a
              className=" font-bold uppercase  text-[1.3em] sm:text-2xltext-2xl border-b-3 w-25 sm:w-29"
              target="_blank"
              href="https://github.com/davirodriguesdias"
            >
              Linkedin
            </a>
            <a
              className=" font-bold uppercase text-[1.3em] sm:text-2xl text-2xl border-b-3 w-30 sm:w-35"
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
