import { useState } from "react";
import axios from "axios";
import qs from "qs";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = qs.stringify({
    email: email,
    password: password,
  });

  const config = {
    method: "post",
    url: "http://localhost:8000/api/users/admin/login",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios(config);
      const user = response.data;
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container-xl d-flex vh-100 justify-content-center align-items-center">
      <form className="col-md-6">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={handleLogin} type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
