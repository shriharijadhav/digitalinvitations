import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import SideDrawer from './SideDrawer';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiHomeHeartFill } from 'react-icons/ri';
// import CircularImage from './CircularImage';
// import Resume from './Resume';
// import linkedInImg from '../../images/linkedIn.svg'
// import githubImg from '../../images/github.svg'
// import twitterImg from '../../images/twitter.svg'
// import resumeDownload from '../../images/resumeDownload.svg'
// import harryLogo from '../../images/shrihariLogo.png'
// import myLogo from '../../images/myLogo.png'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const DefaultNavbar = () => {
 
  return (
    <Flex w={'100%'} bg={'yellow.400'} justifyContent={'center'} p={'5px 0px'} alignItems={'center'}> 
        <Flex w={['95%','90%','90%','85%']} bg={'red.300'} p={['1rem 0rem','1rem 0rem','1rem 0rem','1rem 0rem']} justifyContent={'space-between'} alignItems={'center'}>
            <Flex p={'0px 20px'}>
                <Text cursor={'pointer'}>Digital Invitations</Text>
            </Flex>
            <Flex p={'0px 20px'} gap={'30px'} display={['none','none','flex','flex']}>
                <Flex w={'90%'} fontSize={'lg'} gap={'5px'} alignItems={'center'}  cursor={'pointer'} _hover={{textDecor:'underline',textUnderlineOffset:'5px'}}>
                    <RiHomeHeartFill/>
                    <Link to={'/'} >Home</Link>
                </Flex>                
                <Flex w={'90%'} fontSize={'lg'} gap={'5px'} alignItems={'center'}  cursor={'pointer'} _hover={{textDecor:'underline',textUnderlineOffset:'5px'}}>
                    <MdOutlineDashboard/>
                    <Link to={'/dashboard'} >Dashboard</Link>
                </Flex>

                <Flex w={'90%'} fontSize={'lg'} gap={'5px'} alignItems={'center'}  cursor={'pointer'} _hover={{textDecor:'underline',textUnderlineOffset:'5px'}}>
                    <Text>Logout</Text>
                    <RiLogoutBoxRLine/>
                </Flex>
            </Flex>

            <Flex display={['flex','flex','none','none']} p={'0px 5px'}>
            <SideDrawer/>
            </Flex>

        </Flex>
    </Flex>
  )
};

export default DefaultNavbar;
