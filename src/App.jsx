 import './App.css'
import { Flex, Text, useColorMode } from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes'
import { useEffect } from 'react'

function App() {
  const {colorMode,toggleColorMode} = useColorMode()
 useEffect(()=>{
  if(colorMode === 'light'){
    toggleColorMode();
  }
 }),[]
  return (
    <Flex w={'100%'} >
    <AllRoutes/>
    </Flex>
  )
}

export default App
