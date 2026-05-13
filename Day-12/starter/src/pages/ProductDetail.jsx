import { useParams, Link } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()
  return <div><h1>Product #{id}</h1><p>Product details go here.</p><Link to="/products">← Back</Link></div>
}

export default ProductDetail
