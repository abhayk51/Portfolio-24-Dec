import React from 'react';

const Skill = () => {
  return (
    <div className='container-fluid p-md-5' style={{backgroundColor:'#dffeff'}}>
      <h1 className="fw-bold">Skills</h1>
      <hr className="border border-3 border-primary" style={{width:"70px"}} />
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <div className="row">
        <div className="col-md-6 px-4">
          <p className='d-flex justify-content-between'>
            <span>HTML</span>
            <span>100%</span>
          </p>
          <hr className='border border-4 border-primary rounded' style={{width:'100%'}}/>
        </div>
        <div className="col-md-6 px-4">
          <p className='d-flex justify-content-between'>
            <span>BOOTSTRAP</span>
            <span>60%</span>
          </p>
          <hr className='border border-4 border-primary rounded' style={{width:'60%'}}/>
        </div>
        <div className="col-md-6 px-4">
          <p className='d-flex justify-content-between'>
            <span>CSS</span>
            <span>90%</span>
          </p>
          <hr className='border border-4 border-primary rounded' style={{width:'90%'}}/>
        </div>
        <div className="col-md-6 px-4">
          <p className='d-flex justify-content-between'>
            <span>JQUERY</span>
            <span>60%</span>
          </p>
          <hr className='border border-4 border-primary rounded' style={{width:'60%'}}/>
        </div>
        <div className="col-md-6 px-4">
          <p className='d-flex justify-content-between'>
            <span>JAVASCRIPT</span>
            <span>75%</span>
          </p>
          <hr className='border border-4 border-primary rounded' style={{width:'75%'}}/>
        </div>
        <div className="col-md-6 px-4">
          <p className='d-flex justify-content-between'>
            <span>PYTHON</span>
            <span>70%</span>
          </p>
          <hr className='border border-4 border-primary rounded' style={{width:'70%'}}/>
        </div>
      </div>
    </div>
  );
}

export default Skill;
