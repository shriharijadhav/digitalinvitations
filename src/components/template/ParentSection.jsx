import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import BrideOrGroom from './BrideOrGroom'
import CountdownTimer from './CountdownTimer'
import FlipBrideOrGroom from './FlipBrideOrGroom'
import RepeatParents from './RepeatParents'
 
const ParentSection = () => {
    
    
    
  return (
    <Flex w={'100%'}  color={'black'} justifyContent={'center'} alignItems={'center'} bg={'#faf5fa'}>
        <Flex w={['90%','90%','70%','70%']} direction={'column'} justifyContent={'center'} alignItems={'center'} p={'40px 0px'}>
        
            <Flex p={'20px 0px'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'10px'}>
            <Text  color={'gray.600'}   borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>The Heart and Soul of Our Family</Text> 
             </Flex>
            <RepeatParents/>
            
            <RepeatParents/>

            
        </Flex>
    </Flex>
  )
}

export default ParentSection
