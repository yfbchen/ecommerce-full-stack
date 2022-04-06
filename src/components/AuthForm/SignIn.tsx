import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth, logInWithEmailAndPassword } from 'firebaseUtils/firebase-utils'
import ROUTES from 'lib/routes'

const SignIn = () => {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  const handleOnEmailChange = (event: any) => setEmail(event.target.value)

  const handleOnPasswordChange = (event: any) => setPassword(event.target.value)

  const handleOnSubmit = (event: any) => {
    event.preventDefault()

    logInWithEmailAndPassword(email, password)
  }

  React.useEffect(() => {
    if (loading) return

    if (user) navigate(ROUTES.HOME)
  }, [user, loading, navigate])

  return (
    <div>
      <h2>Sign In To Your Account</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          onChange={handleOnEmailChange}
          type="email"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          onChange={handleOnPasswordChange}
          type="password"
          value={password}
        />

        <button type="submit">Sign In</button>
      </form>
      <Link to={ROUTES.REGISTER}>Create Account</Link>
    </div>
  )
}

export default SignIn
