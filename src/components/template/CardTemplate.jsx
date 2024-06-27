import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MySlider from './MySlider'
import '../../App.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

const CardTemplate = () => {

  return (
    <Flex direction={'column'} w={'100%'} bg={'white'} className='custom-cursor'>
      <SectionOne/>
      <SectionTwo/>
    </Flex>

  )
}

export default CardTemplate
