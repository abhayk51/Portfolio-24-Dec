import React from 'react';

const Home = () => {
  return (
    // backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'
    <div style={{position: 'relative',textAlign: 'center',color: 'white'}}>
      <img src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/hero-bg.jpg" className='container-fluid' style={{height:'100vh'}} alt="" />
      <div className='' style={{position:'absolute',top:'50%',alignItems:'center',marginLeft:'2em'}}>
        <h1 className='text-light fw-bold' style={{fontSize:'4em'}}>Alex Smith</h1>
        <h5 className='text-light fw-bold' style={{fontSize:'2em'}}>I am Developer</h5>
      </div>
    </div>
  );
}

export default Home;
