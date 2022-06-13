import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import { fetchProduct } from '../../api';


function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data } = useQuery(["product", product_id], () => fetchProduct(product_id));
  return (
    <div>
      Product Detail {product_id}
    </div>
  )
}

export default ProductDetail
