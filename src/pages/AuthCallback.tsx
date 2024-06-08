import { Progress } from '@chakra-ui/react';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { UserProfile, setUser } from '../store/userSlice';
import { jwtDecode } from 'jwt-decode';

interface JwtProfile {
  preferred_username: string
}

export const AuthCallbackLoader = () => {
  const hash = location.hash;
  const response = queryString.parse(hash);
  if (response.error) {
    throw new Response(response.error_description as string, { status: 403 })
  }

  const idToken = response.id_token as string
  const profile: JwtProfile = jwtDecode(idToken)
  const username = profile.preferred_username
  return { username, idToken }
}

const AuthCallback = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const data = useLoaderData() as UserProfile
  useEffect(() => {
    const { username, idToken } = data
    dispatch(setUser({ username, idToken }))
    navigate('/protected', { replace: true })
  }, [data, dispatch, navigate])

  return <Progress isIndeterminate />;
}

export default AuthCallback