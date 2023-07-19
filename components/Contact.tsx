import React from "react";
import { HStack, Button  } from "@chakra-ui/react";
import { TbBrandLinkedin, TbMail, TbBrandInstagram } from 'react-icons/tb'

export default function Contact() {
    return(
        <>
            <div className="contact mt-10 md:mt-32 sm:mt-24">
                <div className="contact-button text-center mt-10 flex justify-center dark:text-white">
                    <HStack>
                    <a href="mailto: zidanreborn@gmail.com">
  <Button colorScheme='facebook' leftIcon={<TbMail />}>
                        <h1>  zidanreborn@gmail.com</h1>
  </Button>
  </a>
  <a className="mx-5" href="https://www.facebook.com/zidan.k.s">
  <Button colorScheme='twitter' leftIcon={<TbBrandLinkedin />}>
                        <h1>  Zidan Khulul Sajid</h1>
  </Button>
  </a>
  <a href="https://www.instagram.com/zreborn_/">
  <Button colorScheme='orange' leftIcon={<TbBrandInstagram />}>
                    <h1> zreborn_</h1>
  </Button>
    </a>
</HStack>
                    </div>
                </div>
        </>
    )
}