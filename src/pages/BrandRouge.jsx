import React from 'react'
import BrandListPage from './BrandListPage'
import './sass/CategoryPage.scss'

const BrandRouge = () => {
    return (
        <main>
            <h2 className='category-page-title'>ROUGE&LOUNGE</h2>
            <BrandListPage brand='ROUGELOUNGE' />
        </main>
    )
}

export default BrandRouge