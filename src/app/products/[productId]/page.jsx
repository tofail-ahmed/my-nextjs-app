import React from 'react'

const DynamicProductPage = ({params,searchParams}) => {
      console.log(params)
      console.log(searchParams)
  return (
    <div>DynamicProductPage  {params.productId}</div>
  )
}

export default DynamicProductPage