import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import '../../App.css'



const CustomDatePicker = ({setShowDatePicker,selected,setSelected}) => {
    
    return (
        <Flex position={'absolute'} left={-1} top={-1} bg={'#1A202C'} border={'1px solid gray'} zIndex={10} >
        <DayPicker fromDate={new Date()} onDayClick={()=>{setShowDatePicker(false)}} className='myClass'  mode="single" selected={selected} onSelect={setSelected} />
        </Flex>
    );
}

export default CustomDatePicker
