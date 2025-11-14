import React from 'react'
import BrandListPage from './BrandListPage'
import './sass/SubMain.scss'

const BrandDefault = () => {
    return (
        <div className='sub-main'>
            <h2 className='sub-main-title'>BRAND’S SHOP</h2>
            <BrandListPage brand='MARK LONA' />
        </div>
    )
}

export default BrandDefault