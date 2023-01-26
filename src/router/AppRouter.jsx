import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home/HomePage'
import { LoginPage } from '../pages/login/LoginPage'
/* import { HomeRouter } from './HomeRouter' */

export const AppRouter = () => {
    return (
        <>
           
            <Routes>
                <Route path="/" element={
                    <LoginPage />
                } />

                <Route path="/*" element={
                    <Navigate to={<LoginPage />} />
                } />


            </Routes>
        </>
    )
}
