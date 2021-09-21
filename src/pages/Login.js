import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [isNew, setIsNew] = useState(false);
  const history = useHistory();

  const login = () => {
    history.push("/");
  };
  const signUp = () => {
    history.push("/");
  };

  return (
    <div className="row" style={{ height: "100vh", padding: 0, margin: 0 }}>
      <div className="col-md-6  flex justify-center items-center">
        <img src="./music.png" />
      </div>
      <div className="col-md-6 bg-gray-800 flex justify-center items-center text-white">
        {isNew ? (
          <div className="p-10">
            <div className="py-10 text-center">
              <h3 className="text-white text-2xl font-bold text-green-400">
                ARTIST-GROW
              </h3>
              <p>Contribute to the growth of your favorite artists</p>
            </div>
            <form className="bg-gray-700 py-10 px-10 shadow">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
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
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
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
                />
              </div>

              <div class="d-grid gap-2 py-2">
                <button
                  type="submit"
                  className="btn btn-success btn-block"
                  onClick={signUp}
                >
                  SignUp
                </button>
              </div>
            </form>
            <div class="d-grid gap-2 py-10">
              <button
                type="button"
                class="btn btn-outline-secondary"
                onClick={() => setIsNew(false)}
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          <div className="p-10">
            <div className="py-10 text-center">
              <h3 className="text-white text-2xl font-bold text-green-400">
                ARTIST-GROW{" "}
              </h3>
              <h3 className="text-white text-1xl">
                WELCOME BACK TO OUR PLATFORM
              </h3>
              <p>Contribute to the growth of your favorite artists</p>
            </div>
            <form className="bg-gray-700 py-10 px-10 shadow">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
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
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div class="d-grid gap-2 py-4">
                <button
                  type="submit"
                  className="btn btn-success btn-block"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </form>
            <div class="d-grid gap-2 py-10">
              <button
                type="button"
                class="btn btn-outline-secondary"
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
