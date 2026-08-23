import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingContactButton from '../components/FloatingContactButton'

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />

            <FloatingContactButton />
        </div>
    )
}

export default MainLayout