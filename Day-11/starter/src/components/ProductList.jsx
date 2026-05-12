import { useCart } from '../context/CartContext'

const products = [
  { id: 1, name: 'Wireless Headphones', price: 59.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 89.99 },
  { id: 3, name: 'USB-C Hub', price: 34.99 },
  { id: 4, name: 'Webcam HD', price: 49.99 },
  { id: 5, name: 'Mouse Pad XL', price: 19.99 },
  { id: 6, name: 'Monitor Stand', price: 44.99 },
]

function ProductList() {
  const { addItem } = useCart()
  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p className="price">${product.price.toFixed(2)}</p>
          <button className="btn-add" onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
