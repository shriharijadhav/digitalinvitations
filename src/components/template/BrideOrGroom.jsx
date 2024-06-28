import { Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const BrideOrGroom = () => {
  return (
    <Flex w={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    <Flex position={'relative'}  zIndex={20} w={['210px','230px','250px','280px']} h={['210px','230px','250px','280px']}   >
    <Flex border={'1px solid white'} position={'absolute'} borderColor={'red.400'} h={['45px','50px','58px','64px']} right={0} top={0}  zIndex={10}  transform="rotate(45deg)"   transformOrigin={'top right'}></Flex>
    <Flex border={'1px solid white'} position={'absolute'} borderColor={'red.400'} h={['45px','50px','58px','64px']} left={0} bottom={0}  zIndex={10}  transform="rotate(45deg)"   transformOrigin={'bottom left'}></Flex>
    <Flex justifyContent={'center'} alignItems={'center'} position={'absolute'} w={'100%'} h={'100%'} bg={'gray'} outline={'1px solid white'} zIndex={20} outlineOffset={'-8px'} borderRadius={'full'}
    backgroundImage={'url(https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2021/12/255481849_268219471918936_4913651595211305236.jpg)'}
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
        <Flex w={'95%'} h={'95%'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} borderRadius={'full'} >
        <Flex w={'95%'} overflow={'hidden'} justifyContent={'center'} alignItems={'center'} direction={'column'} gap={['10px','10px','20px','20px']} >
            

        </Flex>
        </Flex>
    </Flex>
    </Flex>
    <Flex p={'5px 0px'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
    <Text fontSize={['large','large','x-large','x-large']}>Person Name</Text>
    <Text fontSize={'medium'}>The Groom</Text>
    <Flex gap={'10px'} p={'5px 0px'} color={'black'}>
      <IconButton icon={<FaInstagram color='red' size={['50%']}/>}  title='Instagram'  isRound="true" />
      <IconButton icon={<FaFacebook color='blue' size={['50%']}/>}   title='Facebook' isRound="true" />
      <IconButton icon={<FaYoutube color='red' size={['50%']}/>}  title='Youtube'  isRound="true" />
    </Flex>
    </Flex>

</Flex>
  )
}

export default BrideOrGroom
