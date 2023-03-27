import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import InstagramIcon from "./InstagramIcon"
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
        <div className="grid grid-flow-col gap-2 pt-4">
            {
                facebook &&
                <i className="px-2 transition-opacity flex justify-center items-center hover:text-codelife-blue-500">
                    <Link href={facebook.link} target="_blank">
                        <div className="flex items-center  hover:text-codelife-blue-500 text-xl text-codelife-black-400 fill-codelife-black-400 hover:fill-codelife-blue-500">
                            <FaFacebookSquare className={`px-2 ${size == "sm" ? "text-[2.5rem]" : size == "md" ? "text-[3rem]" : "text-[6rem]"}`} />
                            {facebook.id&&<span className="hidden sm:block">{facebook.id}</span>}
                        </div>
                    </Link>
                </i>
            }
            {
                youtube &&
                <i className="px-2  transition-opacity flex justify-center items-center hover:text-codelife-red-500">
                    <Link href={youtube.link} target="_blank" >
                        <div className="flex items-center hover:text-codelife-red-500 text-xl text-codelife-black-400 fill-codelife-black-400 hover:fill-codelife-red-500">
                            <FaYoutube className={`px-2 ${size == "sm" ? "text-[3rem]" : size == "md" ? "text-[4rem]" : "text-[6rem]"}`} />
                            {youtube.id&&<span className="hidden sm:block"> {youtube.id}</span>}
                        </div>
                    </Link>
                </i>
            }
            {
                instagram &&
                <i className="px-2 transition-opacity flex justify-center items-center">
                    <Link href={instagram.link} target="_blank" >
                        <InstagramIcon size={size == "sm" ? 30 : size == "lg" ? 40 : 80} id={instagram.id} />
                    </Link>
                </i>
            }
            {
                github &&
                <i className="px-2  transition-opacity flex justify-center items-center hover:text-codelife-black-900">
                    <Link href={github.link} target="_blank" >
                        <div className="flex items-center hover:text-codelife-black-900 text-xl text-codelife-black-400 fill-codelife-black-400 hover:fill-codelife-black-900">
                            <FaGithubSquare className={`px-2 ${size == "sm" ? "text-[2.5rem]" : size == "md" ? "text-[3rem]" : "text-[6rem]"}`} />
                            {github.id&&<span className="hidden sm:block">{github.id}</span>}
                        </div>
                    </Link>
                </i>
            }
            {
                linkedin &&
                <i className="px-2 transition-opacity flex justify-center items-center hover:text-codelife-blue-600">
                    <Link href={linkedin.link} target="_blank" >
                        <div className="flex items-center hover:text-codelife-blue-600 text-xl text-codelife-black-400 fill-codelife-black-400 hover:fill-codelife-blue-600">
                            <FaLinkedin className={`px-2 ${size == "sm" ? "text-[2.5rem]" : size == "md" ? "text-[3rem]" : "text-[6rem]"}`} />
                            {linkedin.id&&<span className="hidden sm:block">{linkedin.id}</span>}
                        </div>
                    </Link>
                </i>
            }
            {
                twitter &&
                <i className="px-2 transition-opacity flex justify-center items-center hover:text-codelife-blue-400">
                    <Link href={twitter.link} target="_blank" >
                        <div className="flex items-center hover:text-codelife-blue-400 text-xl text-codelife-black-400 fill-codelife-black-400 hover:fill-codelife-blue-400">
                            <FaTwitterSquare className={`px-2 ${size == "sm" ? "text-[2.5rem]" : size == "md" ? "text-[3rem]" : "text-[6rem]"}`} />
                            {twitter.id&&<span className="hidden sm:block">{twitter.id}</span>}
                        </div>
                    </Link>
                </i>
            }
        </div>
    );
}

export default Socials;