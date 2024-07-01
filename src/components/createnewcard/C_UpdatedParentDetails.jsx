import { AddIcon, ArrowBackIcon, ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Divider, Flex, FormControl, FormHelperText, FormLabel, IconButton, Image, Input, ListItem, Radio, RadioGroup, Select, Text, UnorderedList, useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { changePriorityBetweenFamily, clearParentDetails, deleteActualImage_brideParent, deleteActualImage_groomParent, previousPage, proceedToNextPage, toggleAddFamilyDetails } from '../../store/actions'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const C_UpdatedParentDetails = () => {
    const addFamilyDetails = useSelector(store => store.tempNewCardData.eventDetails.addFamilyDetails)
    const priorityBetweenFamily = useSelector((store) => store.tempNewCardData.eventDetails.priorityBetweenFamily)
    const dispatch = useDispatch()
    const currentPage = useSelector((store) => store.currentPage)
    const totalPages = useSelector((store) => store.totalPages)


    const toast = useToast()
    const [someFieldsAreMissing, setSomeFieldsAreMissing] = useState(false);
    const [familyMembers, setFamilyMembers] = useState([]);
    const [currentFamilyMember, setCurrentFamilyMember] = useState({
        firstName: '',
        lastName: '',
        relationship: '',
        side: '',
        actualImage: null,
    });

    const checkBeforeAddingNewMember = () => {
        let fieldsMissing = false;
        familyMembers.forEach((item) => {
            if (!item.firstName || !item.lastName || !item.relationship || !item.side || !item.actualImage) {
                fieldsMissing = true;
            }
        });
        return fieldsMissing;
    };

    const imageRef = useRef(null);

    const handleChange = (index, e) => {
        const { name, value, files } = e.target;
        const updatedFamilyMembers = [...familyMembers];
        if (files) {
            updatedFamilyMembers[index] = { ...updatedFamilyMembers[index], actualImage: files[0] };
        } else {
            updatedFamilyMembers[index] = { ...updatedFamilyMembers[index], [name]: value };
        }
        setFamilyMembers(updatedFamilyMembers);
    };

    const handleDeleteImage = (index) => {
        const updatedFamilyMembers = [...familyMembers];
        updatedFamilyMembers[index] = { ...updatedFamilyMembers[index], actualImage: null };
        setFamilyMembers(updatedFamilyMembers);
        imageRef.current.value = null;
    };

    const addFamilyMember = () => {
        if (familyMembers.length === 0 || !checkBeforeAddingNewMember()) {
            setFamilyMembers([...familyMembers, currentFamilyMember]);
            setCurrentFamilyMember({
                firstName: '',
                lastName: '',
                relationship: '',
                side: '',
                actualImage: null,
            });
            if (imageRef.current) {
                imageRef.current.value = null;
            }
        } else {
            toast({
                title: 'Incomplete Family Member Details',
                description: 'Please fill out all fields (First Name, Last Name, Relationship, Side, and Image) before adding a new family member.',
                status: 'warning',
                duration: 4000,
                isClosable: true,
            });
        }
    };

    const deleteCurrentMember = (memberIndex) => {
        let tempArray = familyMembers.filter((item,index)=> index !== memberIndex)
        setFamilyMembers(tempArray)
    }
    const toggle = () => {
        if (addFamilyDetails) {
            dispatch(toggleAddFamilyDetails(false))
            setFamilyMembers([])
        } else {
            dispatch(toggleAddFamilyDetails(true))
        }
    }

    const linkPage_handleNext = () => {
        if (!addFamilyDetails ) {
            dispatch(proceedToNextPage())  
        } else {
            if(checkBeforeAddingNewMember()){
                toast({
                    title: 'Incomplete Family Member Details',
                    description: 'Please fill out all fields (First Name, Last Name, Relationship, Side, and Image) before adding a new family member.',
                    status: 'warning',
                    duration: 4000,
                    isClosable: true,
                });
            }else{
                dispatch(proceedToNextPage())   
            }
        }
    }

    const linkPage_handlePrevious = () => {
        dispatch(previousPage())
    }

    return (
        <Flex as={'form'} w={['100%', '90%', '90%', '80%']} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
            <Flex w={'100%'} direction={'column'}>
                <UnorderedList>
                    <ListItem>
                        <Text fontSize={'lg'}>Family Details (Optional)</Text>
                    </ListItem>
                </UnorderedList>
                <Checkbox p={'15px 0px'} colorScheme='green' isChecked={addFamilyDetails} onChange={toggle} >
                    Click to {addFamilyDetails ? 'remove' : 'add'} Family Details
                </Checkbox>
            </Flex>

            {addFamilyDetails && (
                <Flex direction={'column'} w={'100%'} gap={'20px'}>
                    <Accordion w={'100%'} border={'1px solid gray'} rounded={'lg'} overflow={'hidden'} allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        <Text>Instructions to select Image</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel transition={'all'} transitionDelay={'1s'} pb={4}>
                                <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
                                    <UnorderedList>
                                        <ListItem>
                                            <Text>Select an image with a minimum resolution of 500 x 500 pixels.</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Upload image upto 8mb size only.</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text>Ensure the person is positioned at the center of the image.</Text>
                                        </ListItem>
                                    </UnorderedList>
                                </Flex>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} direction={'column'} p={'10px 10px'} borderRadius={'10px'}>
                        <Flex w={'100%'} direction={'column'} gap={'20px'} justifyContent={'left'} alignItems={'start'}>
                            <Text fontSize={'lg'}>Priority</Text>
                            <Text fontSize={'sm'}>Please choose whose family details to show first: Bride's or Groom's?</Text>
                            <Flex direction={'column'}>
                                <RadioGroup onChange={(value) => { dispatch(changePriorityBetweenFamily(value)) }} value={priorityBetweenFamily}>
                                    <Flex direction={'column'} gap={'10px'}>
                                        <Radio colorScheme='blue' value='brideFamily'>
                                            Bride's Family
                                        </Radio>
                                        <Radio colorScheme='blue' value='groomFamily'>
                                            Groom's Family
                                        </Radio>
                                    </Flex>
                                </RadioGroup>
                            </Flex>
                        </Flex>
                    </Flex>

                  

                    {familyMembers.map((member, index) => (
                        <Flex key={index} border="1px solid grey" w="100%" gap="10px" direction="column" p="10px" borderRadius="10px">
                            <Flex w="100%" direction="column" gap="20px" justifyContent="left" alignItems="start">
                                <Flex w="100%" direction="column" gap="10px">
                                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                                        <Text fontSize={'large'} fontWeight={'500'}>Member Details</Text>
                                        <IconButton colorScheme='red' icon={<DeleteIcon/>}
                                         onClick={()=>{deleteCurrentMember(index)}}
                                        />
                                    </Flex>
                                    <Divider/>
                                    <FormControl isRequired>
                                        <FormLabel >First Name</FormLabel>
                                        <Input isRequired
                                            type="text"
                                            name="firstName"
                                            placeholder="Enter first name"
                                            value={member.firstName}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input
                                            type="text"
                                            name="lastName"
                                            placeholder="Enter last name"
                                            value={member.lastName}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Relationship</FormLabel>
                                        <Input
                                            type="text"
                                            name="relationship"
                                            placeholder="Enter relationship"
                                            value={member.relationship}
                                            onChange={(e) => handleChange(index, e)}
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Side</FormLabel>
                                        <Select name="side" value={member.side} onChange={(e) => handleChange(index, e)}>
                                            <option value="" disabled>Select Side</option>
                                            <option value="bride">Bride's Family</option>
                                            <option value="groom">Groom's Family</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel p="5px 0px">Upload Family Member's Image</FormLabel>
                                        <Input variant="ghost" ref={imageRef} type="file" name="actualImage" onChange={(e) => handleChange(index, e)} />
                                        {member.actualImage && (
                                            <Flex w="max-content" p="10px 0px" direction="column" gap="5px">
                                                <Text>Family Member's Image Preview</Text>
                                                <Image
                                                    src={URL.createObjectURL(member.actualImage)}
                                                    alt="Family Member"
                                                    border="1px solid gray"
                                                    p="2px"
                                                    boxSize="150px"
                                                    objectFit="cover"
                                                    mt={2}
                                                />
                                                <Button w="max-content" onClick={() => handleDeleteImage(index)}>
                                                    Delete
                                                </Button>
                                            </Flex>
                                        )}
                                    </FormControl>
                                </Flex>
                            </Flex>
                        </Flex>
                    ))}

                      <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'5px'}>
                        <Button p={'10px'} w={'max-content'} borderRadius={'full'} colorScheme='purple' variant='solid' onClick={addFamilyMember}>
                            <AddIcon />
                        </Button>
                        <Text>Add new family member</Text>
                    </Flex>
                </Flex>
            )}

            <Flex border={'1px solid grey'} w={'100%'} gap={'10px'} p={'10px 10px'} borderRadius={'10px'}>
                <Flex gap={'20px'} w={'100%'} position={'relative'} justifyContent={'space-between'} alignItems={'center'} p={'10px 0px'}>
                    <Button fontSize={'sm'} isDisabled={currentPage > 1 ? false : true} display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'}
                        onClick={linkPage_handlePrevious}
                    >
                        <ArrowBackIcon />
                        Back
                    </Button>
                    <Text pr={'20px'} display={['none', 'none', 'flex', 'flex']}>Step {currentPage}/{totalPages}</Text>
                    <Button fontSize={'sm'} isDisabled={currentPage <= totalPages ? false : true} display={'flex'} gap={'5px'} alignItems={'center'} justifyContent={'center'}
                        onClick={linkPage_handleNext}
                    >
                        Next
                        <ArrowForwardIcon />
                    </Button>
                </Flex>
            </Flex>

            <Flex w={'100%'} gap={'10px'} justifyContent={'center'} borderRadius={'10px'}>
                <Button w={'100%'} colorScheme={'purple'} leftIcon={<FaEye />}>
                    Preview
                </Button>
            </Flex>
        </Flex>
    )
}

export default C_UpdatedParentDetails
