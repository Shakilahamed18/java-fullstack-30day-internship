import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }, { id: 3, name: 'Tablet' }, { id: 4, name: 'Watch' }
]

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <Link to={`/products/${p.id}`}>View Details →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
