// Root.jsx
import React from 'react'
import { Route, Routes, Router } from 'react-router-dom'
import DashboardComponent from '../Components/MainContentComponent.jsx'
import LoginComponent from '../Components/LoginComponent.jsx'
import MaterialsComponent from '../Components/MaterialsComponent.jsx'
import MainContentComponent from '../Components/MainContentComponent.jsx'

export default function Root() {
    return (
        <Routes>
            <Route index element={<LoginComponent />} />
            <Route path="/materials" element={<MaterialsComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/dashboard" element={<MainContentComponent />} />
        </Routes>
    )
}
