import React from 'react'
import { useToggle } from '@hooks'

import { DataRenderer } from './DataRenderer/DataRenderer'

export const ComingSoon = (props) => {
  const { isToggled, toggle } = useToggle(false)
  return (
    <section className="px-4 py-20 bg-opacity-25 bg-blue">
      <div
        className="max-w-5xl px-4 py-10 mx-auto text-center bg-white rounded shadow cursor-pointer"
        onClick={toggle}
        onKeyPress={toggle}
        role="button"
        tabIndex="0"
      >
        <div className="text-sm md:text-base lg:text-xl">
          <span
            role="img"
            alt="emoji"
            aria-label="emoji"
            className="hidden mr-2 text-lg lg:text-2xl md:inline-block"
          >
            🚧
          </span>{' '}
          The{' '}
          <span className="px-2 py-1 mx-1 font-mono text-xs text-indigo-600 bg-indigo-100 rounded md:text-sm lg:text-lg">
            {props._type}
          </span>{' '}
          layout is still being put together{' '}
          <span
            role="img"
            alt="emoji"
            aria-label="emoji"
            className="inline-block ml-2 text-lg lg:text-2xl"
          >
            🚧
          </span>{' '}
        </div>
        {isToggled && (
          <div className="px-8 text-left">
            <div className="mt-8 mb-2">Props the component knows about:</div>
            <div className="overflow-y-scroll" style={{ maxHeight: `600px` }}>
              <DataRenderer codeString={JSON.stringify(props, null, 2)} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
