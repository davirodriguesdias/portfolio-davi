import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="flex justify-between p-11 px-21 w-full font-semibold">
            <h1 className="text-4xl">
                <a href="#">Davi</a>
            </h1>
            <nav>
                <ul className="flex text-xl gap-6">
                    <li>
                        <a href="#aboutSection">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <a target='_blank' href="https://github.com/davirodriguesdias" className="flex items-center gap-2">
                            <FaGithub size={25} />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="https://www.linkedin.com/in/davi-dias-1606b42b0/" className="flex items-center gap-2">
                            <FaLinkedin size={25} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}