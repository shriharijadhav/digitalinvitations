import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex w={'100%'} alignItems={'center'} justifyContent={'center'} bg={'gray.400'}>
      <Flex w={['90%','90%','90%','85%']} justifyContent={'center'}> 
      <Text fontSize="sm" textAlign="center" mt={4}>
    &copy; 2024 Digital Invitations
  </Text>

      </Flex>
    </Flex>
  )
}

export default Footer
