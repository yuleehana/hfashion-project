import React from 'react'
import SubPage from './SubPage'
import './sass/SubMain.scss'

const Golf = () => {
    return (
        <div className='sub-main'>
            <h2 className='sub-main-title'>GOLF’S SHOP </h2>
            <SubPage category='golf' />
        </div>
    )
}

export default Golf