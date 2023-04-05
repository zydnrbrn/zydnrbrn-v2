import React from "react";
import Contact from '@/pages/components/Contact';
import Skills from "@/pages/components/Skills";
import { Image } from "@chakra-ui/react";

export default function Content() {
    const latestYear = new Date().getFullYear()
    return(
        <>
            <div className="container px-4 lg:ml-8">
                <div className="mx-auto block gap-2 sm:flex text-center">
                    <div className="font-righteous sm:mt-24">
                        <h2 className="dark:text-white text-5xl sm:text-6xl lg:text-8xl">Hello ...</h2>
                        <h1 className="uppercase mt-2 dark:text-white sm:text-2xl lg:text-3xl">iam zidan khulul
                            sazid </h1>
                        <h2 className="uppercase mt-2 md:text-2xl dark:text-white">frontend & backend developer</h2>
                        <button className="
  relative mt-4 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br
   from-black to-main-red group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-main-red dark:bg-gradient-to-r dark:from-white dark:to-main-red dark:hover:text-black">
    <span
        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
       <a href="#contact"> GET IN TOUCH</a>
    </span>
                        </button>
                    </div>
                    <div className="img-header sm:float-right sm:relative">
                        <Image className="h-[380] w-[400px] md:h-[486px] md:w-[700px] sm:mt-[100px] justify-center lg:float-right" src="https://ik.imagekit.io/3upgjbxqx/protofolio-source/undraw_Code_thinking_re_gka2.png?updatedAt=1680577426555"
                             alt={'Intro Image'}/>
                    </div>
                </div>
                <div className="gap-2 mt-10 sm:flex" id="about">
                    <div className="img-header mt-[60px]">
                        <Image className="h-[380] w-[400px] md:h-[486px] md:w-[500px] justify-center" src="https://ik.imagekit.io/3upgjbxqx/protofolio-source/undraw_Hacker_mindset_re_8a33.png?updatedAt=1680577426527"
                             alt="Intro image"  />
                    </div>
                    <div className="sm:w-72 md:w-[500px] lg:mt-24 mx-auto">
                        <h2 className="font-righteous dark:text-white mt-6 text-2xl lg:text-3xl">LETS INTRODUCE ABOUT
                            MYSELF.</h2>
                        <p className="mt-2 font-work dark:text-white lg:text-2xl">From West Bandung, West Java, Indonesia.</p>
                        <p className="mt-2 font-work dark:text-white lg:text-2xl">My ambition is create a good and best quality software, im very happy on learn new tech stack or new programming language which i don't know.</p>
                        <p className="mt-2 font-work dark:text-white lg:text-2xl">My flaws have always been my best motivation to learn.</p>
                    </div>
                </div>
                <Contact />
                <footer
                    className="p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 ">
  <span className="text-sm text-gray-500 sm:text-center dark:text-white">© {latestYear} <a href="https://zydnrbrn.github.io/" className="hover:underline">Zydnrbrn™</a>. All Rights Reserved.
  </span>
                </footer>
            </div>
        </>
    )
}
