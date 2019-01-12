import React from 'react'

import Filters from '../../components/Filters'
import Product from '../../components/Products/Product'
import Pagination from '../../components/Pagination'
import SearchInput from '../../components/SearchInput'
import Showing from '../../components/Showing'

const products = [
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
    discount: false,
  },
  {
    id: 3,
    name: 'Glass Vase',
    price: 62.50,
    imageUrl: 'images/shop/th03.jpg',
    discount: false,
  },
  {
    id: 4,
    name: 'Alarm Clock',
    price: 178,
    imageUrl: 'images/shop/th04.jpg',
    discount: false,
  },
  {
    id: 5,
    name: 'Wall Clock',
    price: 59,
    imageUrl: 'images/shop/th05.jpg',
    discount: false,
  },
  {
    id: 6,
    name: 'LED Lighting',
    price: 130,
    imageUrl: 'images/shop/th06.jpg',
    discount: false,
  },
  {
    id: 7,
    name: 'Sunglasses',
    price: 99,
    imageUrl: 'images/shop/th07.jpg',
    discount: false,
  },
  {
    id: 8,
    name: 'Hook Basket',
    price: 112.35,
    imageUrl: 'images/shop/th08.jpg',
    discount: false,
  },
  {
    id: 9,
    name: 'Leather Case',
    price: 118,
    imageUrl: 'images/shop/th09.jpg',
    discount: false,
    rating: 10
  },
  {
    id: 10,
    name: 'Concrete Lamp',
    price: 85.90,
    imageUrl: 'images/shop/th10.jpg',
    discount: false,
    rating: 10
  },
  {
    id: 11,
    name: 'Stylish Chair',
    price: 417,
    imageUrl: 'images/shop/th11.jpg',
    discount: false,
    rating: 9
  },
  {
    id: 12,
    name: 'Desktop Lighting',
    price: 245,
    imageUrl: 'images/shop/th12.jpg',
    discount: false,
    rating: 8
  },
  {
    id: 13,
    name: 'Storage Jar',
    price: 19.80,
    imageUrl: 'images/shop/th13.jpg',
    discount: false,
    rating: 8
  },
  {
    id: 14,
    name: 'Ceramic Watch',
    price: 299,
    imageUrl: 'images/shop/th14.jpg',
    discount: false,
    rating: 7
  },
  {
    id: 15,
    name: 'Tissue Holder',
    price: 76.40,
    imageUrl: 'images/shop/th15.jpg',
    discount: false,
    rating: 7
  },
  {
    id: 16,
    name: 'Pendant Lamp',
    price: 27,
    imageUrl: 'images/shop/th16.jpg',
    discount: false,
    rating: 6
  },
]


const productsIndex = (props) => {
  return(
    <section className="container padding-top-3x padding-bottom-3x">
      <h1 className="space-top-half">Products</h1>
      <div className="row padding-top">
        <Filters />

        <div className="col-md-9 col-sm-8">
          <div className="shop-bar">
            <div className="column">
              <Showing from={1} to={14} />
            </div>
            <div className="column">
              <SearchInput />
            </div>
          </div>

          <div className="row">
            {products.map((product, i) => (
              <div key={i} className="col-md-4 col-sm-6">
                <Product {...product} />
              </div>
            ))}
          </div>

          <hr />

          <Pagination />
        </div>
      </div>
    </section>
  )
}

export default productsIndex
