import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import P_FlipBrideOrGroom from './P_FlipBrideOrGroom'


const P_RepeatParents = ({memberArray,side}) => {
  return (
    <Flex w={'100%'} direction={'column'} justifyContent={'center'} p={'20px 0px'} gap={'20px'}  alignItems={'center'}>
    <Flex>        
    <Text  color={'gray.600'} borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.600'} fontWeight={'500'} fontSize={['large','x-large','x-large','x-large']} p={'0px 5px'}>{side}'s Family</Text>
    </Flex>
    <Flex  w={'100%'} direction={['column','column','row','row']} justifyContent={'center'} p={'20px 0px'} gap={'20px'}  alignItems={'center'}>
      {
        memberArray.length >0 && (
          <Grid m={'auto'} w={'100%'} templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(auto,1fr)"]}>
            {
              memberArray.map((item,index)=>(
                <GridItem key={index}>
                  <P_FlipBrideOrGroom singleMember={item} />
                </GridItem>
              ))            }

        </Grid>
        )
      }
    </Flex>
</Flex>        

  )
}

export default P_RepeatParents
