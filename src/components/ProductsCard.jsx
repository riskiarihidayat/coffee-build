import React from 'react'

export default function ProductsCard({ img, productName, productPrice }) {
  return (
    <div className='text-center'>
      <img src={img} alt="Coffee Product" className='w-[120px] mb-6' />
      <div>
        <p className='mob-product-detail'>{productName}</p>
        <p className='mob-product-detail'>{productPrice}</p>
      </div>
    </div>
  )
}
