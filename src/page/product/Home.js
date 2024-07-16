import {useEffect, useState} from "react";

const Home= () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/bit/product')
            .then((res) => res.json())
            .then((res) => {
                console.log(1, res);
                setProducts(res);
            });
    }, []);

    return (
        <div>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Home;