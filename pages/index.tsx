import { Inter } from 'next/font/google'
import Navbar from '@/pages/components/Navbar';
import {Box, Text, Container} from "@chakra-ui/react";
import Content from '@/pages/components/Content';

export default function Home() {
  return (
      <>
      <Navbar />
       <Container maxW='1500px' centerContent>
       <Box display={"inline-flex"}>
         <Content />
       </Box>
       </Container>
      </>
  )
}
