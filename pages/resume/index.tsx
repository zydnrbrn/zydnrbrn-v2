import React from "react"
import Navbar from "@/components/Navbar"
import Timeline from "@/components/Timeline"
import { Container } from "@chakra-ui/react"
import Footer from "@/components/Footer"

export default function Resume() {
    return (
        <>
            <Navbar />
            <Container className="md:w-[1500px]" centerContent >
                <Timeline />
                <Footer />
            </Container>
        </>
    )
}