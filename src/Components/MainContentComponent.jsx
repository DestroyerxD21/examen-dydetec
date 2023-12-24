import React,{useState} from 'react'
import SideBarComponent from './SideBarComponent'
import MaterialsComponent from './MaterialsComponent'

function MainContentComponent() {
    const [selectedOption, setSelectedOption] = useState('materials')
    const handleOptionSelect = (option) => {
        setSelectedOption(option)
    }

    return (
        <div>
            <SideBarComponent handleOptionSelect={handleOptionSelect} />
            <div className="">
                {selectedOption === 'materials' && <MaterialsComponent />}
                
            </div>
        </div>
    )
}

export default MainContentComponent
