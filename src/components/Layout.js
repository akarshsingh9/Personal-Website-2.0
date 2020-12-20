import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import '../styles/style.css'

export default function Layout({ children }) {
    return (
    <div>
        <NavBar />
        <main className="container">{children}</main>
        <Footer />
    </div>
    )
  }