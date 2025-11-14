import React from 'react'
import BrandListPage from './BrandListPage'
import './sass/CategoryPage.scss'

const BrandTommy = () => {
  return (
    <main>
      <h2 className='category-page-title'>브랜드 Tommy</h2>
      <BrandListPage brand='TOMMY HILFIGER MEN' />
    </main>
  )
}

export default BrandTommy