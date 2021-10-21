import React from "react";
function Product(props){
const {product,onAdd}=props;
console.log(props);
//const {onAdd}=props;
return(
    <div>
        <img className="img-small" src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>Price:{product.price}</div>   
    <div>
<button onClick={()=>onAdd(product)}>Add To Cart</button>
    </div>
    </div>
);
}export default Product;