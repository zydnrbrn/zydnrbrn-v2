import { PropsWithChildren } from 'react';
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,

  Box,
  Link,
  TextProps
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';


interface Repo {
    name:string;
    description: string;
    html_url: string;
}

export default function Repos() {
    const [datas, setData] = useState<Repo[]>([]); 
 useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.github.com/users/zydnrbrn/repos')
      const data = await res.json()
      setData(data)
    }

    fetchData()
  }, [])
  return (
    <Container maxW={'6xl'} className='max-w-sm md:max-w-6xl' textAlign={'center'} centerContent px={{ base: 6, md: 3 }} py={14}>
              {datas.map((item, index) => (
      <Stack key={index} direction={{ base: 'column', md: 'row' }} justifyContent="center">

        <Box mr={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
        </Box>
        <Stack key={index} direction="column" spacing={6} justifyContent="center">
          <chakra.h1 className='text-3xl md:text-5xl' lineHeight={1} fontWeight="bold" textAlign="center">
            {item.name}
          </chakra.h1>
          <Box>
            <Content textAlign={'center'}>
             {item.description}
            </Content>
          </Box>
          <Link href={item.html_url} fontSize="sm" color="blue.400">
           See repository →
          </Link>
        </Stack>
      </Stack>
        ))}
    </Container>
  );
};

const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}