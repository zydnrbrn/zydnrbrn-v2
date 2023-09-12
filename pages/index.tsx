import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {Box, Container} from "@chakra-ui/react";
import Content from '@/components/Content';

export default function Home() {
  return (
      <>
      <Navbar />
       <Container maxW='1500px' centerContent>
       <Box display={"inline-flex"}>
         <Content />
       </Box>
       <Footer />
       </Container>
      </>
  )
}
