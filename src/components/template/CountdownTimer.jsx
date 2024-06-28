import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDateTime }) {
    const calculateTimeRemaining = () => {
        const target = new Date(targetDateTime).getTime();
        const now = new Date().getTime();
        const difference = target - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                eventEnded: true,
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
            eventEnded: false,
        };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timerId);
    }, [targetDateTime]);


    const formattedValue = (value) =>{
        if(value === 0){
            return `00`
        }else if(value < 10){
            return `0${value}`
        }else{
            return value
        }
    }
    return (
        <Flex w={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'} fontSize={['medium','large','larger','x-large']}>
            <Flex p={'20px'} flexWrap={'wrap'} gap={'15px'}  justifyContent={'center'} height={'auto'} alignItems={'center'} >
            <Flex  justifyContent={'center'} alignItems={'center'}  direction={'column'} position={'relative'} p={'0px 15px'} pr={'25px'} >
                <Text fontSize={'xx-large'}>{formattedValue(timeRemaining.days)}</Text>
                <Text>days</Text>
                <Box  position="absolute"
                mt="auto"
                right={0}
                top="50%"
                transform={["translateY(-50%) rotate(0deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)"]}
                transformOrigin="right bottom"
                h={["90%","40%","40%","40%"]}
                borderRight="1px solid black"></Box>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'}  direction={'column'} position={'relative'} p={'0px 15px'} pr={'25px'}>
                <Text fontSize={'xx-large'}>{formattedValue(timeRemaining.hours)}</Text>
                <Text>hours</Text>
                <Box  position="absolute"
                mt="auto"
                right={0}
                top="50%"
                transform={["translateY(-50%) rotate(0deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)"]}
                transformOrigin="right bottom"
                h={["90%","40%","40%","40%"]}
                borderRight="1px solid black"></Box>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}  position={'relative'} p={'0px 15px'} pr={'25px'}>
                <Text fontSize={'xx-large'}>{formattedValue(timeRemaining.minutes)}</Text>
                <Text >mins</Text>
                <Box  position="absolute"
                mt="auto"
                right={0}
                top="50%"
                transform={["translateY(-50%) rotate(0deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)"]}
                transformOrigin="right bottom"
                h={["90%","40%","40%","40%"]}
                borderRight="1px solid black"></Box>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'}  direction={'column'} position={'relative'} p={'0px 15px'} pr={'25px'}>
                    <Text fontSize={'xx-large'}>{formattedValue(timeRemaining.seconds)}</Text>
                    <Text>secs</Text>
            </Flex>
            </Flex>
            <Flex justifyContent={'center'} textAlign={'center'} alignItems={'center'} w={'100%'} p={'15px 0px'}>
            {
                timeRemaining.eventEnded ? (
                    <Text>Event has come to an end.</Text>
                ):(
                    <Text >Counting down the moments until our hearts entwine in the celebration of love.</Text>
    
                )
            }
            </Flex>
        </Flex>
        
    );
}


export default CountdownTimer;
