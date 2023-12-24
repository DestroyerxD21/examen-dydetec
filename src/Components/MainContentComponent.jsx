import React,{useState} from 'react'
import SideBarComponent from './SideBarComponent'
import MaterialsComponent from './MaterialsComponent'
import ExampleComponent1 from './ExampleComponent1'
import ExampleComponent2 from './ExampleComponent2'
import ExampleComponent3 from './ExampleComponent3'

function MainContentComponent() {
    const [selectedOption, setSelectedOption] = useState('materials')
    const handleOptionSelect = (option) => {
        setSelectedOption(option)
    }

    return (
        <div className='main-container'>
            <div className='container-sidebar'>
            <SideBarComponent handleOptionSelect={handleOptionSelect} />
            </div>
            <div className="container-sections">
                <div className="container-items">
                {selectedOption === 'materials' && <MaterialsComponent />}
                {selectedOption === 'componentOne' && <ExampleComponent1 />}
                {selectedOption === 'componentTwo' && <ExampleComponent2 />}
                {selectedOption === 'componentTree' && <ExampleComponent3 />}
                </div>
            </div>
        </div>
    )
}

export default MainContentComponent
