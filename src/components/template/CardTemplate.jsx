import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const CardTemplate = () => {
  return (
    <Flex w={'100%'} h={'90vh'} bg={'red.100'} justifyContent={'center'} alignItems={'center'}>
        <Flex w={['90%','90%','800%','800%']} bg={'gray'} justifyContent={'center'} alignItems={'center'}>
            <Flex position={'relative'} w={'220px'} h={'220px'}  >
            <Flex border={'1px solid white'} position={'absolute'} h={'35px'} right={0} top={0}  zIndex={10}  transform="rotate(45deg)"   transformOrigin={'top right'}         bg={'green'}></Flex>
            <Flex position={'absolute'} w={'100%'} h={'100%'} bg={'red'} outline={'1px solid white'} zIndex={20} outlineOffset={'8px'} borderRadius={'full'}>
            <Flex
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="transparent"
                borderRadius="full"
                outline="1px solid white"
                outlineOffset="5px"
                zIndex="1"
                ></Flex>
            </Flex>
            </Flex>
            
        </Flex>
    </Flex>
  )
}

export default CardTemplate
