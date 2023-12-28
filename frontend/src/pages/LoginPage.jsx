import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginSubmit (ev) {
    ev.preventDefault();
    try{
        await axios.post('/login', {email,password});
        alert('login')
    }
    catch(err) {
      alert(err);
    }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around ">
      <div className="mb-64">
        <h1 className="text-4xl  text-center mb-5">Login</h1>
        <form className="max-w-lg mx-auto " onSubmit={{handleLoginSubmit}}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(i) => setEmail(i.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(i) => setPassword(i.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2  text-gray-500">
            Don't have an account yet?{" "}
            <Link
              className="underline text-black font-semibold "
              to={"/register"}
            >
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
