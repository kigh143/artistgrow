import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../apis";
import { storeService } from "../store/store";

const Login = () => {
  const [isNew, setIsNew] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [name, setName] = useState(null);
  const [user_type, setUserType] = useState(null);

  const login = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    api
      .loginUser(payload)
      .then((result) => {
        console.log(result)
        const info = { ...result.data,};
        storeService.save(result.data);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signUp = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
      confirm_password: confirmPassword,
      fullName: name,
      user_type
    };
   console.log(payload)
    api
      .registerUser(payload)
      .then((result) => {
        console.log(result);
        if(result['data']){
          history.push("/login");
        }

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row" style={{ height: "100vh", padding: 0, margin: 0 }}>
      <div className="col-md-6  flex justify-center items-center bg-white">
        <img src="./music.png" />
      </div>
      <div className="col-md-6 bg-gray-800 flex justify-center items-center text-white">
        {isNew ? (
          <div className="p-10">
            <div className="py-10 text-center">
              <h3 className="text-white text-2xl font-bold text-green-400 mb-10">
                ARTIST.GROW
              </h3>
              <p>Contribute to the growth of your favorite artists</p>
            </div>
            <form className="bg-gray-800 py-10 px-10 shadow">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  User type
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setUserType(e.target.value)}
                  value={user_type}
                >
                  <option value="fan">Fan</option>
                  <option value="artist">Artists</option>
                </select>
              </div>

              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="d-grid gap-2 py-2">
                <button className="btn btn-success btn-block" onClick={signUp}>
                  SignUp
                </button>
              </div>
            </form>
            <div className="d-grid gap-2 py-10">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setIsNew(false)}
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          <div className="p-10">
            <div className="py-10 text-center">
              <h3 className="text-white text-2xl font-bold text-green-400  mb-10">
                ARTIST.GROW
              </h3>
              <h3 className="text-white text-1xl">
                WELCOME BACK TO OUR PLATFORM
              </h3>
              <p>Contribute to the growth of your favorite artists</p>
            </div>
            <form className="bg-gray-800 py-10 px-10 shadow">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-grid gap-2 py-4">
                <button className="btn btn-success btn-block" onClick={login}>
                  Login
                </button>
              </div>
            </form>
            <div className="d-grid gap-2 py-10">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setIsNew(true)}
              >
                create account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
