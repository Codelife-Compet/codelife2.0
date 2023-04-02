import Link from "next/link";
import CompetIcon from "./CompetIcon";
import Socials from "./Socials";
import styles from '@/styles/Footer.module.css'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
function Footer() {
  const [hydrated, setHydrated] = useState(false);
  const [user,setUser]=useState()
  useEffect(() => {
    setHydrated(true);
  }, []);
  const { t } = useTranslation()


  return (
    hydrated ?
      (<footer className={styles.footer}>
        <div className={styles["inner-footer"]}>
          <nav role={"navigation"} className={user?styles["nav-4-links-footer"]:styles["nav-3-links-footer"]}>
            <div className={styles["nav-footer-section"]}>
              <h3>{t("About ")}</h3>
              <ul>
                <li><Link href="">{t("About")}</Link></li>
                <li><Link href="">{ t("Privacy Policy")}</Link></li>
                <li><Link href="">{ t("Partners")}</Link></li>
                <li><Link href="">{ t("Contact")}</Link></li>
              </ul>
            </div>
            <div className={styles["nav-footer-section"]}>
              <h3>{t("Explore")}</h3>
              <ul>
                <li><Link href="">{t("Lesson plan")}</Link></li>
                <li><Link href="">{t("Glossary")}</Link></li>
              </ul>
            </div>
            <div className={styles["nav-footer-section"]}>
              <h3>{t("Language")}</h3>
              <ul>
                <li><Link href="">{t("English")}</Link></li>
                <li><Link href="">{t("Portuguese")}</Link></li>

              </ul>
            </div>
          </nav>
          <div className={styles["footer-partners-section"]}>
            <div className={styles["footer-partners-container"]}>
              <div className={styles["footer-partners-datawheel"]}>
                <Link href={"https://www.datawheel.us/"} target="_blank">
                  <span className="text-md font-medium flex justify-center text-codelife-zinc-500 ">
                    {t("developed by")}
                  </span>
                  <img src="/datawheel.svg" alt="Logotipo da Datawheel" width={160} height={160} className="opacity-80 hover:opacity-100 cursor-pointer" />
                </Link>
              </div>
              <div className={styles["footer-partners-helpfull-container"]}>
                <div className={styles["footer-partners-item"]}>
                  <Link href="https://www.mg.gov.br">
                    <span className="text-codelife-zinc-400 text-sm font-thin">Governo do Estado de Minas Gerais</span>
                  </Link>
                </div>
                <div className={styles["footer-partners-item"]}>
                  <Link href="http://www.fapemig.br/" target="_blank" rel="noopener noreferrer">
                    <img src="/fapemig.svg" alt="Logotipo da Fapemig" height={160} width={160} className=" opacity-80 hover:opacity-100 cursor-pointer px-2" />
                  </Link>
                </div>
                <div className={styles["footer-partners-item"]}>
                  <Link href={"http://www.fapemig.br/"} target="_blank" rel="noopener noreferrer" >
                    <img src="/innpact.svg" alt="Logotipo da Innpact" height={160} width={160} className=" opacity-80 hover:opacity-100 cursor-pointer " />
                  </Link>
                </div>
                <div className={styles["footer-partners-item"]}>
                  <Link href="https://compet.vercel.app/" target="_blank" rel="noopener noreferrer" className="grid grid-cols-3 items-center justify-items-center">
                    <CompetIcon className="col-span-1 w-10 sm:w-30" />
                    <span className="text-sm text-codelife-zinc-400 font-merry pl-2 col-start-2 col-end-4">Compet | CEFET - MG</span>
                  </Link>
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
      </footer >) : <></>);
}

export default Footer;