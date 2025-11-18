import React from 'react'
import BrandListPage from './BrandListPage'
import './sass/SubMain.scss'
import SubMainBestSeller from '../components/SubMainBestSeller';


const TargetBrands = [
    'ROUGELOUNGE',
    'TOMMY HILFIGER WOMEN',
    'TOMMY HILFIGER MEN',
    'TOMMY Shoes',
    'TOMMY JEANS',
    'SJYP',
];

const BrandDefault = () => {
    return (
        <div className='sub-main'>
            <h2 className='sub-main-title'>BRAND’S SHOP</h2>
            <h3>BEST SELLER</h3>
            <SubMainBestSeller brand={TargetBrands} />
            <h3>BRAND</h3>
            <BrandListPage brand={TargetBrands} />
        </div>
    )
}

export default BrandDefault

