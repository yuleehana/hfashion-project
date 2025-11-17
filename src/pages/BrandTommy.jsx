import React from 'react'
import BrandListPage from './BrandListPage'
import './sass/CategoryPage.scss'

const TargetBrands = [
  'TOMMY HILFIGER WOMEN',
  'TOMMY HILFIGER MEN',
];

const BrandTommy = () => {
  return (
    <main>
      <h2 className='category-page-title'>TOMMY'S</h2>
      <BrandListPage brand={TargetBrands} />
w    </main>
  )
}

export default BrandTommy