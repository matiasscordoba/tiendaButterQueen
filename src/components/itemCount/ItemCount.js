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
        <div className="card col-md-6 col-lg-3">
            <div className="card-body">
                <h5 className="card-title">Producto </h5>
                <p className="card-text">Descripción del Producto</p>
                <div className="d-flex align-items-center justify-content-center mb-1">
                    <i className="bi bi-dash-square counter-button" onClick={restItems}></i>
                    <span className="counter-amount text-center">{items}</span>
                    <i className="bi bi-plus-square counter-button" onClick={addItems}></i>
                </div>
                <button className="btn btn-secondary w-100" onClick={() => onAdd(items)}>
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ItemCount
