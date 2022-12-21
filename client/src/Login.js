import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./index.css";
const Register = () => {
  const [submission, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let temp = { ...submission };
    temp[e.target.name] = e.target.value;
    setData(temp);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const temp = { ...submission };
      delete temp.confirm_password;
      const response = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        alert("Login successful!");
        navigate("/");
      } else alert(`error: ${response.statusText}\n${data.msg}`);
    } catch (error) {
      alert(`error:${error}`);
    }
  };
  return (
    <>
      <div className="center">
        <h1>TbOok</h1>
        <hr style={{ width: "40%" }} />
        <div className="login">
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email"> Email</label>
            <br />
            <input
              name="email"
              type={"email"}
              onChange={handleChange}
              value={submission.email}
              required
            />{" "}
            <br /> <br />
            <label htmlFor="password"> Password</label>
            <br />
            <input
              name="password"
              onChange={handleChange}
              type={"password"}
              value={submission.password}
              required
            />
            <br />
            <br />
            <button>Login</button>
            <br />
            <br />
            <Link to="/register"> Not registered? Register</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
