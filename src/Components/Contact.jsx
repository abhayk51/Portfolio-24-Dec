
function Contact(){
  return (
    <div className="container-fluid p-md-5 py-4">
      <h1 className="fw-bold">Contact</h1>
      <hr className="border border-3 border-primary" style={{width:"70px"}} />
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <div className="row">
        <div className="col-md">
          <div className="row">
            <div className="col-1">
              <i className="bi bi-geo-alt fs-4 px-md-3 text-info"></i>
            </div>
            <div className="col-10">
              <h4>Address</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
            <i className="bi bi-telephone fs-4 px-md-3 text-info"></i>
            </div>
            <div className="col-10">
              <h4>Call Us</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
            <i className="bi bi-envelope fs-4 px-md-3 text-info"></i>
            </div>
            <div className="col-10">
              <h4>Email Us</h4>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <form action="">
            <div className="row form-group">
              <div className="col-md mb-3">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control" id="name"/>
              </div>
              <div className="col-md mb-3">
                <label htmlFor="mail">Your Email</label>
                <input type="text" className="form-control" id="mail"/>
              </div>
            </div>
              <div className="mb-3">
                <label htmlFor="sub">Subject</label>
                <input type="text" className="form-control" id="sub"/>
              </div>
              <div className="mb-3">
                <label htmlFor="msg">Message</label>
                <textarea className="form-control" id="msg" rows='5'></textarea>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact