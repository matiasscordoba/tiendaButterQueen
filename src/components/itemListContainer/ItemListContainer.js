import ItemCount from "../itemCount/ItemCount";

function ItemListContainer () {

    const onAdd = (amount) => {
        console.log(`Compraste ${amount} productos`)
    }

    return(
        <div className="container">
            <div className="row">
                <ItemCount initial={1} stock={10} onAdd={onAdd}></ItemCount>
                <ItemCount initial={1} stock={15} onAdd={onAdd}></ItemCount>
                <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
                <ItemCount initial={1} stock={3} onAdd={onAdd}></ItemCount>
            </div>
        </div>
    );
}
export default ItemListContainer;