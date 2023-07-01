import { FC } from 'react'


type ProductDataProps = {
    title: string,
    thumbnail: string,
    price: number,
}

const ProductData:FC<ProductDataProps> =({title , thumbnail , price}) => {


    return(
        <div className=''>
            <img src={thumbnail} className='h-44' alt="" />
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
    )
}

export default ProductData;