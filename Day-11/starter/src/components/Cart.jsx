import { useCart } from '../context/CartContext'

function Cart() {
  const { items, removeItem, clearCart, totalPrice } = useCart()

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? <p>Cart is empty</p> : (
        <>
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} x{item.quantity}</span>
              <span>
                ${(item.price * item.quantity).toFixed(2)}
                <button className="btn-remove" onClick={() => removeItem(item.id)}>✕</button>
              </span>
            </div>
          ))}
          <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
          <button className="btn-clear" onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  )
}

export default Cart
