import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import FlipBrideOrGroom from './FlipBrideOrGroom'

const RepeatParents = ({memberArray,side}) => {
  return (
    <Flex w={'100%'} direction={'column'} justifyContent={'center'} p={'20px 0px'} gap={'20px'}  alignItems={'center'}>
    <Flex>        
    <Text    borderTop={'2px solid gray'} borderBottom={'2px solid gray'} borderColor={'gray.700'} fontWeight={'500'} fontSize={['x-large','x-large','x-large','xx-large']} className='dancing_Script' p={'0px 5px'}  color={'gray.700'}>{side}'s Family</Text>
    </Flex>
    <Flex  w={'100%'} direction={['column','column','row','row']} justifyContent={'center'} p={'20px 0px'} gap={'20px'}  alignItems={'center'}>
      {
        memberArray.length >0 && (
          <Grid m={'auto'} w={'100%'} templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(auto,1fr)"]}>
            {
              memberArray.map((item,index)=>(
                <GridItem key={index}>
                  <FlipBrideOrGroom singleMember={item} />
                </GridItem>
              ))            }

        </Grid>
        )
      }
    </Flex>
</Flex>        

  )
}

export default RepeatParents
