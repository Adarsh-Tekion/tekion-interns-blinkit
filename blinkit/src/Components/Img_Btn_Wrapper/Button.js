import React from 'react'

export default function Button({styles,children,onclick}) {
  return (
    <>
    <button className={styles} onClick={onclick}>{children}</button>
    </>
  )
}
