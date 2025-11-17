import React from 'react'
import UserInfoLeftMenu from './UserInfoLeftMenu'

const NotFoundMyPage = () => {
  return (
    <div className='sub-page'>
      <div className="channel-wrap">
        <div className="channel"></div>
      </div>
      <div className="content-inner">
        <div className="user-info-left">
          <UserInfoLeftMenu />
        </div>
        <div className="user-info-right">
          NotFound
        </div>
      </div>
    </div>
  )
}

export default NotFoundMyPage