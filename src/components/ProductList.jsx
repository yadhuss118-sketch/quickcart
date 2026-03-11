import ProductCard from "./ProductCard";
import {products} from "../data/products";

function ProductList(){

return(

<div>

{products.map((product)=>(
<ProductCard key={product.id} product={product}/>
))}

</div>

);

}

export default ProductList;