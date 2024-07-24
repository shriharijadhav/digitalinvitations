import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const AccountVerificationSuccessful = () => {
    const isAccountVerificationSuccessful = useSelector((store)=>store.isAccountVerificationSuccessful);

    const navigator = useNavigate()

    const [proceedToLogin,setProceedToLogin] = useState(false);

    useEffect(() => {
        if(proceedToLogin){
            navigator('/login')
        }
    },[proceedToLogin])

    const handleClick = () => {
        setProceedToLogin(true);
    }

  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} direction={'column'} h={'70vh'} p={'20px 0px'}>
      {
        isAccountVerificationSuccessful?(
            <Flex w={'50%'}>
            <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            padding={'20px 0px'}
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Account verification completed !
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Dear user, your account has been verified successfully.
            </AlertDescription>
            <Button  mt={'20px'} onClick={handleClick}>Proceed to Login</Button>
          </Alert>

            </Flex>
        ):(
            <Flex>
            <Text>Account verification failed.</Text>

            </Flex>
        )
      }
    </Flex>
  )
}

export default AccountVerificationSuccessful
