import React from 'react'

export default function Image({source,styles,alternate}) {
  return (
    <>
    <img src={source} alt={alternate} className={styles}/>       
            
    </>
  )
}
