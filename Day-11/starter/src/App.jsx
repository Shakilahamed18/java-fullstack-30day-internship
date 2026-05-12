import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { useCart } from './context/CartContext'

function App() {
  const { totalItems } = useCart()
  return (
    <div className="app">
      <h1>Shopping Cart ({totalItems} items)</h1>
      <div className="layout">
        <ProductList />
        <Cart />
      </div>
    </div>
  )
}

export default App
