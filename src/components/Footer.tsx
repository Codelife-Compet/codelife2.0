import Link from "next/link";
import CompetIcon from "./CompetIcon";
import Socials from "./Socials";
import styles from '@/styles/Home.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["inner-footer"]}>
        <nav role={"navigation"} className={styles["nav-links-footer"]}>
          <div className={styles["nav-footer-section"]}>
            <h3>Sobre</h3>
            <ul>
              <li><a href="">SOBRE O CODELIFE</a></li>
              <li><a href="">POLÍTICA DE PRIVACIDADE</a></li>
              <li><a href="">OUTROS RECURSOS</a></li>
              <li><a href="">FALE CONOSCO</a></li>
            </ul>
          </div>
          <div className={styles["nav-footer-section"]}>
            <h3>Explore</h3>
            <ul>
              <li><a href="">CONTEÚDO</a></li>
              <li><a href="">GLOSSÁRIO</a></li>
            </ul>
          </div>
          <div className={styles["nav-footer-section"]}>
            <h3>Idioma</h3>
            <ul>
              <li><a href="">INGLÊS</a></li>
              <li><a href="">PORTUGUÊS</a></li>

            </ul>
          </div>
        </nav>
        <div className={styles["footer-partners-section"]}>
          <div className={styles["footer-partners-container"]}>
            <div className={styles["footer-partners-datawheel"]}>
              <a href={"https://www.datawheel.us/"} target="_blank">
                <span className="text-md font-medium flex justify-center text-codelife-zinc-500 ">
                  Desenvolvido por:
                </span>
                <img src="/datawheel.svg" alt="Logotipo da Datawheel" width={160} height={160} className="opacity-80 hover:opacity-100 cursor-pointer" />
              </a>
            </div>
            <div className={styles["footer-partners-helpfull-container"]}>
              <div className={styles["footer-partners-item"]}>
                <span className="text-codelife-zinc-400 text-sm font-thin">Governo do Estado de Minas Gerais</span>
              </div>
              <div className={styles["footer-partners-item"]}>
                <a href="http://www.fapemig.br/" target="_blank" rel="noopener noreferrer">
                  <img src="/fapemig.svg" alt="Logotipo da Fapemig" height={160} width={160} className=" opacity-80 hover:opacity-100 cursor-pointer px-2" />
                </a>
              </div>
              <div className={styles["footer-partners-item"]}>
                <a href={"http://www.fapemig.br/"} target="_blank" rel="noopener noreferrer" >
                  <img src="/innpact.svg" alt="Logotipo da Innpact" height={160} width={160} className=" opacity-80 hover:opacity-100 cursor-pointer " />
                </a>
              </div>
              <div className={styles["footer-partners-item"]}>
                <a href="https://compet.vercel.app/" target="_blank" rel="noopener noreferrer" className="grid grid-cols-3 items-center justify-items-center">
                  <CompetIcon className="col-span-1 w-10 sm:w-30" />
                  <span className="text-sm text-codelife-zinc-400 font-merry pl-2 col-start-2 col-end-4">Compet | CEFET - MG</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={styles["socials-container"]}
      >
        <Socials
          size="sm"
          facebook={{ id: "/CodelifeBR", link: "https://www.facebook.com/CodeLifeBR/" }}
          youtube={{ id: "@CodelifeBR", link: "https://www.youtube.com/channel/UCR6iTxyV9jdSy21eqS1Ovyg" }}
          instagram={{ id: "@CodelifeBR", link: "https://www.instagram.com/codelifebr/" }}

        />
      </div>
    </footer >);
}

export default Footer;