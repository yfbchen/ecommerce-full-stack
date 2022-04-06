import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/logo.svg'
import { auth, logOutUser } from 'firebaseUtils/firebase-utils'
import ROUTES from 'lib/routes'

import { LogoContainer, Nav, NavLink, NavOptions } from './styles'

const handleLogOut = (navigate: any) => {
  logOutUser()
  navigate(ROUTES.LOGIN)
}

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <Nav>
      <LogoContainer to={ROUTES.SHOP}>
        <Logo />
      </LogoContainer>
      <NavOptions>
        <NavLink to={ROUTES.HOME}>Categories</NavLink>
        <NavLink to={ROUTES.SHOP}>Shop</NavLink>
        <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
        {auth?.currentUser ? (
          <button onClick={() => handleLogOut(navigate)}>Logout</button>
        ) : (
          <NavLink to={ROUTES.LOGIN}>Sign In</NavLink>
        )}
      </NavOptions>
    </Nav>
  )
}

export default NavBar
