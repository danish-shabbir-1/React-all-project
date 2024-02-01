import React from 'react'
import { useState , useEffect } from 'react'
import { getData } from '../../Firebase'
import Card from '../Card'

const GetCardData = () => {

    const [product , setProduct] = useState()

    useEffect(() => {
        GettAllData()
    }, [])

    async function GettAllData() {
        const res = await getData()
        setProduct(res)

    }

    if(!product?.length) {
        return <div>Loading....</div>
    }

    console.log('new product',product);

  return (
    <>
      {product.map((item) => {
        return <Card product={item} />
      })}
    </>
  )
}

export default GetCardData
