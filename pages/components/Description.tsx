import React from "react"

export default function Description() {
    return(
        <>
            <div className={'grid gap-2'}>
            <div className="font-righteous lg:mt-24 mx-auto">
                <h2 className="dark:text-white mt-6 text-2xl lg:text-3xl">LET'S INTRODUCE ABOUT
                    MYSELF.</h2>
                <p className="mt-2 dark:text-white lg:text-1xl">Twelve Class Student of Vocational High School 1
                    Rongga. Experience in programming one year less. Hard worker and like to learn something
                    new.</p>
                <button
                    className="relative mt-4 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-main-red group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-main-red dark:bg-gradient-to-r dark:from-white dark:to-main-red dark:hover:text-black">
    <span
        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
        <a href="https://drive.google.com/file/d/1Kyf7moufZdsbJKlph1Y6-wEP7IzKFcmO/view?usp=sharing">DOWNLOAD CV</a>
    </span>
                </button>
            </div>
            </div>
        </>
    )
}