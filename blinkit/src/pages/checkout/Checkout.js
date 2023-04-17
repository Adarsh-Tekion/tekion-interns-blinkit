import React from 'react'
import { Header } from '../../organisms/header'
import {Footer} from '../../organisms/footer'
import {Bill} from './organisms/bill/'
export default function Checkout() {
  return (
    <div>
      <Header/>
      <Bill/>
      <Footer/>
    </div>
  )
}
