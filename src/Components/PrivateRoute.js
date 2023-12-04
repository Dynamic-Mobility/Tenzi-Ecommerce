import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const PrivateRoute = (props) => {
    const {children} = props
    const router = useRouter()

    const userToken = localStorage.getItem('token')
    useEffect(() => {
        if(!userToken){
            router.push({
              pathname: "/login",
              query: { returnUrl: router.asPath },
          })
        }
    }, [])
  return (
    <>{children}</>
  )
}
