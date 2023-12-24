import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({ label, onClick,}) => (
    <li>
        <a
            onClick={onClick}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            
            <span className="ml-3">{label}</span>
        </a>
    </li>
)

function SideBarComponent({ handleOptionSelect }) {
    const handleLiClick = (option) => {
        handleOptionSelect(option)
    }

    return (
        <div>
            <aside>
                <div className="">
                    <ul className="">
                        <SidebarItem label="Materials" onClick={() => handleLiClick('materials')} />
                        
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SideBarComponent
