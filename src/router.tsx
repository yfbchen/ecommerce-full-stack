import { Route, Routes } from 'react-router-dom'

import ROUTES from 'lib/routes'

import Checkout from 'pages/Checkout'
import Home from 'pages/Home'
import Shop from 'pages/Shop'

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={Home} />
      <Route path={ROUTES.CHECKOUT} element={Checkout} />
      <Route path={ROUTES.SHOP} element={Shop} />
    </Routes>
  )
}

export default Router
