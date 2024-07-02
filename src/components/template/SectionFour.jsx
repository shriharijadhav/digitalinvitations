import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Gallery from './Gallery'

const SectionFour = () => {
  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} minH={'90vh'}>
    <Flex w={'80%'} justifyContent={'center'} alignItems={'center'} direction={'column'} p={'30px 0px'} gap={'20px'}>
        <Flex pt={'20px'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'10px'}>
        <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>Gallery</Text> 
        <Text display={['flex','flex','none','none']} color={'black'}>Click on image to view in full-screen mode.</Text>           
        </Flex>
        <Flex p={'25px 0px'}   w={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Gallery/>

        </Flex>
    </Flex>
</Flex>
  )
}

export default SectionFour
