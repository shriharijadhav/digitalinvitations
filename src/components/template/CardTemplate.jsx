import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MySlider from './MySlider'
import '../../App.css'
import SectionOne from './SectionOne'

const CardTemplate = () => {

  const preference = 'bride'
  const brideFirstName = 'Bride'
  const groomFirstName = 'Groom'
  return (
    <Flex direction={'column'} w={'100%'}>
      <SectionOne/>
    </Flex>

  )
}

export default CardTemplate
