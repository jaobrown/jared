import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useHover } from '@hooks'

const CodeRenderer = ({ children }) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      language="javascript"
      style={nightOwl}
      wrapLines={true}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export const Code = ({ children, className }) => {
  const [isHovered, bind] = useHover()
  const [copyText, setCopyText] = useState('Copy')

  const copyCode = async () => {
    await navigator.clipboard.writeText(children)
    setCopyText('Copied ✅')
    setTimeout(() => {
      setCopyText('Copy')
    }, 2000)
  }

  return (
    <div className="relative" {...bind}>
      <span className="absolute top-1 right-1.5 p-1 overflow-hidden">
        <AnimatePresence>
          {isHovered && (
            <motion.button
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              className="px-3 py-1 text-base font-medium text-gray-100 bg-gray-400 rounded-sm hover:opacity-75"
              onClick={() => copyCode()}
            >
              {copyText}
            </motion.button>
          )}
        </AnimatePresence>
      </span>
      <CodeRenderer className={className}>{children}</CodeRenderer>
    </div>
  )
}
