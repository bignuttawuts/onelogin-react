import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/userSlice'

interface Props {
  page: ReactNode
}

const Protected = ({ page }: Props) => {
  const user = useSelector(selectUser)
  if (!user) {
    throw new Response("User not login", { status: 403 })
  }

  return page
}

export default Protected