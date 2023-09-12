import React from "react";
import Contact from '@/components/Contact';
import { Image, Box } from "@chakra-ui/react";

export default function Content() {
    return (
        <>
            <div className="container px-4 lg:ml-8">
                <div className="mx-auto block gap-2 sm:flex text-center">
                    <div className="font-righteous sm:mt-24">
                        <h2 className="dark:text-white text-4xl sm:text-6xl lg:text-8xl">Hello ...</h2>
                        <h1 className="uppercase mt-2 dark:text-white sm:text-2xl lg:text-3xl">iam zidan khulul
                            sajid </h1>
                        <h2 className="uppercase mt-2 md:text-2xl dark:text-white">software developer</h2>
                        <a href="#contact">
                            <button className="
                                relative mt-4 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br
                                from-black to-main-red group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-main-red dark:bg-gradient-to-r dark:from-white dark:to-main-red dark:hover:text-black">
                                <span
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
                                    GET IN TOUCH
                                </span>
                            </button>
                        </a>
                    </div>
                    <div className="img-header sm:float-right sm:relative">
                        <Box
                            className="h-[280px] w-full sm:w-[400px] md:h-[380px] md:w-[486px] lg:w-[400px] lg:h-[486px] sm:mt-[100px] lg:mt-0"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Image
                                src="https://ik.imagekit.io/3upgjbxqx/protofolio-source/undraw_Code_thinking_re_gka2.png?updatedAt=1680577426555"
                                alt="Intro Image"
                                maxH="100%"
                                maxW="100%"
                                objectFit="contain"
                            />
                        </Box>

                    </div>
                </div>
                <div className="gap-2 mt-10 sm:flex" id="about">
                    <Box
                        className="img-header mt-[60px]"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src="https://ik.imagekit.io/3upgjbxqx/protofolio-source/undraw_Hacker_mindset_re_8a33.png?updatedAt=1680577426527"
                            alt="Intro image"
                            w={['100%', '100%', '400px', '486px', '400px']}
                            h={['280px', '280px', '380px', '486px', '486px']}
                            justifySelf="center"
                        />
                    </Box>

                    <div className="sm:w-72 md:w-[500px] lg:mt-24 mx-auto">
                        <h2 className="font-righteous dark:text-white mt-6 text-2xl lg:text-3xl">LETS INTRODUCE ABOUT
                            MYSELF.</h2>
                        <p className="mt-2 font-work dark:text-white lg:text-xl">
                            From West Bandung, West Java, Indonesia.
                        </p>
                        <p className="mt-2 font-work dark:text-white lg:text-xl">
                            My ambition is to create good and high-quality software. I am always eager to learn new tech stacks or programming languages that I am not familiar with.
                        </p>
                        <p className="mt-2 font-work dark:text-white lg:text-xl">
                            My flaws have always been my best motivation to learn.
                        </p>
                    </div>
                </div>
                <Contact />
            </div>
        </>
    );
}
