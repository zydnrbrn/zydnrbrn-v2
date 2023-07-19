import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {Box, Container} from "@chakra-ui/react";
import Skill from '@/components/Skills';
import Repos from '@/components/Repo';

export default function Home() {
  return (
      <>
      <Navbar />
       <Container maxW='1500px' centerContent>
       <Box>
            <Skill />
            <Repos />
       </Box>
       <Footer />
       </Container>
      </>
  )
}
