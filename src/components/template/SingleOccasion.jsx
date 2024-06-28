import { Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'

const SingleOccasion = ({eventName,cardImageUrl,eventDate,eventTime,eventAddress}) => {
  return (
    <GridItem m={'auto'}  p={'20px'} _hover={{transform:'scale(1.02)',transition:'all ease-in-out 0.2s',shadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px',cursor:'pointer'}} w={'100%'} minH={'400px'} maxW={'300px'} rounded={'lg'} bg={'#c9b5d8'} color={'black'} display={'flex'} flexDirection={'column'} overflow={'hidden'} gap={'20px'}>
        <Flex w={'100%'} h={'200px'} backgroundImage={`url("${cardImageUrl}")`} outline={'1px solid white'} rounded={'xl'} outlineOffset={'-5px'}  backgroundSize={'cover'}></Flex>
        <Flex w={'100%'}  p={'0px 10px'} flexWrap={'wrap'} gap={'20px'} direction={'column'}>
                <Text fontSize={'xl'}>{eventName}</Text>
            <Flex  flexWrap={'wrap'} direction={'column'} gap={'10px'}>
                <Flex alignItems={'center'} gap={'5px'}>
                    <IoMdTime size={'20px'} />
                    <Text>{eventDate} | {eventTime}</Text>
                </Flex>
                <Flex alignItems={'center'} gap={'5px'} flexWrap={'wrap'}>
                    <IoLocationOutline size={'20px'} />
                    <Text>{eventAddress}</Text>
                </Flex>

            </Flex>
        </Flex>
    </GridItem>
  )
}

export default SingleOccasion
