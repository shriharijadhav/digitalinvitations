import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import MySlider from './MySlider'
import '../../App.css'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import Gallery from './Gallery'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import ScrollToTopButton from './scrollToTop'
import FlipBrideOrGroom from './FlipBrideOrGroom'
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'
import ParentSection from './ParentSection'

const CardTemplate = () => {

  return (
    <Flex direction={'column'} w={'100%'} bg={'white'} className='custom-cursor'>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <ParentSection/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <ScrollToTopButton/>
    </Flex>

  )
}

export default CardTemplate
