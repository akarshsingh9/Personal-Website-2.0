import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import '../styles/style.css'

export default function Layout({ children }) {
    return (
    <div>
        <Header />
        <main className="container">{children}</main>
        <Footer />
    </div>
    )
  }