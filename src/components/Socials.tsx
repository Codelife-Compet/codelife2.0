import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import InstagramIcon from "./InstagramIcon"
import styles from "@/styles/Home.module.css";
interface social {
    link: string
    id?: string
}
interface SocialProps {
    facebook?: social;
    twitter?: social;
    instagram?: social;
    linkedin?: social;
    github?: social;
    youtube?: social;
    size: "sm" | "md" | "lg";
}
const Socials: React.FC<SocialProps> = ({
    size,
    facebook,
    github,
    instagram,
    linkedin,
    twitter,
    youtube }) => {
    return (
        <div className={styles["socials-inner-container"]}>
            {
                facebook &&
                <i className={`${styles["socials-icon-container"]} ${styles.facebook}`}>
                    <Link href={facebook.link} target="_blank">
                        <div className={`${styles.facebook}`}>
                            <FaFacebookSquare className={`px-2 ${size == "sm" ? "text-[2.5rem]" : size == "md" ? "text-[3rem]" : "text-[6rem]"}`} />
                            {facebook.id && <span className="hidden sm:block">{facebook.id}</span>}
                        </div>
                    </Link>
                </i>
            }
            {
                youtube &&
                <i className={`${styles["socials-icon-container"]} ${styles.youtube}`}>
                    <Link href={youtube.link} target="_blank" >
                        <div className={`${styles.youtube}`}>
                            <FaYoutube className={`px-2 ${size == "sm" ? "text-[3rem]" : size == "md" ? "text-[4rem]" : "text-[6rem]"}`} />
                            {youtube.id && <span className="hidden sm:block"> {youtube.id}</span>}
                        </div>
                    </Link>
                </i>
            }
            {
                instagram &&
                <i className={`${styles["socials-icon-container"]}`}>
                    <Link href={instagram.link} target="_blank" >
                        <InstagramIcon size={size == "sm" ? 30 : size == "lg" ? 40 : 80} id={instagram.id} />
                    </Link>
                </i>
            }
            {
                github &&
                <i className={`${styles["socials-icon-container"]} ${styles.github}`}>
                    <Link href={github.link} target="_blank" >
                        <div className={`${styles.github}`}>
                            <FaGithubSquare className={`px-2 ${size == "sm" ? "text-[2.5rem]" : size == "md" ? "text-[3rem]" : "text-[6rem]"}`} />
                            {github.id && <span className="hidden sm:block">{github.id}</span>}
                        </div>
                    </Link>
                </i>
            }
            {
                linkedin &&
                <i className={`${styles["socials-icon-container"]} ${styles.linkedin}`}>
                    <Link href={linkedin.link} target="_blank" >
                        <div className={`${styles.linkedin}`}>
                            <FaLinkedin className={`px-2 ${size == "sm" ? "text-[2.5rem]" : size == "md" ? "text-[3rem]" : "text-[6rem]"}`} />
                            {linkedin.id && <span className="hidden sm:block">{linkedin.id}</span>}
                        </div>
                    </Link>
                </i>
            }
            {
                twitter &&
                <i className={`${styles["socials-icon-container"]} ${styles.twitter}`}>
                    <Link href={twitter.link} target="_blank" >
                        <div className={`${styles.twitter}`}>
                            <FaTwitterSquare className={`px-2 ${size == "sm" ? "text-[2.5rem]" : size == "md" ? "text-[3rem]" : "text-[6rem]"}`} />
                            {twitter.id && <span className="hidden sm:block">{twitter.id}</span>}
                        </div>
                    </Link>
                </i>
            }
        </div>
    );
}

export default Socials;