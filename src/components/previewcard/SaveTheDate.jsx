import React from 'react';
import { Box, Flex, Image, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import groom from '../../assets/images/groom.jpeg'
const SaveTheDate = () => {
  return (
    <Box w={'100%'} p={4} textAlign="center">
      <Flex w={['100%','100%','80%','80%']} direction={{ base: 'column', md: 'row' }} justify="space-around" align="center">
        <VStack spacing={4} mb={{ base: 8, md: 0 }}>
          <Image
            outline={'1px solid white'}
            outlineOffset={'-5px'}
            borderRadius="full"
            boxSize="200px"
            src={groom}
            alt="Groom"
          />
          <Text fontWeight="bold" color="red.500">Demo Demo</Text>
          <Text>The groom</Text>
          <HStack spacing={2}>
            <IconButton icon={<FaInstagram />} isRound="true" />
            <IconButton icon={<FaFacebook />} isRound="true" />
            <IconButton icon={<FaTwitter />} isRound="true" />
            <IconButton icon={<FaPinterest />} isRound="true" />
          </HStack>
        </VStack>

        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">Save The Date</Text>
          <Text>Demo and Aa</Text>
          <Text>are getting married on</Text>
          <Text fontWeight="bold">26.09.2024</Text>
          <Flex justify="center" fontSize="xl" mt={4}>
            <Box mx={2}>
              <Text fontWeight="bold">90</Text>
              <Text>Days</Text>
            </Box>
            <Box mx={2}>
              <Text fontWeight="bold">23</Text>
              <Text>Hours</Text>
            </Box>
            <Box mx={2}>
              <Text fontWeight="bold">57</Text>
              <Text>Mins</Text>
            </Box>
            <Box mx={2}>
              <Text fontWeight="bold">59</Text>
              <Text>Secs</Text>
            </Box>
          </Flex>
        </Box>

        <VStack spacing={4}>
          <Image
            borderRadius="full"
            boxSize="200px"
            src={groom}
            alt="Bride"
          />
          <Text fontWeight="bold" color="red.500">Aa Aa</Text>
          <Text>The bride</Text>
          <HStack spacing={2}>
            <IconButton icon={<FaInstagram />} isRound="true" />
            <IconButton icon={<FaFacebook />} isRound="true" />
            <IconButton icon={<FaTwitter />} isRound="true" />
            <IconButton icon={<FaPinterest />} isRound="true" />
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default SaveTheDate;
