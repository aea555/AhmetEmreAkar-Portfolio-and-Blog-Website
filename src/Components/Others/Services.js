function Services() {
  return (
    <div className="container-xl text-center mt-5 mb-5 skills">
      <h1 className="pt-3 mb-3">Skills</h1>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <i className="fa-solid fa-compass-drafting fa-2x"></i>
          <h5>UI Design</h5>
          <p>I can design dynamic and neat user interfaces.</p>
        </div>
        <div className="col-sm-12 col-md-6">
          <i className="fa-solid fa-code fa-2x"></i>
          <h5>Backend Development</h5>
          <p>I can write functional backend code w/databases, payment systems etc.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
