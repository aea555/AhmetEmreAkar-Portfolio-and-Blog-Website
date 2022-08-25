function Login() {
  return (
    <form className="col-6 position-absolute p-5 top-50 start-50 translate-middle">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
