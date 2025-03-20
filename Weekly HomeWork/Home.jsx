import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [category, setCategory] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    useEffect(() => {
        let filtered = [...products];

        if (category) {
            filtered = filtered.filter((item) => item.category === category);
        }
        if (search) {
            filtered = filtered.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        filtered.sort((a, b) =>
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );

        setFilteredProducts(filtered);
    }, [search, sortOrder, category, products]);

    return (
        <div>
            <FilterBar
                setSearch={setSearch}
                setSortOrder={setSortOrder}
                setCategory={setCategory}
            />
            <div className="products">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;
