import React from 'react'
import Product from '../Products/Product'

const newArrivels = [
  {
    id: 1,
    name: 'Storage Box',
    price: 49,
    imageUrl: 'images/shop/th01.jpg',
    discount: true,
    discountPrice: 38.00
  },
  {
    id: 2,
    name: 'Shoulder Bag',
    price: 125,
    imageUrl: 'images/shop/th02.jpg',
  },
  {
    id: 3,
    name: 'Glass Vase',
    price: 62.50,
    imageUrl: 'images/shop/th03.jpg',
  },
  {
    id: 4,
    name: 'Alarm Clock',
    price: 178,
    imageUrl: 'images/shop/th04.jpg',
  },
  {
    id: 5,
    name: 'Wall Clock',
    price: 59,
    imageUrl: 'images/shop/th05.jpg',
  },
  {
    id: 6,
    name: 'LED Lighting',
    price: 130,
    imageUrl: 'images/shop/th06.jpg',
  },
]

const wishList = (props) => (
  <div className="row">
    {newArrivels.map((product, i) => (
      <div className="col-sm-4" key={i}>
        <Product {...product} />
      </div>
    ))}
  </div>
)

export default wishList
