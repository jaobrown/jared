import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { useAppState } from '@globals'
import { Link } from '@elements'

export const Drawer = () => {
  const { isMenuOpen, toggleMenu } = useAppState()
  return (
    <AnimatePresence>
      {!isMenuOpen ? null : <Menu toggleMenu={toggleMenu} />}
    </AnimatePresence>
  )
}

const Menu = ({ toggleMenu }) => {
  return (
    <motion.div
      className="absolute inset-0 z-50 flex flex-col items-end px-4 py-10 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button onClick={toggleMenu} className="w-8 h-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <nav className="flex flex-col pr-12">
        <Link to="/" className="mt-12 text-xl text-right">
          home
        </Link>
        <Link to="/experience/" className="mt-12 text-xl text-right">
          experience
        </Link>
        <Link to="/work/" className="mt-12 text-xl text-right">
          work
        </Link>
        <a
          href="#contact"
          className="mt-12 text-xl font-semibold text-right uppercase"
        >
          contact
        </a>
      </nav>
    </motion.div>
  )
}
