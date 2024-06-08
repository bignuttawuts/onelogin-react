import { Button } from '@chakra-ui/react'
import { Outlet, useNavigate } from 'react-router-dom'
import { beginAuth, logout } from '../api/oidcApi'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/userSlice'

const Layout = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  const handleLogin = () => {
    beginAuth(nanoid(32), nanoid(32))
  }

  const handleLogout = () => {
    logout(user.idToken)
  }

  return (
    <>
      <Button onClick={handleBack}>Back</Button>
      {
        user ?
          <Button onClick={handleLogout}>Logout</Button>
          :
          <Button onClick={handleLogin}>Login</Button>
      }
      <Outlet />
    </>
  )

}

export default Layout