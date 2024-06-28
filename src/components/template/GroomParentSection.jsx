import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import BrideOrGroom from './BrideOrGroom'
import CountdownTimer from './CountdownTimer'
import FlipBrideOrGroom from './FlipBrideOrGroom'
 
const GroomParentSection = () => {
    
    
    
  return (
    <Flex w={'100%'}  color={'black'} justifyContent={'center'} alignItems={'center'} >
        <Flex w={['90%','90%','70%','70%']} direction={'column'} justifyContent={'center'} alignItems={'center'} p={'40px 0px'}>
        
            <Flex p={'20px 0px'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'10px'}>
            <Text  color={'gray.600'}   borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>The Heart and Soul of Our Family</Text> 
             </Flex>
            <Flex w={'100%'} direction={['column','column','row','row']} justifyContent={'center'} p={'30px 0px'} gap={'20px'}  alignItems={'center'}>
                <Flex  w={'100%'}>
                    <FlipBrideOrGroom/>
                </Flex>
                <Flex   w={'50%'} justifyContent={'center'} alignItems={'center'}>
                    <Flex direction={'column'} w={'90%'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
                    <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>Bride's parent</Text>
                    </Flex>
                </Flex>
                <Flex  w={'100%'}>
                    <FlipBrideOrGroom/>
                </Flex>
            </Flex>
            
        </Flex>
    </Flex>
  )
}

export default GroomParentSection
