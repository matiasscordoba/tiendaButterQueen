import React from 'react'
import Item from '../item/Item'

const ItemList = () => {

//promise
    const promise = new Promise ((resolve,reject) =>{

        //Resolver
        resolve();

        //Reject
        reject();
    });

    promise.then((data) => {


    })

    return (
        <div className="container">
            <div className="row">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}

export default ItemList
