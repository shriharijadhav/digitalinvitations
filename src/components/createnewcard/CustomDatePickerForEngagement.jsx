import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import '../../App.css'



const CustomDatePickerForEngagement = ({setShowDatePickerForEngagement,selectedForEngagement,setSelectedForEngagement}) => {
    
    return (
        <Flex position={'absolute'} left={-1} top={-1} bg={'#1A202C'} border={'1px solid gray'} zIndex={10} >
        <DayPicker fromDate={new Date()} onDayClick={()=>{setShowDatePickerForEngagement(false)}} className='myClass'  mode="single" selected={selectedForEngagement} onSelect={setSelectedForEngagement} />
        </Flex>
    );
}

export default CustomDatePickerForEngagement
