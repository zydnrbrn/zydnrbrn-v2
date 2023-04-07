import * as React from 'react';
import { Container, Heading, Stack, HStack, Text, Button, Image } from '@chakra-ui/react';

const companiesImages = [
  'https://ik.imagekit.io/3upgjbxqx/protofolio-source/logo-tech/laravel-logo.png?updatedAt=1680833384935',
  'https://ik.imagekit.io/3upgjbxqx/protofolio-source/logo-tech/quarkus_logo_vertical_rgb_default.svg?updatedAt=1680833384877',
  'https://ik.imagekit.io/3upgjbxqx/protofolio-source/logo-tech/Nextjs-logo.svg?updatedAt=1680833384836',
  'https://ik.imagekit.io/3upgjbxqx/protofolio-source/logo-tech/vertical-logo-monochromatic.webp?updatedAt=1680833576805',
  'https://ik.imagekit.io/3upgjbxqx/protofolio-source/logo-tech/tailwindcss-logotype.svg?updatedAt=1680833694814',
  'https://ik.imagekit.io/3upgjbxqx/protofolio-source/logo-tech/pngaaa.com-2459546.png?updatedAt=1680834131685'
];

const HeroSection = () => {
  return (
    <Container maxW="6xl" p={4}>
      <Stack direction="column" spacing={6} alignItems="center" mt={8} mb={16}>
        <Heading as="h1" fontSize="4xl" fontWeight="bold" textAlign="center" maxW="600px">
            Project .
        </Heading>
        <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
          Im trying to create some apps to help me as developer or other developer easy at development.
        </Text>
      </Stack>
      <Stack spacing={5} alignItems="center" mb={8}>
        <HStack
          spacing={{ base: 0, md: 10 }}
          justifyContent="center"
          maxW={{ base: '500px', md: '100%' }}
          flexWrap="wrap"
        >
          {companiesImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="company logo"
              w={{ base: '8rem', md: '5rem' }}
              p={{ base: 5, md: 0 }}
            />
          ))}
        </HStack>
        <Text maxW="500px" fontSize="md" textAlign="center" color="gray.500">
          Lets create the goods apps.
        </Text>
      </Stack>
    </Container>
  );
};

export default HeroSection;