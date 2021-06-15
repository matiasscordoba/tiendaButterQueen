import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [items, setItems] = useState(initial)

    const addItems = () => {
        if (items < stock) {
            setItems(items + 1)
        } else {
            alert("No hay más stock de este producto.")
        }
    }

    const restItems = () => {
        if (items > 1) {
            setItems(items - 1)
        }
    }

    return (
                <div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                    <i className="bi bi-dash-square counter-button" onClick={restItems}></i>
                    <span className="counter-amount text-center">{items}</span>
                    <i className="bi bi-plus-square counter-button" onClick={addItems}></i>
                    </div>
                <button className="btn btn-secondary w-100" onClick={() => onAdd(items)}>
                    Agregar
                </button>
                </div>
    )
}

export default ItemCount
