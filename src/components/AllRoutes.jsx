import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './homepage/Homepage'
import Dashboard from './dashboard/Dashboard'
import EditCard from './editcard/EditCard'
import PageNotFound from './pagenotfound/PageNotFound'
import CreateNewCard from './createnewcard/CreateNewCard'
 import CardTemplate from './template/CardTemplate'

const AllRoutes = () => {
  return (
    <Flex w={'100%'}>
      <Routes>
          <Route path='/' element={<Layout />}>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/dashboard/edit/:cardId' element={<EditCard />}></Route>
                <Route path='/dashboard/createNewCard' element={<CreateNewCard />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
          </Route>
          <Route path='/:url' element={<CardTemplate />}></Route>

      </Routes>
    </Flex>
  )
}

export default AllRoutes
