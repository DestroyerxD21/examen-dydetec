// Root.jsx
import React from 'react'
import { Route, Routes, Router } from 'react-router-dom'
import DashboardComponent from '../Components/DashboardComponent.jsx'
import LoginComponent from '../Components/LoginComponent.jsx'
import MaterialsComponent from '../Components/MaterialsComponent.jsx'

export default function Root() {
    return (
        <Routes>
            <Route index element={<DashboardComponent />} />
            <Route path="/materials" element={<MaterialsComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
    )
}
