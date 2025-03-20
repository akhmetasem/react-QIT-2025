import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} width="200" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
}

export default ProductDetail;
