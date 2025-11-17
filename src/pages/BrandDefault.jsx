import React from 'react'
import BrandListPage from './BrandListPage'
import './sass/SubMain.scss'


const TargetBrands = [
    'TOMMY HILFIGER MEN',
    'TOMMY Shoes', 
    'TOMMY JEANS',
    'TOMMY HILFIGER WOMEN',
    'ROUGELOUNGE',
    'SJYP',
];

const BrandDefault = () => {
    return (
        <div className='sub-main'>
            <h2 className='sub-main-title'>BRAND’S SHOP</h2>
            <BrandListPage brand={TargetBrands} /> 
        </div>
    )
}

export default BrandDefault

