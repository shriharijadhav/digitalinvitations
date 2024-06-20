import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import C_Link from './C_Link'
import C_SelectTemplate from './C_SelectTemplate'
import { resetCurrentPageToOne, resetTempNewCardData } from '../../store/actions'
import C_BrideAndGroomDetails from './C_BrideAndGroomDetails'

const CreateNewCard = () => {

    const dispatch = useDispatch()

    const currentPage =useSelector(store=>store.currentPage)
    const PageDisplay = () => {
        if(currentPage === 1) {
            return <C_Link/>
        }else if(currentPage === 2){
            return <C_SelectTemplate/>
        }
        else if(currentPage === 3){
            return <C_BrideAndGroomDetails/>
        }
    }
     
  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Flex w={['90%','90%','80%','80%']} justifyContent={'center'} alignItems={'center'} direction={'column'}> 
            <Flex w={'80%'}  justifyContent={'start'} p={'20px 0px'} position={'relative'} >
                <Link to={'/dashboard'}>
                <Button  display={'flex'} gap={'10px'}
                onClick={()=>{dispatch(resetCurrentPageToOne());dispatch(resetTempNewCardData())}}
                ><IoArrowBack/>Dashboard</Button>
                </Link>
             </Flex>
            <Flex w={'80%'}  justifyContent={'center'}  position={'relative'} >
                <Text fontSize={'x-large'}>Create new Card</Text>
            </Flex>
            <Flex w={['90%','90%','60%','60%']} justifyContent={'center'}  p={'20px 0px'}>
                <Flex w={'100%'} p={'10px 0px'} justifyContent={'center'} alignItems={'center'}>
                {PageDisplay()}
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default CreateNewCard
