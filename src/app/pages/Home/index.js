import React from 'react'
import PropTypes from 'prop-types'

import Slider from '../../components/Slider'
import Brands from '../../components/Brands'
import Benefits from '../../components/Benefits'
import ProductsSummary from '../../components/ProductsSummary'

const brands = [
  {
    imagePath: 'images/brands/01.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.'
  },
  {
    imagePath: 'images/brands/02.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.'
  },
  {
    imagePath: 'images/brands/03.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.'
  },
  {
    imagePath: 'images/brands/04.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.'
  },
  {
    imagePath: 'images/brands/05.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.'
  },
  {
    imagePath: 'images/brands/06.svg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est corrupti sapiente itaque.'
  },
]

const benefits = [
  {
    iconName: 'location_on',
    title: 'Free World-Wide Shipping',
    description: 'Free shipping on all orders over $100'
  },
  {
    iconName: 'autorenew',
    title: 'Money Back Guarantee',
    description: 'We return money within 30 days'
  },
  {
    iconName: 'headset_mic',
    title: '24/7 Online Support',
    description: 'Friendly 24/7 customer suppor'
  },
  {
    iconName: 'credit_card',
    title: 'Secure Online Payments',
    description: 'We posess SSL / Secure Certificate'
  },
]

const home = (props) => (
  <React.Fragment>
    <Slider />
    <ProductsSummary />
    <Brands brands={brands}/>
    <Benefits benefits={benefits} />
  </React.Fragment>
)

export default home
