import React from "react";

export default function Footer() {
    const latestYear = new Date().getFullYear()
    return(
        <>
        <footer id="contact"
            className="p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 ">
                <span className="text-sm text-gray-500 sm:text-center dark:text-white">© {latestYear} <a href="https://zydnrbrn.github.io/" className="hover:underline">Zidan Khulul Sajid</a>.
                </span>
        </footer>
        </>
    )
}