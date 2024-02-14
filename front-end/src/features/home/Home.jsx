import React from 'react';
import './Home.css';
import Kitten from '../../assets/images/kitten-bg.jpg'

const Home = () => {
  return (
    <div className="home-wrapper">
      <img src={Kitten} alt="" />
    </div>
  )
}

export default Home