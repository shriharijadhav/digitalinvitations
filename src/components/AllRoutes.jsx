import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './homepage/Homepage'
import Dashboard from './dashboard/Dashboard'
import EditCard from './editcard/EditCard'
import PreviewCard from './previewcard/PreviewCard'
import PageNotFound from './pagenotfound/PageNotFound'
import CreateNewCard from './createnewcard/CreateNewCard'

const AllRoutes = () => {
  return (
    <Flex w={'100%'}>
      <Routes>
          <Route path='/' element={<Layout />}>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/dashboard/edit/:cardId' element={<EditCard />}></Route>
                <Route path='/dashboard/preview/:cardId' element={<PreviewCard />}></Route>
                <Route path='/dashboard/createNewCard' element={<CreateNewCard />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
          </Route>
      </Routes>
    </Flex>
  )
}

export default AllRoutes
