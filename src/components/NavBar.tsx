import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebookSquare } from "react-icons/fa"
import CompetIcon from "./CompetIcon";
import InstagramIcon from "./InstagramIcon";



function NavBar() {

    return(
        <nav className="box-border m-0 flex justify-between items-center gap-8 py-0 px-4">
            <a href="/" className="">CODELIFE</a>
            <ul className="p-0 m-0 list-none flex gap-4 text-sm">
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><a href="/">ENTRE</a></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><a href="/">CRIE UMA CONTA</a></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><a href="/">SOBRE O CODELIFE</a></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><a href="/">PORTUGUÊS</a></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><a href="/">INGLÊS</a></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><FaFacebookSquare /></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><FaYoutube /></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><InstagramIcon /></li>
            </ul>
        </nav>
    );
}


export default NavBar;