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
        <Flex w={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Flex p={'20px'} flexWrap={'wrap'} gap={'30px'} h={'100px'} justifyContent={'center'} height={'auto'} alignItems={'center'} bg={'rebeccapurple'}>
            <Flex direction={'column'} position={'relative'} pr={'10px'}>
                <Text>{formattedValue(timeRemaining.days)}</Text>
                <Text>days</Text>
                <Box  position="absolute"
                mt="auto"
                right={0}
                top="50%"
                transform={["translateY(-50%) rotate(0deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)"]}
                transformOrigin="right bottom"
                h={["90%","50%","50%","50%"]}
                borderRight="1px solid black"></Box>
            </Flex>
            <Flex direction={'column'} position={'relative'} pr={'10px'}>
                <Text>{formattedValue(timeRemaining.hours)}</Text>
                <Text>hours</Text>
                <Box  position="absolute"
                mt="auto"
                right={0}
                top="50%"
                transform={["translateY(-50%) rotate(0deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)"]}
                transformOrigin="right bottom"
                h={["90%","50%","50%","50%"]}
                borderRight="1px solid black"></Box>
            </Flex>
            <Flex direction={'column'} position={'relative'} pr={'10px'}>
                <Text>{formattedValue(timeRemaining.minutes)}</Text>
                <Text>mins</Text>
                <Box  position="absolute"
                mt="auto"
                right={0}
                top="50%"
                transform={["translateY(-50%) rotate(0deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)","translateY(-50%) rotate(15deg)"]}
                transformOrigin="right bottom"
                h={["90%","50%","50%","50%"]}
                borderRight="1px solid black"></Box>
            </Flex>
            <Flex direction={'column'} position={'relative'} pr={'10px'}>
                    <Text>{formattedValue(timeRemaining.seconds)}</Text>
                    <Text>secs</Text>
            </Flex>
            </Flex>
        {
            timeRemaining.eventEnded && (
                <Text>Event has come to an end.</Text>
            )
        }
        </Flex>
        
    );
}


export default CountdownTimer;
