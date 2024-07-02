import { Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const BrideOrGroom = ({fullName,person,socialLinkArray,imageUrl=`https://api.dicebear.com/9.x/fun-emoji/svg?seed=Annie`}) => {

  const safeArray = Array.isArray(socialLinkArray) ? socialLinkArray : [];
  const [instagramUrl = '', facebookUrl = '', youtubeUrl = ''] = safeArray;

  return (
    <Flex w={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    <Flex position={'relative'}  zIndex={20} w={['210px','230px','250px','280px']} h={['210px','230px','250px','280px']}   >
    <Flex border={'1px solid white'} position={'absolute'} borderColor={'red.400'} h={['45px','50px','58px','64px']} right={0} top={0}  zIndex={10}  transform="rotate(45deg)"   transformOrigin={'top right'}></Flex>
    <Flex border={'1px solid white'} position={'absolute'} borderColor={'red.400'} h={['45px','50px','58px','64px']} left={0} bottom={0}  zIndex={10}  transform="rotate(45deg)"   transformOrigin={'bottom left'}></Flex>
    <Flex justifyContent={'center'} alignItems={'center'} position={'absolute'} w={'100%'} h={'100%'} bg={'gray'} outline={'1px solid white'} zIndex={20} outlineOffset={'-8px'} borderRadius={'full'}
    backgroundImage={`url(${imageUrl})`}
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
    <Text fontSize={['large','large','x-large','xx-large']} fontWeight={'500'}>{fullName}</Text>
    <Text  fontSize={['large','large','large','large']}>The {person}</Text>
    <Flex gap={'10px'} p={'5px 0px'} color={'black'}>
     
          <IconButton
              icon={<FaInstagram color='red' size={['70%']} />}
              title='Instagram'
              isRound="true"
              onClick={() => instagramUrl.length>0 ? window.open(instagramUrl, '_blank'):''}
          />
          <IconButton 
            icon={<FaFacebook color='blue' size={['70%']}/>}
            title='Facebook'   
            isRound="true"
            onClick={() => facebookUrl.length>0 ? window.open(facebookUrl, '_blank'):''} />

            <IconButton 
            icon={<FaYoutube color='red' size={['70%']}/>}
            title='Youtube'   
            isRound="true"
            onClick={() => youtubeUrl.length>0 ? window.open(youtubeUrl, '_blank'):''} />

    </Flex>
    </Flex>

</Flex>
  )
}

export default BrideOrGroom
