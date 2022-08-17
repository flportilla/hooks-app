import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, AboutPage, Navbar } from './'
import { UserProvider } from './context/UserProvider'
import { } from './Navbar'

export const MainApp = () => {
    return (

        <UserProvider>
            <Navbar />

            <hr />

            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/about"
                    element={<AboutPage />}
                />
                <Route
                    path="/login"
                    element={<LoginPage />}
                />


                {/* Handle wrong urls, two options */}
                {/* <Route
                    path='/*'
                    element={<LoginPage />} 
                    /> */}

                <Route
                    path='/*'
                    element={<Navigate to="/" />}
                />

            </Routes>
        </UserProvider>
    )
}
