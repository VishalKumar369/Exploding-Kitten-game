import React from 'react';
import './UserDetail.css'
import { useSelector } from 'react-redux';
import { getUserDetail } from '../applications/selectors/getUserDetail';

const UserDetail = () => {
const user = useSelector(getUserDetail)
  return (
    <div className="user-details">
      <div className='user-name'>Welcome <span>{user.userName}</span></div>
      <div className='user-won'>Won : <span>{user.win}</span></div>
      <div className='user-loose'>Loose : <span>{user.loose}</span></div>

    </div>
  )
}

export default UserDetail