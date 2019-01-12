import React from 'react'

import Categories from '../Categories'
import SpecialOffer from '../SpecialOffer'
import Tabs from '../Tabs'
import Products from '../Products'

const categories = [
  {name: 'Clocks', imagePath: 'images/categories/cat01.jpg'},
  {name: 'Furniture', imagePath: 'images/categories/cat02.jpg'},
  {name: 'Lightning', imagePath: 'images/categories/cat03.jpg'},
  {name: 'Bags', imagePath: 'images/categories/cat04.jpg'},
]

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
  {
    id: 7,
    name: 'Sunglasses',
    price: 99,
    imageUrl: 'images/shop/th07.jpg',
    labels: ['Popular']
  },
  {
    id: 8,
    name: 'Hook Basket',
    price: 112.35,
    imageUrl: 'images/shop/th08.jpg',
  },
]

const topRated = [
  {
    id: 9,
    name: 'Leather Case',
    price: 118,
    imageUrl: 'images/shop/th09.jpg',
    rating: 10
  },
  {
    id: 10,
    name: 'Concrete Lamp',
    price: 85.90,
    imageUrl: 'images/shop/th10.jpg',
    rating: 10
  },
  {
    id: 11,
    name: 'Stylish Chair',
    price: 417,
    imageUrl: 'images/shop/th11.jpg',
    rating: 9
  },
  {
    id: 12,
    name: 'Desktop Lighting',
    price: 245,
    imageUrl: 'images/shop/th12.jpg',
    rating: 8
  },
  {
    id: 14,
    name: 'Ceramic Watch',
    price: 299,
    imageUrl: 'images/shop/th14.jpg',
    rating: 7
  },
  {
    id: 15,
    name: 'Tissue Holder',
    price: 76.40,
    imageUrl: 'images/shop/th15.jpg',
    rating: 7
  },
  {
    id: 16,
    name: 'Pendant Lamp',
    price: 27,
    imageUrl: 'images/shop/th16.jpg',
    rating: 6
  },
]

const onSale = [
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
  {
    id: 7,
    name: 'Sunglasses',
    price: 99,
    imageUrl: 'images/shop/th07.jpg',
  },
  {
    id: 8,
    name: 'Hook Basket',
    price: 112.35,
    imageUrl: 'images/shop/th08.jpg',
  },
  {
    id: 9,
    name: 'Leather Case',
    price: 118,
    imageUrl: 'images/shop/th09.jpg',
    rating: 10
  },
  {
    id: 10,
    name: 'Concrete Lamp',
    price: 85.90,
    imageUrl: 'images/shop/th10.jpg',
    rating: 10
  },
  {
    id: 11,
    name: 'Stylish Chair',
    price: 417,
    imageUrl: 'images/shop/th11.jpg',
    rating: 9
  },
  {
    id: 12,
    name: 'Desktop Lighting',
    price: 245,
    imageUrl: 'images/shop/th12.jpg',
    rating: 8
  },
]
const ProductsSummary = (props) => {
  return(
    <section className="container-fluid padding-top-3x">
      <Categories categories={categories} />

      <div className="row padding-top">
        <SpecialOffer />
        <div className="col-lg-9 col-md-8">
          <Tabs 
            headers={[
              { name: 'New Arrivals' },
              { name: 'Top Rated' },
              { name: 'On Sale' }
            ]} 
            contents={[
            <Products collection={newArrivels}/>,
            <Products collection={topRated}/>,
            <Products collection={onSale}/>
          ]}/>
        </div>
      </div>
    </section>
  )
}

export default ProductsSummary
