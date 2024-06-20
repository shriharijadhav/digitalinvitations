import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import AllCards from '../allcards/AllCards'
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
 
const Dashboard = () => {
  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
    <Flex w={['90%','90%','90%','90%']} justifyContent={'center'} alignItems={'center'} pt={'50px'} pb={'10px'}>
        <Link to={'/dashboard/createNewCard'}>
        <Button display={'flex'} gap={'10px'} justifyContent={'center'} alignItems={'center'} title='Click to create new card'>Add new Card <IoMdAdd/></Button>
        </Link>
    </Flex>
    <Flex w={['90%','90%','90%','90%']} justifyContent={'center'} alignItems={'center'}>
        <AllCards/>
    </Flex>

    
      
    </Flex>
  )
}

export default Dashboard
