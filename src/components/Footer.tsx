import Image from "next/image";
import Link from "next/link";
import CompetIcon from "./CompetIcon";
import Socials from "./Socials";
function Footer() {
  return (
    <footer className="bg-codelife-black-500 bottom-0 w-full mt-auto p-8">
      <div className="flex flex-col sm:flex-row justify-between pb-4">
        <nav role={"navigation"} className="flex flex-col justify-around md:gap-4 lg:gap-8 sm:grid-cols-3 sm:grid">
          <div className="mt-2 ">
            <h3 className="text-xl text-codelife-zinc-300 font-semibold">Sobre</h3>
            <ul className="text-md text-codelife-green-500 font-medium pt-2">
              <li className="font-roboto cursor-pointer opacity-80 hover:opacity-100 border-b-[1px] py-1 border-codelife-black-400 sm:border-b-0"><a href="">SOBRE O CODELIFE</a></li>
              <li className="font-roboto cursor-pointer opacity-80 hover:opacity-100 border-b-[1px] py-1 border-codelife-black-400 sm:border-b-0"><a href="">POLÍTICA DE PRIVACIDADE</a></li>
              <li className="font-roboto cursor-pointer opacity-80 hover:opacity-100 border-b-[1px] py-1 border-codelife-black-400 sm:border-b-0"><a href="">OUTROS RECURSOS</a></li>
              <li className="font-roboto cursor-pointer opacity-80 hover:opacity-100 border-b-[1px] py-1 border-codelife-black-400 sm:border-b-0"><a href="">FALE CONOSCO</a></li>
            </ul>
          </div>
          <div className="mt-2 ">
            <h3 className="text-xl text-codelife-zinc-300 font-semibold">Explore</h3>
            <ul className="text-md text-codelife-green-500 font-medium pt-2">
              <li className="font-roboto cursor-pointer opacity-80 hover:opacity-100 border-b-[1px] py-1 border-codelife-black-400 sm:border-b-0"><a href="">CONTEÚDO</a></li>
              <li className="font-roboto cursor-pointer opacity-80 hover:opacity-100 border-b-[1px] py-1 border-codelife-black-400 sm:border-b-0"><a href="">GLOSSÁRIO</a></li>
            </ul>
          </div>
          <div className="mt-2 ">
            <h3 className="text-xl text-codelife-zinc-300 font-semibold">Idioma</h3>
            <ul className="text-md text-codelife-green-500 font-medium pt-2">
              <li className="font-roboto cursor-pointer opacity-80 hover:opacity-100 border-b-[1px] py-1 border-codelife-black-400 sm:border-b-0"><a href="">INGLÊS</a></li>
              <li className="font-roboto cursor-pointer opacity-80 hover:opacity-100 border-b-[1px] py-1 border-codelife-black-400 sm:border-b-0"><a href="">PORTUGUÊS</a></li>

            </ul>
          </div>
        </nav>
        <div className="flex justify-around pt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            <div className="border-r border-codelife-black-400 flex items-center justify-around pr-4 sm:col-span-1">
              <Link href={"https://www.datawheel.us/"} target="_blank">
                <span className="text-md font-medium flex justify-center text-codelife-zinc-500 ">
                  Criado por :
                </span>
                <Image src="/datawheel.svg" alt="Logotipo da Datawheel" width={160} height={160} className="opacity-80 hover:opacity-100 cursor-pointer" />
              </Link>
            </div>
            <div className="px-4 grid grid-cols-1 grid-rows-4 gap-1 sm:grid-cols-2 sm:grid-rows-2 text-codelife-zinc-500 sm:col-start-2 sm:col-end-4">
              <div className="flex justify-center items-center">
                <span className=" text-sm font-thin">Governo do Estado de Minas Gerais</span>
              </div>
              <div className="flex justify-center items-center">
                <Link href="http://www.fapemig.br/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center ">
                  <Image src="/fapemig.svg" alt="Logotipo da Fapemig" height={160} width={160} className=" opacity-80 hover:opacity-100 cursor-pointer px-2" />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href={"http://www.fapemig.br/"} target="_blank" rel="noopener noreferrer" className=" flex justify-center items-center ">
                  <Image src="/innpact.svg" alt="Logotipo da Innpact" height={160} width={160} className=" opacity-80 hover:opacity-100 cursor-pointer " />
                </Link>
              </div>
              <Link href="https://compet.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center opacity-80 hover:opacity-100 cursor-pointer">
                <i className="grid grid-cols-3 items-center justify-items-center">
                  <CompetIcon className="col-span-1 w-10 sm:w-30"/>
                  <span className="text-sm text-codelife-zinc-400 font-merry pl-2 col-start-2 col-end-4">Compet | Cefet - MG</span>
                </i>
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="border-t-codelife-zinc-400 border-t-[1px]" />
      <Socials
        size="sm"
        facebook={{ id: "/CodelifeBR", link: "https://www.facebook.com/CodeLifeBR/" }}
        youtube={{ id: "@CodelifeBR", link: "https://www.youtube.com/channel/UCR6iTxyV9jdSy21eqS1Ovyg" }}
        instagram={{ id: "@CodelifeBR", link: "https://www.instagram.com/codelifebr/" }}
        
      />
    </footer >);
}

export default Footer;