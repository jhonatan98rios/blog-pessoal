import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router, { useRouter } from 'next/router'

import { validateToken } from "services/auth/token";
import { APIClient } from "infra/http/axios";
import { login } from "services/http/Profile/client";

type User = {
  username: string;
  role: string
}

type SignInData = {
  username: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)


export function AuthContextProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    console.log('trying auth...')

    if (token) {
      console.log('trying checkIn')

      validateToken(token,
        (res) => {
          console.log('checkIn on user: ', res)
          setUser({ username: res.user, role: res.role })
          const client = APIClient.getInstance()
          client.setAuthorizationHeader(res.token)

        },
        (err: string) => {
          console.log(err)
          logout()
        }
      )
    }
  }, [])

  async function signIn({ username, password }: SignInData) {
    const res = await login({
      user: username,
      password,
    })

    if (!res?.token) {
      alert('Incorrect username/password')
      return
    }

    destroyCookie(undefined, 'nextauth.token')

    setCookie(undefined, 'nextauth.token', res.token, {
      maxAge: 60 * 60 * 24, // 1 day
    })

    const client = APIClient.getInstance()
    client.setAuthorizationHeader(res.token)
    setUser({ username: res.user, role: res.role })

    console.log('login on user: ', res.user)
  }

  function logout() {
    console.log('LOGOUT')
    const client = APIClient.getInstance()
    client.deleteAuthorizationHeader()
    destroyCookie(undefined, 'nextauth.token')

    if (user?.username) {
      client.deleteUserToken(user.username)
    }

    setUser(null)
    router.push('/login/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
