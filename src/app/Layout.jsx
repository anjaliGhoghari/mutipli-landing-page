import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function Layout({children}) {
  return (
    <>
   <Header/>
   <main className='bg-customBlack'>{children}</main>
   <Footer/>
   </>
  )
}

export default Layout