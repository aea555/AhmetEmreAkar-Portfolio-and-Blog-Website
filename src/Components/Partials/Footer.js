function Footer() {
  return (
    <footer className="container-xl mt-5 p-4">
      <div className="row">
        <div className="col-6 mb-5">
          <h5>Contact</h5>
          <div className="d-flex flex-column">
            <a href="" className="link">
              Github
            </a>
            <a href="" className="link">
              Linkedin
            </a>
            <a className="link" href="mailto:akarahmet2002@gmail.com">
              Email: akarahmet2002@gmail.com
            </a>
          </div>
        </div>
        <div className="col-6 mb-5">
          <h5>Menu</h5>
          <div className="d-flex flex-column">
            <a href="" className="link">
              Home
            </a>
            <a href="" className="link">
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mb-5">
          <h5>Message Me</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="emailField" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="emailField" placeholder="Your email address..."></input>
            </div>
            <div className="mb-3">
              <label htmlFor="textField" className="form-label">
                Your Message
              </label>
              <textarea className="form-control" id="textField" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
