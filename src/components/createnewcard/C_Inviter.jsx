import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Checkbox, Flex, Grid, GridItem, Input, ListItem, Radio, RadioGroup, Select, Spinner, Text, Textarea, UnorderedList, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeForInviterDetails, makeEngagementAddressSameAsWedding, previousPage, proceedToNextPage, saveEngagementAddress, saveEngagementDate, saveEngagementTime, setPreviewCardData, toggleAddEngagementDetails, toggleAddInviterDetails } from '../../store/actions';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { FaCircleCheck } from "react-icons/fa6";
import CustomDatePickerForEngagement from './CustomDatePickerForEngagement';
import TimePicker from './TimePicker';
import { IoIosPaperPlane } from "react-icons/io";
import PreviewCardTemplate from '../previewcard/PreviewCardTemplate';

const C_Inviter = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showCardPreview,setShowCardPreview] = useState(false)

    const dispatch = useDispatch();
    const inviterDetails = useSelector(store => store.tempNewCardData.InviterDetails);
    const addInviterDetails = useSelector(store => store.tempNewCardData.addInviterDetails);
    const currentPage = useSelector((store) => store.currentPage);
    const totalPages = useSelector((store) => store.totalPages);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isPreviewOpen, onOpen: onPreviewOpen, onClose: onPreviewClose } = useDisclosure();

    const toast = useToast();

    const customToast = (message) => {
        toast({
            title: `${message}`,
            status: 'warning',
            position: 'bottom-center',
            isClosable: true,
        });
    }

    const linkPage_handleNext = () => {
        customToast('Please select a valid template');
    }

    const linkPage_handlePrevious = () => {
        dispatch(previousPage());
    }

    const handleToggle = () => {
        if (addInviterDetails) {
            dispatch(toggleAddInviterDetails(false));
        } else {
            dispatch(toggleAddInviterDetails(true));
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Replace with actual submission logic

        setIsSubmitting(false);
        onClose();
    };

    return (
        <Flex w={['100%', '90%', '90%', '80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
            <Flex w={'100%'} direction={'column'}>
                <UnorderedList>
                    <ListItem>
                        <Text fontSize={'lg'}>Inviter Details (Optional)</Text>
                    </ListItem>
                </UnorderedList>
                <Checkbox p={'15px 0px'} colorScheme='green' isChecked={addInviterDetails} onChange={handleToggle} >
                    Click to {addInviterDetails ? 'remove' : 'add'} Inviter Details
                </Checkbox>
            </Flex>

            {
                addInviterDetails && (
                    <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
                        <Flex w={'100%'} direction={['column', 'column', 'row', 'row']} gap={'20px'} justifyContent={'left'} alignItems={['start', 'start', 'center', 'center']}>
                            <Text w={['100%', '100%', '45%', '45%']} pr={'20px'}>First Name :</Text>
                            <Input name='firstName' onChange={(e)=>{dispatch(handleChangeForInviterDetails(e.target.name,e.target.value))}} placeholder="Enter inviter's first name" />
                        </Flex>
                        <Flex w={'100%'} direction={['column', 'column', 'row', 'row']} gap={'20px'} justifyContent={'left'} alignItems={['start', 'start', 'center', 'center']}>
                            <Text w={['100%', '100%', '45%', '45%']} pr={'20px'}>Last Name :</Text>
                            <Input name='lastName' onChange={(e)=>{dispatch(handleChangeForInviterDetails(e.target.name,e.target.value))}} placeholder="Enter inviter's last name" />
                        </Flex>
                        <Flex w={'100%'} direction={['column', 'column', 'row', 'row']} gap={'20px'} justifyContent={'left'} alignItems={['start', 'start', 'center', 'center']}>
                            <Text w={['100%', '100%', '45%', '45%']} pr={'20px'}>Email:</Text>
                            <Input name='email' onChange={(e)=>{dispatch(handleChangeForInviterDetails(e.target.name,e.target.value))}} placeholder="Enter inviter's email" />
                        </Flex>
                        <Flex w={'100%'} direction={['column', 'column', 'row', 'row']} gap={'20px'} justifyContent={'left'} alignItems={['start', 'start', 'center', 'center']}>
                            <Text w={['100%', '100%', '45%', '45%']} pr={'20px'}>Contact Number :</Text>
                            <Input name='contactNumber' onChange={(e)=>{dispatch(handleChangeForInviterDetails(e.target.name,e.target.value))}} placeholder="Enter inviter's contact number" />
                        </Flex>
                    </Flex>
                )
            }

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Submit Details</ModalHeader>
                    <ModalCloseButton isDisabled={isSubmitting} />
                    <ModalBody>
                        {isSubmitting ? (
                            <Flex h={'100%'} direction={'column'} p={'20px 0px'} justifyContent={'center'} alignItems={'center'} gap={'10px'}>
                                <Spinner size="xl" />
                                <Text>Please wait while we process your request.</Text>
                            </Flex>
                        ) : (
                            "Are you sure you want to submit your details?"
                        )}
                    </ModalBody>

                    <ModalFooter display={isSubmitting ? 'none' : 'flex'} gap={'20px'} w={'100%'} justifyContent={'center'}>
                        <Button variant="outline" colorScheme='red' onClick={onClose} isDisabled={isSubmitting}>Cancel</Button>
                        <Button colorScheme="blue" onClick={handleSubmit} isLoading={isSubmitting}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

           



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
        <Button w={'80%'} colorScheme={'purple'} onClick={()=>{
            dispatch(setPreviewCardData())
            setShowCardPreview(true)
        }}  leftIcon={<FaEye />}>
            Preview
        </Button>
        <Button w={'80%'} colorScheme={'blue'} onClick={onOpen}>
        Submit
        </Button>
   </Flex>
    

   {
    showCardPreview && (
       <Flex position="fixed"
       top="0"
       left="0"
       right="0"
       bottom="0"
       zIndex="100" w={'100%'}
       
       >
       <PreviewCardTemplate setShowCardPreview={setShowCardPreview} />
       </Flex>
    )
    }

      
    </Flex>
  )
}

export default C_Inviter
