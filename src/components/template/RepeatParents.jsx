import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import FlipBrideOrGroom from './FlipBrideOrGroom'

const RepeatParents = () => {
  return (
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

  )
}

export default RepeatParents
