import cart from '../../assets/cart.svg';

function CartWidget () {
    return(
        <button type="button" className="btn btn-light"><img src={cart} alt="Carrito de compras" height="25" className="me-2"></img>Carrito</button>
    );
}
export default CartWidget;
