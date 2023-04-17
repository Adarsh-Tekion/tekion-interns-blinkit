import { Listing } from "./organisms/listing";
import { Navbar } from "./organisms/navbar";
import { Header } from "../../organisms/header";
import { Footer } from "../../organisms/footer";
import React from 'react'

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Listing />
      <Footer />
    </div>
  )
}
