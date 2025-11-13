import React from 'react'
import BrandListPage from './BrandListPage'
import './sass/CategoryPage.scss'

const BrandSJYP = () => {
  return (
    <main>
      <h2 className='category-page-title'>SJYP</h2>
      <BrandListPage brand='SJYP' />
    </main>
  )
}

export default BrandSJYP