import React from 'react'
import ItemCount from '../itemCount/ItemCount'

const Item = () => {

//contador
    const onAdd = (amount) => {
        console.log(`Compraste ${amount} productos`)
    }


    return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Producto </h5>
                        <p className="card-text">Descripción del Producto</p>
                        <ItemCount initial={1} stock={10} onAdd={onAdd}></ItemCount>
                    </div>
                </div>
            </div>
    )
}

export default Item

