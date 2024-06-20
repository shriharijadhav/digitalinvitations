import React, { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Button,
    useDisclosure,
    Input,
    Text,
    Divider,
  } from '@chakra-ui/react'
  
import { RiHomeHeartFill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineCopyright } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';



const SideDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const currentYear = new Date().getFullYear();

    const [windowWidth,setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => {
        const newWindowWidth = window.innerWidth;
        if(windowWidth < 768 && newWindowWidth >= 768 && isOpen){
            onClose();
        }
        setWindowWidth(newWindowWidth)
      }

      window.addEventListener('resize', handleResize);

    
      return () => {
        window.removeEventListener('resize', handleResize);
    }
    }, [windowWidth, isOpen, onClose])
    

  return (
    <Flex >
    <Flex
    borderRadius={'5px'}
    border={'1px solid lightgrey'}
    ref={btnRef} onClick={onOpen}
    p={'3px'}
  >
  <RxHamburgerMenu size={'25px'} />
    
  </Flex>
     
  <Drawer
  
    isOpen={isOpen}
    placement='right'
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent  w={'100px'}  >
      <DrawerCloseButton />
      <DrawerHeader>Digital Invitations</DrawerHeader>

      <DrawerBody  >
        
        

        <Link to={'/'} >
            <Flex w={'90%'} p={'10px 0px'} fontSize={'lg'} gap={'10px'} alignItems={'center'}  cursor={'pointer'} onClick={onClose}>
                <RiHomeHeartFill/>
                <Text>Home</Text>
            </Flex>
        </Link>
        <Divider/>

        <Link to={'/dashboard'} >
            <Flex w={'90%'} p={'10px 0px'} fontSize={'lg'} gap={'10px'} alignItems={'center'}  cursor={'pointer'} onClick={onClose}>
                <MdOutlineDashboard/>
                <Text >Dashboard</Text>
            </Flex>
        </Link>
        <Divider/>

        
        <Flex w={'90%'} p={'10px 0px'} fontSize={'lg'} gap={'10px'} alignItems={'center'} cursor={'pointer'}>
            <TbLogout2 size={'20px'}/>
            <Text>Logout</Text>
        </Flex>
                 
        <Divider/>
        
        <Divider/>

      </DrawerBody>

      <DrawerFooter>
        <Flex alignItems={'center'} fontSize={'sm'} w={'100%'}>
            <MdOutlineCopyright/>
            <Text pl={'5px'}>{currentYear} Digital Invitations.</Text>

        </Flex>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
    </Flex>
  )
}

export default SideDrawer
