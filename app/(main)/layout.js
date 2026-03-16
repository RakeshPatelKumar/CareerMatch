import React from 'react'
import { checkUser } from '@/lib/checkUser'

const MainLayout = async ({ children }) => {
  await checkUser();
  return (
    //Redirect user after onboarding
    <div className='container mx-auto mt-24 mb-20'>{children}</div>
  )
}

export default MainLayout