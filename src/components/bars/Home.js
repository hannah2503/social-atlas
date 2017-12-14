import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  return(
    <Link to="/register"><img className="home" src='../../assets/home.jpg'/></Link>
  );
};


export default Home;
