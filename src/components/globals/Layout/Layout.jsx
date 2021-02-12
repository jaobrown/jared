import React, { createContext, useContext } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Drawer } from '../Navigation'
import { useToggle } from '@hooks'
import { Contact } from '@layouts'

export const AppContext = createContext({
  isMenuOpen: false,
})

export const Layout = ({ colorMode, children }) => {
  const { isToggled, toggle } = useToggle(false)

  return (
    <AppContext.Provider value={{ isMenuOpen: isToggled, toggleMenu: toggle }}>
      <div className="font-sans antialiased bg-white">
        <Header colorMode={colorMode} />
        <Drawer />
        <main className="">{children}</main>
        <Contact />
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export const useAppState = () => useContext(AppContext)
