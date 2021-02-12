import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const DataRenderer = ({ codeString = '' }) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      language="javascript"
      style={docco}
      wrapLines={true}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}
