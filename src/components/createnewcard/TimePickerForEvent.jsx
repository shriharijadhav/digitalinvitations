import React, { useState } from 'react';
import { ChakraProvider, FormControl, FormLabel, Select, Box, VStack, Heading, Button, useToast, Flex, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { saveEventTime } from '../../store/actions';

const TimePickerForEvent = ({onClose}) => {
    const [selectedHour, setSelectedHour] = useState('');
    const [selectedMinute, setSelectedMinute] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const toast = useToast();

    const dispatch = useDispatch()

    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
    const periods = ['AM', 'PM'];

    const customToast2 = (message)=>{
        toast({
            title: 'Time Selected',
            description: `You selected ${selectedTime}`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    }

    const handleSelect = () => {
        if (!selectedHour) {
            alert('Please select an hour.')
            return;
        }
        if (!selectedMinute) {
            alert('Please select a minute.')
            return;
        }
        if (!selectedPeriod) {
            alert('Please select a period.')
            return;
        }

        const selectedTime = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
        dispatch(saveEventTime(selectedTime))
        onClose()
        
        
    };

    return (
             <Flex direction={'column'} gap={'40px'}  w={['100%','80%','80%','80%']}  borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} boxShadow="md" mt={5}>
                <Flex w={'100%'} direction={'column'} spacing={4}>
                    <Text p={'10px 0px'} fontSize={['large','large','x-large','x-large']} fontWeight={['500','500','700','700']}> Select Event Time
                    </Text>
                    <FormControl p={'5px 0px'}>
                        <FormLabel>Hour</FormLabel>
                        <Select placeholder="Select hour" value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)}>
                            {hours.map((hour) => (
                                <option key={hour} value={hour}>
                                    {hour}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl p={'5px 0px'}>
                        <FormLabel>Minute</FormLabel>
                        <Select placeholder="Select minute" value={selectedMinute} onChange={(e) => setSelectedMinute(e.target.value)}>
                            {minutes.map((minute) => (
                                <option key={minute} value={minute}>
                                    {minute}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl p={'5px 0px'}>
                        <FormLabel>Period</FormLabel>
                        <Select placeholder="Select period" value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
                            {periods.map((period) => (
                                <option key={period} value={period}>
                                    {period}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                   
                </Flex>
                <Button colorScheme="purple" onClick={handleSelect}>
                Select time
            </Button>
            </Flex>
     );
};

export default TimePickerForEvent;
