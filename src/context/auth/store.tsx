import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useRouter } from 'next/router'

import { LoginService } from "services/http/Profile/LoginService";
import Notification from "infra/errors/Notification";
import { AxiosHttpClient } from "infra/http/AxiosHttpClient";
import { CheckInService } from "services/http/Profile/CheckInService";

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
  login: (data: SignInData) => Promise<void>
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
      console.log('trying checkIn...')
      checkin(token)
    }
  }, [])


  async function checkin(token) {
    /*
    It's called when the page loads.
    Should use the token stored on cookies to authenticate the user
    */

    const httpClient = AxiosHttpClient.getInstance()
    const notification = new Notification()
    const checkinService = new CheckInService(httpClient, notification)
    const res = await checkinService.execute(token)

    if (res) {
      console.log('checkIn on user: ', res.user)
      httpClient.setAuthorizationHeader(res.token)
    }

    setUser({ username: res.user, role: res.role })
  }

  async function login({ username, password }: SignInData) {
    /*
    Should be called when the user login
    Should clear the old cookie, if there are any, create a new one
    and set the username and user role on store
    */

    const httpClient = AxiosHttpClient.getInstance()
    const notification = new Notification()
    const loginService = new LoginService(httpClient, notification)
    const res = await loginService.execute({
      user: username,
      password,
    })

    if (!res?.token) return

    destroyCookie(undefined, 'nextauth.token')
    setCookie(undefined, 'nextauth.token', res.token, {
      maxAge: 60 * 60 * 24, // 1 day
    })

    httpClient.setAuthorizationHeader(res.token)
    setUser({ username: res.user, role: res.role })

    console.log('login on user: ', res.user)
  }

  function logout() {
    /*
    Should remove the cookies, store data
    and delete the token on database
    */

    console.log('LOGOUT')
    const httpClient = AxiosHttpClient.getInstance()

    if (user?.username) {
      httpClient.deleteUserToken(user.username)
    }

    httpClient.deleteAuthorizationHeader()
    destroyCookie(undefined, 'nextauth.token')
    setUser(null)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
