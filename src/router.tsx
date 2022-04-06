import { Route, Routes } from 'react-router-dom'

import ROUTES from 'lib/routes'

import Checkout from 'pages/Checkout'
import Contact from 'pages/Contact'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Shop from 'pages/Shop'

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.HOME} element={<Shop />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.SHOP} element={<Shop />} />
    </Routes>
  )
}

export default Router
