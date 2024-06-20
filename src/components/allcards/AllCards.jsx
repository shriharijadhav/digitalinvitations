import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, IconButton, Button, Image,InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChat, BiLike, BiShare } from 'react-icons/bi';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';

import { BsCalendar2Heart } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { RxIdCard } from "react-icons/rx";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

import { AiOutlineIdcard } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';





const AllCards = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const allCardsData = useSelector((store) => store.allCardsData)
    console.log(allCardsData)
  return (
    <Flex w={'100%'} alignItems={'center'} justifyContent={'center'} p={'30px 0px'} >
              {
                allCardsData.length >0 && (
                    <Grid  w={'90%'}  gap={'30px'} templateRows={'auto'}   templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}>
                    {
                        allCardsData.map(item =>(
                            <GridItem maxW={'380px'}  key={item.cardId} >
                                <Card w={'100%'}>
                                <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>  
                                    <Box>
                                        <Heading size='sm'>{item?.groomDetails?.firstName} & {item?.brideDetails?.firstName} </Heading>
                                        <Text>{item?.eventDetails?.eventName} Invitation Card</Text>
                                    </Box>
                                    </Flex>
                                    <Menu placement='left-start'>
                                            <MenuButton
                                            as={IconButton}
                                            aria-label='Options'
                                            icon={<BsThreeDotsVertical />}
                                            variant='outline'
                                        />
                                    <MenuList >
                                        <MenuItem>View Card</MenuItem>
                                        <MenuItem>Share Card</MenuItem>
                                        <MenuItem>RSVP Responses</MenuItem>
                                    </MenuList>
                                    </Menu>
                                </Flex>
                                </CardHeader>
                                <CardBody w={'100%'}>
                                    
                                <Flex w={'100%'} direction={'column'} gap={'10px'}>
                                    <Flex alignItems={'center'} gap={'10px'} justifyContent={'left'}>
                                        <BsCalendar2Heart size={'22px'}/>
                                        <Text>Event Date :</Text>
                                        <Text>{item.eventDetails.date}</Text>
                                    </Flex>
                                    <Flex alignItems={'center'} gap={'10px'} justifyContent={'left'}>
                                        <RxIdCard size={'25px'}/>
                                        <Text>Card Status:</Text>
                                        <Text>{item.cardStatus}</Text>
                                    </Flex>
                                    <Flex alignItems={'center'} gap={'10px'} justifyContent={'left'}>
                                        <RiMoneyRupeeCircleLine size={'25px'}/>
                                        <Text>Payment Status:</Text>
                                        <Text>{item.paymentStatus}</Text>
                                    </Flex>
                                </Flex>
                                <Flex w={['100%','90%','90%','90%']} pt={'20px'} direction={'column'} gap={'10px'}>
                                <Text>Invitation Link:</Text>
                                <Flex w={'100%'} fontSize={'sm'}  cursor={'pointer'} borderRadius={'5px'} overflow={'hidden'}>
                                    <InputGroup >
                                        <Input
                                        overflowX={'scroll'}
                                        p={'5px 10px'}
                                        bg={'lightgrey'}
                                        cursor={'pointer'}
                                        color={'black'}
                                        readOnly={true}
                                        value={`${BASE_URL}/${item.cardId}/${item.cardLink}`}
                                        />
                                        <InputRightElement w={'80px'}  >
                                            <Flex h={'100%'} mr={'-5px'} alignItems={'center'} justifyContent={'center'} bg={'red'} p={'0px 20px'}>
                                                COPY
                                            </Flex>
                                        </InputRightElement>
                                </InputGroup>
                                </Flex>
                                </Flex>
                                
                                </CardBody>
                                
                                <CardFooter
                                justify='space-between'
                                flexWrap='wrap'
                                sx={{
                                    '& > button': {
                                    minW: '136px',
                                    },
                                }}
                                >
                                <Flex gap={'10px'} w={'90%'} alignContent={'center'}>
                                    <Link to={`/dashboard/edit/${item.cardId}`}>
                                        <Button flex='1' variant='outline' leftIcon={<FaRegEdit />}>
                                         Edit Card
                                        </Button>
                                    </Link>
                                
                                    <Button flex='1' variant='outline' leftIcon={<FaEye />}>
                                    Preview
                                    </Button>
                                </Flex>
                                </CardFooter>
                                </Card>
                            </GridItem>
                        ))
                    }
                    </Grid>
                )
             }
                 
      </Flex>
  )
}

export default AllCards
