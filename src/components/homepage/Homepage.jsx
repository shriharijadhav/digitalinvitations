import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Button, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Homepage = () => {
  return (
    <Flex w={'100%'} justifyContent={'center'} minH={'90vh'}>
      <Flex direction={'column'} w={['80%','80%','80%','60%']} gap={'20px'} justifyContent={'center'} alignItems={'center'}>
      <Text>Dear user, currently project is in progress. </Text>
      <Text>I am currently working on migration from Node.js server to Serverless architecture.</Text>
      <Text>You can see the sample invitation by clicking below button</Text>

      <Button w={'max-content'} as={Link} href="https://digitalinvitations.vercel.app/viratwedsanushka" isExternal>
      <ExternalLinkIcon mr={2} /> Live demo
    </Button>
      </Flex>
    </Flex>
  )
}

export default Homepage
