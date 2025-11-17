import React from 'react'
import UserInfoLeftMenu from './UserInfoLeftMenu'

const MemberInfor = () => {
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
          <div className="section"></div>
        </div>
      </div>
    </div>
  )
}

export default MemberInfor