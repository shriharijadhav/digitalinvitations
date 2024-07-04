import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import AudioToggleMute from './AudioToggleMute'
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const SectionSeven = () => {
  return (
    <Flex className='metal_Script' color={'black'} p={'20px 0px'} justifyContent={'center'} alignItems={'center'} w={'100%'} bg={'linear-gradient(109.6deg, rgb(238, 164, 179) 11.2%, rgb(212, 153, 234) 47.3%, rgb(150, 121, 255) 100.2%)'}>
      <Flex w={'90%'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
        <Text fontSize={'x-large'} p={'10px 0px'}>Inviter</Text>
        <Text fontSize={'large'}>Pritam Awatade</Text>
        <Flex fontSize={'large'} justifyContent={'center'} alignItems={'center'} gap={'5px'}>
          <MdCall/>
          <Text  as="a" href="tel:+919763657894">+919763657894</Text>
        </Flex>
        <Flex fontSize={'large'} justifyContent={'center'} alignItems={'center'} gap={'5px'}>
          <MdEmail/>
          <Text as="a" href="mailto:pritamawatade@gmail.com">pritamawatade@gmail.com</Text>
        </Flex>
      </Flex>
      <AudioToggleMute/>        
    </Flex>
  )
}

export default SectionSeven
