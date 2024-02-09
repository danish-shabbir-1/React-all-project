import React from 'react'
import { useState , useEffect } from 'react'
import { getData } from '../../Firebase'
import Card from '../Card'
import './../../App.css'

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
    <div className='AddsCards'>
      {product.map((item) => {
        return <Card product={item} />
      })}
    </div>
  )
}

export default GetCardData
