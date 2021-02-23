import { useState, useEffect } from 'react';

function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:3001/api/products/")
        .then(res => res.json())
            .then(result => {
            console.log(result)
            setProducts(result.data.products)
        })
    }, [])
    
    return (
        <>
            <table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#ID</th>
						<th scope="col">PRDOUCT NAME</th>
						<th scope="col">DESCRIPTION</th>
                        <th scope="col">PRICE</th>
					</tr>
				</thead>
                <tbody>
                    {products.map((product, i) => {
                        return (
                            <>
                                <tr key={i}>
                                    <th scope="row">{ product.id }</th>
                                    <td>{ product.product_name }</td>
                                    <td>{ product.description }</td>
                                    <td>$ {product.price }</td>
					            </tr>
                            </>
                        )
                    })}
				</tbody>
			</table>
        </>
    )

}

export default ProductTable