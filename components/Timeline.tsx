import {
  VStack,
  Heading,
  Box,
  Container,
  BoxProps,
  Circle,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';
import { FaMedal, FaBuilding, FaKeyboard } from 'react-icons/fa';
import { BsFillMortarboardFill } from 'react-icons/bs'

const Milestones = () => {

  return (
    <Container className='gap-2'>
      <Container maxW="xl" p={{ base: 2, sm: 10 }}>
        <VStack textAlign="start" align="start" mb={5}>
          <Box zIndex={5}>
            <Heading fontSize="4xl" fontWeight="600" my={5}>
              Experience
            </Heading>
            <Box>
              <MilestoneItem icon={FaMedal}>
            July 2022 :  Contibution on LKS Web Technologies West Java 2022
              </MilestoneItem>
              <MilestoneItem icon={FaBuilding}>
            August - October 2022 :  Intern At Gamelab Indonesia Educa Studio
              </MilestoneItem>
              <MilestoneItem icon={FaBuilding}>
              November 2022 - February 2023 : Intern At PT Setia Inovasi Digital (Backend Developer)
              </MilestoneItem>
              <MilestoneItem icon={FaKeyboard}>
              February 2023 - Now: Freelancing
              </MilestoneItem>
              <MilestoneItem icon={FaBuilding} skipTrail>
              May 2023 - Now : Fulltime At Cv Torche Indonesia (Backend Developer)
              </MilestoneItem>
            </Box>
          </Box>
        </VStack>
      </Container>
      <Container maxW="xl" p={{ base: 2, sm: 10 }}>
        <VStack textAlign="start" align="start" mb={5}>
          <Box zIndex={5}>
            <Heading fontSize="4xl" fontWeight="600" my={5}>
              Education
            </Heading>
            <Box>
              <MilestoneItem icon={BsFillMortarboardFill} >
              2023 : Graduate from SMKN 1 Rongga
              </MilestoneItem>
              <MilestoneItem icon={BsFillMortarboardFill} skipTrail>
              2023 : Information Systems - Indonesia Open University
              </MilestoneItem>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Container>
  );
};

interface MilestoneItemProps extends BoxProps {
  icon?: any;
  boxProps?: BoxProps;
  skipTrail?: boolean;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({
  icon = FiCheckCircle,
  boxProps = {},
  skipTrail = false,
  children,
  ...props
}) => {
  const color = useColorModeValue('gray.700', 'gray.500');
  return (
    <Flex minH={20} {...props}>
      <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
        <Circle
          size={12}
          bg={useColorModeValue('gray.600', 'gray.500')}
          opacity={useColorModeValue(0.07, 0.15)}
        />
        <Box as={icon} size="1.25rem" color={color} pos="absolute" left="0.875rem" top="0.875rem" />
        {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
      </Flex>
      <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
        {children}
      </Box>
    </Flex>
  );
};

export default Milestones;