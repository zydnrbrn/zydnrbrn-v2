import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import {
    TbBrandLinkedin,
    TbBrandInstagram,
    TbBrandMedium
} from 'react-icons/tb';

export default function Contact() {
    return (
        <div className="contact mt-10 md:mt-32 sm:mt-24">
            <div className="contact-button text-center mt-10 flex justify-center">
                <HStack spacing={4}>
                    <a className="mx-5" href="https://www.linkedin.com/in/zidan-khulul-sajid/">
                        <Button color='black' colorScheme='alpha' leftIcon={<TbBrandLinkedin />}>
                            <h1 className="text-black">Zidan Khulul Sajid</h1>
                        </Button>
                    </a>
                    <a className="mx-5" href="https://medium.com/@zydnrbrn">
                        <Button color='black' colorScheme='alpha' leftIcon={<TbBrandMedium />}>
                            <h1 className="text-black">Zidan Khulul Sajid</h1>
                        </Button>
                    </a>
                    <a href="https://www.instagram.com/zydnrbrn/">
                        <Button color='black' colorScheme='alpha' leftIcon={<TbBrandInstagram />}>
                            <h1 className="text-black">zydnrbrn</h1>
                        </Button>
                    </a>
                </HStack>
            </div>
        </div>
    );
}
