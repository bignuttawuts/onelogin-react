import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserProfile {
  username: string
  idToken: string
}


export interface UserState {
  user?: UserProfile
}

const initialState: UserState = {
  user: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectUser = (state: any) => state.user.user

export default userSlice.reducer