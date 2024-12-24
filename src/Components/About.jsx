import React from 'react';

const About = () => {
  return (
    <div className='container-fluid p-md-5 py-4'>
    <h1 className="fw-bold">About</h1>
    <hr className="border border-3 border-primary" style={{width:"70px"}} />
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    <div className="row">
      <div className="col-md-4">
        <img src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/my-profile-img.jpg" className='img-fluid rounded' alt="" />
      </div>
      <div className="col-md-8 px-5">
        <h2 className='mb-4'>UI/UX Designer & Web Developer.</h2>
        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="row mb-4">
          <div className="col-md-6 d-flex">
            <i className='bi bi-chevron-right text-primary'></i>
            <p><strong>Birthday:</strong> 1 May 1995</p>
          </div>
          <div className="col-md-6 d-flex">
            <i className='bi bi-chevron-right text-primary'></i>
            <p><strong>Age:</strong> 30</p>
          </div>
          <div className="col-md-6 d-flex">
            <i className='bi bi-chevron-right text-primary'></i>
            <p><strong>Website:</strong> www.example.com</p>
          </div>
          <div className="col-md-6 d-flex">
            <i className='bi bi-chevron-right text-primary'></i>
            <p><strong>Degree:</strong> Master</p>
          </div>
          <div className="col-md-6 d-flex">
            <i className='bi bi-chevron-right text-primary'></i>
            <p><strong>Phone:</strong> +123 456 7890</p>
          </div>
          <div className="col-md-6 d-flex">
            <i className='bi bi-chevron-right text-primary'></i>
            <p><strong>Email:</strong> example@mail.com</p>
          </div>
          <div className="col-md-6 d-flex">
            <i className='bi bi-chevron-right text-primary'></i>
            <p><strong>City:</strong> New York, USA</p>
          </div>
          <div className="col-md-6 d-flex">
            <i className='bi bi-chevron-right text-primary'></i>
            <p><strong>Freelance:</strong> Available</p>
          </div>
        </div>
        <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.</p>
      </div>
    </div>
    <div className="row py-5 my-5">
      <div className="col-md-3">
        <div className="row">
          <div className="col-1">
            <i className='bi bi-emoji-smile text-primary fs-2'></i>
          </div>
          <div className="col-10">
            <h1 className='px-3'>232</h1>
            <p><strong>Happy Clients</strong> consequuntur quae</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="row">
          <div className="col-1">
            <i className='bi bi-journal-richtext text-primary fs-2'></i>
          </div>
          <div className="col-10">
            <h1 className='px-3'>521</h1>
            <p><strong>Projects</strong> adipisci atque cum quia aut</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="row">
          <div className="col-1">
            <i className='bi bi-headset text-primary fs-2'></i>
          </div>
          <div className="col-10">
            <h1 className='px-3'>1453</h1>
            <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="row">
          <div className="col-1">
            <i className='bi bi-people text-primary fs-2'></i>
          </div>
          <div className="col-10">
            <h1 className='px-3'>32</h1>
            <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
