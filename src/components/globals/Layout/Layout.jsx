import React, { createContext, useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { SEO } from '../Seo'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Drawer } from '../Navigation'
import { useToggle, useKonamiCode } from '@hooks'
import { Contact } from '@layouts'

export const AppContext = createContext({
  isMenuOpen: false,
})

export const Layout = ({ colorMode, children }) => {
  const { isToggled, toggle } = useToggle(false)
  const [isKonami, setIsKonami] = useState(false)
  useKonamiCode(() => {
    alert('You have entered the konami code. Good luck.')
    setIsKonami(true)
  })

  const variants = {
    visible: { rotate: 0 },
    hidden: { rotate: 180 },
  }

  return (
    <AppContext.Provider value={{ isMenuOpen: isToggled, toggleMenu: toggle }}>
      <SEO />
      <motion.div
        initial="visible"
        animate={`${isKonami ? 'hidden' : 'visible'}`}
        variants={variants}
        className="font-sans antialiased bg-white"
      >
        <Header colorMode={colorMode} />
        <Drawer />
        <main className="">{children}</main>
        <Contact />
        <Footer />
      </motion.div>
    </AppContext.Provider>
  )
}

export const useAppState = () => useContext(AppContext)
