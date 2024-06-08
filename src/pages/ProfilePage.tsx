import { useSelector } from 'react-redux'
import { selectUser } from '../store/userSlice'

const ProfilePage = () => {
  const user = useSelector(selectUser)
  return (
    <>
      Profile page {user.username}
    </>
  )

}

export default ProfilePage