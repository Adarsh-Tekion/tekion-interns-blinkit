import React from 'react'

export default function Assets({link,styles,name}) {
  return (
    <>
    <a href={link} className={styles}>{name}</a>
    </>
  )
}
