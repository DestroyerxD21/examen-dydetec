import React from 'react'
import '../../src/Styles/Style.css'
function MaterialsComponent() {
    return (
        <div>
            <table className="table">
                <tr>
                    <th className="table-header">Cable</th>
                    <th className="table-header">Tipos</th>
                    <th className="table-header">Metros</th>
                    <th className="table-header">Ubicacion</th>
                    <th className="table-header">Stock</th>
                </tr>
                <tr>
                    <td className="table-cell">Ethernet</td>
                    <td className="table-cell">UTP</td>
                    <td className="table-cell">30.0 Mts</td>
                    <td className="table-cell">Site Lerma</td>
                    <td className="table-cell">Disponible</td>
                </tr>
            </table>
        </div>
    )
}

export default MaterialsComponent
