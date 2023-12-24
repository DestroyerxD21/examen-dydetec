import React, { useState } from 'react'

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
        <div className='<container-aside>'>
            <aside className='aside'>
                <div className="">
                    <ul className="ul-decorators">
                        <SidebarItem label="Materials" onClick={() => handleLiClick('materials')} />
                        <SidebarItem label="Component One" onClick={() => handleLiClick('componentOne')} />
                        <SidebarItem label="Component Two" onClick={() => handleLiClick('componentTwo')} />
                        <SidebarItem label="Component Tree" onClick={() => handleLiClick('componentTree')} />
                        
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SideBarComponent
