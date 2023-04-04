import { FaYoutube, FaFacebookSquare } from "react-icons/fa"
import EnterButton from "./EnterButton";
import LogoIcon from "./LogoIcon";



function NavBar() {

    return(
        <nav className="box-border m-0 flex justify-between items-center gap-8 py-0 px-4 h-20 bg-codelife-green-500">
            <LogoIcon size= {120} /> 
            <ul className="p-0 m-0 list-none flex gap-8 text-sm ">
                <EnterButton size={20} />
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><a href="/">CRIE UMA CONTA</a></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><a href="/">SOBRE O CODELIFE</a></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><a href="/">PORTUGUÊS</a></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><a href="/">INGLÊS</a></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><FaFacebookSquare /></li>
                <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold"><FaYoutube /></li>
            </ul>
        </nav>
    );
}


export default NavBar;