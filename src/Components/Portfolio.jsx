import React from 'react';

const Portfolio = () => {
  return (
    <div className='container-fluid p-md-5 py-4'>
      <h1 className='fw-bold'>Portfolio</h1>
      <hr className='border border-2 border-primary' style={{width:"70px"}}/>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      <ul type='none' className='d-flex justify-content-center mb-4'>
        <li className='m-2'>ALL</li>
        <li className='m-2'>APP</li>
        <li className='m-2'>PRODUCT</li>
        <li className='m-2'>BRANDING</li>
        <li className='m-2'>BOOKS</li>
      </ul>
      <div className="row port-img">
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/app-1.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/product-1.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/branding-1.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/books-1.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/app-2.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/product-2.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/branding-2.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/books-2.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/app-3.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/product-3.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/branding-3.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <img className='img-fluid rounded mb-4' src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/books-3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
