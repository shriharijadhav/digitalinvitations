import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import C_Link from './C_Link'
import C_SelectTemplate from './C_SelectTemplate'
import { resetCurrentPageToOne, resetTempNewCardData } from '../../store/actions'
import C_BrideAndGroomDetails from './C_BrideAndGroomDetails'
import C_CoverImages from './C_CoverImages'
import C_EngagementDetails from './C_EngagementDetails'
import C_SangeetDetails from './C_SangeetDetails'
import C_HaldiDetails from './C_HaldiDetails'
import C_ParentDetails from './C_ParentDetails'

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
        else if(currentPage === 4){
            return <C_ParentDetails/>
        }
        else if(currentPage === 5){
            return <C_CoverImages/>
        }else if(currentPage === 6){
            return <C_EngagementDetails/>
        }else if(currentPage === 7){
            return <C_SangeetDetails/>
        }else if(currentPage === 8){
            return <C_HaldiDetails/>
        }
    }
     
  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Flex w={['90%','90%','80%','80%']}   p={'30px 0px'} justifyContent={'center'} alignItems={'center'} direction={'column'}> 
            
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
