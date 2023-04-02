import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { User } from "@/@types/user";
import { recoverUserInformation, signInRequest } from "@/services/auth";
interface SignInData {
  email: string,
  password: string
}
import { useRouter } from "next/router";
interface AuthContextType {
  user: User
  signIn: (data: SignInData) => Promise<void>,
  isAuthenticated: boolean
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType)
export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User>()
  const router = useRouter()
  const { locales } = router
  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password
    })
    //
    const cookieName = "codelifeAuth-token"
    const maxAge = 60 * 60 * 1  // 1 hour
    setCookie(undefined, cookieName, token, {
      maxAge
    })
    setUser(user)
  }
  useEffect(() => {
    const { "codelifeAuth-token": token } = parseCookies()
    if (token) {
      recoverUserInformation({ token }).then(response => {
        setUser(response.user)
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ user: user as User, isAuthenticated: !!user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
