import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Cartpage from '../pages/member/Cartpage'
import Checkoutpage from '../pages/member/Checkoutpage'
import Booksdetailpage from '../pages/BookDetailpage'
import Bookspage from '../pages/Bookspage'
import Homepage from '../pages/Homepage'
import Notfoundpage from '../pages/Notfoundpage'
import Mycoursespage from '../pages/member/Mycoursespage'
import Coursemodulepage from '../pages/member/Coursemodulepage'
import Loginpage from '../pages/Loginpage'

function index() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index={true} path='/' element={<Homepage />} />
        <Route path='/books'>
          <Route index={true} element={<Bookspage />} />
          <Route path=':slug' element={<Booksdetailpage />} />
        </Route>
        <Route path='/cart' element={<Cartpage />} />
        <Route path='/checkout' element={<Checkoutpage />} />
        <Route path='/my-courses'>
          <Route index={true} element={<Mycoursespage />} />
          <Route path=':slug' element={<Coursemodulepage />} />
        </Route>
      </Route>
      <Route path='/sign-in' element={<Loginpage />} />
      <Route path='/*' element={<Notfoundpage />} />
    </Routes>
  )
}

export default index