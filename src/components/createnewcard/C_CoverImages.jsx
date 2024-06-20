import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Flex, Grid, GridItem, ListItem, Radio, RadioGroup, Text, UnorderedList, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { previousPage, proceedToNextPage } from '../../store/actions'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  import { FaCircleCheck } from "react-icons/fa6";

const C_CoverImages = () => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedCoverId,setSelectedCoverId] = useState([1])

    const availableCovers = [
        {
            id:1,
            imgUrl:''
        },
        {
            id:2,
            imgUrl:''
        },
        {
            id:3,
            imgUrl:''
        },
        {
            id:4,
            imgUrl:''
        },
        {
            id:5,
            imgUrl:''
        },
        {
            id:6,
            imgUrl:''
        },
        {
            id:7,
            imgUrl:''
        },
        {
            id:8,
            imgUrl:''
        }
    ]
    
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('1')
    const currentPage = useSelector((store) => store.currentPage)
    const totalPages = useSelector((store) => store.totalPages)

    const customToast = (message)=>{
        toast({
            title: `${message}`,
            status: 'warning',
            position: 'bottom-center',
            isClosable: true,
          })
    }

    const linkPage_handleNext = () => {
        if(value){
        // proceed to next page - update currentPage value
        //    save data to database
        // upon successful save . re-fetch updated data from   database

        dispatch(proceedToNextPage())

        }
        else if(!value){
            customToast('Please select a valid template')
        }
    }

    const linkPage_handlePrevious = () => {
         
        dispatch(previousPage())

        
    }

  return (
    <Flex w={['100%','90%','90%','80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
    <Flex w={'100%'}>
        <UnorderedList>
            <ListItem>
            <Text fontSize={'lg'}>Cover Images Selection</Text>
            </ListItem>
        </UnorderedList>
    </Flex>
    <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
        <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
            <Text w={['100%','100%','40%','40%']} fontSize={'lg'}>Cover Image - 1</Text>
            <Text>Id of selected Cover Image : {selectedCoverId}</Text>
            <Flex w={'100%'}>
            <Button onClick={onOpen}>View Album</Button>

            <Modal  closeOnOverlayClick={false} size={'full'} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent  >
               <Flex p={'10px 0px'}   w={'100%'} justifyContent={'center'} bg={'indigo'}>
                <Flex w={'80%'} justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize={'xl'}>Select cover image</Text>
                <Button onClick={onClose}>X</Button>
                </Flex>
               </Flex>
                <ModalBody w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} pb={6}>
                    <Flex w={'80%'} bg={'rebeccapurple'} justifyContent={'center'} alignItems={'center'} p={'20px 0px'}>
                    <Grid templateColumns={'repeat(3, 1fr)'} gap={'20px'}>
                        {
                            availableCovers.map(item=>(
                                <GridItem onClick={()=>{
                                    if(selectedCoverId.includes(item.id)){
                                        console.log(item.id);
                                        const tempArray = selectedCoverId.filter(c=>c!== item.id);
                                        setSelectedCoverId(tempArray)
                                    }else{
                                        if(selectedCoverId.length <3 ){
                                            setSelectedCoverId(prev=>([...prev,item.id]))
                                        }else{
                                            customToast('You can select only 3 images at once')
                                        }
                                    }
                                }} key={item.id} cursor={'pointer'} rounded={'md'} w={'300px'} bg={'beige'} h={'200px'} position={'relative'}>A
                                    <Flex position={'absolute'} p={'5px'} bottom={5} right={5}>
                                    {
                                        selectedCoverId.includes(item.id) && (
                                            <FaCircleCheck size={'30px'} color='teal' />
                                        )
                                    }
                                    </Flex>
                                </GridItem>
                            ))
                        }
                    </Grid>
                    </Flex>
                </ModalBody>
      
                <ModalFooter gap={'20px'}>
                  
                  <Button onClick={onClose}>Cancel</Button>
                  <Button colorScheme='blue' mr={3} 
                  
                  onClick={() => {
                    console.log('selectedCoverId',selectedCoverId);
                    onClose();
                  }}
                  >
                    Select
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </Flex>
        </Flex>
    </Flex>

    <Flex border={'1px solid grey'} w={'100%'} gap={'10px'}  p={'10px 10px'} borderRadius={'10px'}>
           <Flex  gap={'20px'}  w={'100%'} position={'relative'} justifyContent={'space-between'} alignItems={'center'} p={'10px 0px'}>
            <Button fontSize={'sm'}  isDisabled={currentPage> 1? false:true} display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'}
            onClick={linkPage_handlePrevious}
            >
            <ArrowBackIcon/>
                Back
            </Button>
                <Text pr={'20px'} display={['none','none','flex','flex']}>Step {currentPage}/{totalPages}</Text>
            <Button fontSize={'sm'} isDisabled={currentPage<=totalPages? false:true}   display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'}
            
            onClick={linkPage_handleNext}
            >
                Next
                <ArrowForwardIcon/>
            </Button>
            </Flex>
        </Flex>

    <Flex  w={'100%'} gap={'10px'} justifyContent={'center'}  borderRadius={'10px'}>
     <Button w={'100%'} colorScheme={'purple'}  leftIcon={<FaEye />}>
        Preview
    </Button>
    </Flex>

      
    </Flex>
  )
}

export default C_CoverImages
