import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Nav = styled.div`
  align-items: center;
  display: flex;
  height: 75px;
  justify-content: space-between;
  margin-bottom: 20px;
`

const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
`

const NavLink = styled(Link)`
  cursor: pointer;
  margin: 20px 20px;
`

const NavOptions = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 50%;
`

export { LogoContainer, Nav, NavLink, NavOptions }
