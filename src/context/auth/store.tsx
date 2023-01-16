import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import { checkIn, login } from '../../services/client'

import { APIClient } from "../../services/axios";

type User = {
  username: string;
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

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      console.log('try checkIn')

      checkIn(token).then(res => {

        console.log('checkIn on user: ', res.user)

        setUser({ username: res.user })
      })
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

    setCookie(undefined, 'nextauth.token', res.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    const client = APIClient.getInstance()

    client.api.defaults.headers['Authorization'] = `Bearer ${res.token}`;

    console.log('login on user: ', res.user)

    setUser({ username: res.user })
  }

  function logout() {
    destroyCookie(undefined, 'nextauth.token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}