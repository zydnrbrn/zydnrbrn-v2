import Footer from '@/pages/components/Footer';
import Navbar from '@/pages/components/Navbar';
import {Box, Container} from "@chakra-ui/react";
import Skill from '@/pages/components/Skills';
import Repos from '@/pages/components/Repo';

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
