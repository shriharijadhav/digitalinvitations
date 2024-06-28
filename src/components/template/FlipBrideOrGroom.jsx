import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../../App.css'

const FlipBrideOrGroom = () => {
  return (
    <Flex
      w={'100%'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'20px'}
    >
      <Flex
        className="flip-container"
        position={'relative'}
        zIndex={20}
        w={['210px', '230px', '250px', '280px']}
        h={['210px', '230px', '250px', '280px']}
      >
        <Flex className="flipper">
          <Flex className="front" position={'relative'} zIndex={20} w={'100%'} h={'100%'}>
            <Flex
              border={'1px solid white'}
              position={'absolute'}
              h={['45px', '50px', '58px', '64px']}
              right={0}
              top={0}
              zIndex={10}
              borderColor={'red.400'}
              transform="rotate(45deg)"
              transformOrigin={'top right'}
            ></Flex>
            <Flex
              border={'1px solid white'}
              position={'absolute'}
              h={['45px', '50px', '58px', '64px']}
              left={0}
              bottom={0}
              zIndex={10}
              borderColor={'red.400'}
              transform="rotate(45deg)"
              transformOrigin={'bottom left'}
            ></Flex>
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              position={'absolute'}
              w={'100%'}
              h={'100%'}
              bg={'gray'}
              outline={'1px solid white'}
              zIndex={20}
              outlineOffset={'-8px'}
              borderRadius={'full'}
              backgroundImage={`url(https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2021/12/255481849_268219471918936_4913651595211305236.jpg)`}
              backgroundSize={'cover'}
              overflow={'hidden'}
            >
              <Flex
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="transparent"
                borderRadius="full"
                outline="1px solid white"
                outlineOffset="-5px"
                zIndex="1"
              ></Flex>
              <Flex
                w={'95%'}
                h={'95%'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                borderRadius={'full'}
              >
                <Flex
                  w={'95%'}
                  overflow={'hidden'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  direction={'column'}
                  gap={['10px', '10px', '20px', '20px']}
                ></Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            className="back"
            justifyContent={'center'}
            alignItems={'center'}
            bg={'gray.100'}
            borderRadius={'full'}
            position={'absolute'}
            w={'100%'}
            h={'100%'}
            backfacevisibility={'hidden'}
            direction={'column'}
            bgColor={'purple.200'}
            textAlign={'center'}
            gap={'10px'}
            p={'10px'}
          >
            <Text fontSize={'xl'}>Hi there!</Text>
            <Text fontSize={'lg'}>Join us to celebrate our love and new beginnings.</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex p={'5px 0px'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Text fontSize={['large', 'large', 'x-large', 'x-large']}>Person Name</Text>
        
      </Flex>
    </Flex>
  );
};

export default FlipBrideOrGroom;
