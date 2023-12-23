import React from 'react'
import { Link } from 'react-router-dom'
function SideBarComponent() {
    return (
        <div>
            <div
                style={{
                    width: '200px',
                    height: '800px',
                    backgroundColor: '#f0f0f0',
                    padding: '20px',
                }}>
                <h2>Sidebar</h2>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/materials">Materials</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBarComponent
