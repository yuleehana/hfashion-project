import React from 'react'
import SubPage from './SubPage'
import './sass/SubMain.scss'

const MenDefault = () => {
    return (
        <div className='sub-main'>
            <h2 className='sub-main-title'>MEN’S SHOP</h2>
            <SubPage category='man pants' />
        </div>
    )
}

export default MenDefault