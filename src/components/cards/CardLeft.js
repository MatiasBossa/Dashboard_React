import { useState, useEffect } from 'react'

function CardLeft() {
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
            .then(res => res.json())
            .then(result => {
                console.log(result.meta.count)
                setProductCount(result.meta.count);
            })
    }, [])

    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{ productCount }</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default CardLeft;