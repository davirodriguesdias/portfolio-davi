export default function Header() {
    return (
        <header className="flex justify-between p-11 px-21 w-full font-semibold">
            <h1 className="text-4xl">
                <a href="#">Davi</a>
            </h1>
            <nav>
                <ul className="flex text-xl gap-6">
                    <li>
                        <a href="#">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#">Projetos</a>
                    </li>
                    <li>
                        <a href="#">Github</a>
                    </li>
                    <li>
                        <a href="#">Linkedin</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}