import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom';
// import Footer from './footer/Footer';
// import { Dummy } from './Dummy';
import DefaultNavbar from './navbar/DefaultNavbar';
import Footer from './footer/Footer';


const Layout = () => {
  
  return (
    <Flex w={'100%'}   direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <DefaultNavbar/>
           
        <Flex w={'100%'} >
            <Outlet/>
        </Flex>

        <Footer/>
 
   </Flex>
  )
}

export default Layout
