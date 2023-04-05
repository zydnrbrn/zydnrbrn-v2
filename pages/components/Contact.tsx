import React from "react";
import { TbBrandLinkedin, TbMail, TbBrandInstagram } from 'react-icons/tb'

export default function Contact() {
    return(
        <>
            <div className="contact mt-10 md:mt-32 sm:mt-24">
                <div className="contact-button text-center mt-10 flex justify-center dark:text-white">
                    <div>
                    <a href="mailto: zidanreborn@gmail.com">
                        <h1 className="inline"> <TbMail /> zidanreborn@gmail.com</h1>
                    </a>
                    </div>
                    <div className="flex flex-col">
                    <a className="mx-5" href="https://www.facebook.com/zidan.k.s">
                        <h1> <TbBrandLinkedin /> Zidan Khulul Sajid</h1>
                    </a>
                    </div>
                    <div className="flex flex-col">
                    <a href="https://www.instagram.com/zreborn_/">
                    <h1> <TbBrandInstagram /> zreborn_</h1>
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}