/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"

import axios from "axios"

export default function login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function login(e) {
    e.preventDefault()
    console.log("login")

    if (username === "" || password === "") {
      alert("Please fill all the fields")
    }

    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/signin/",
      data: {
        username: username,
        Password: password,
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  return (
    <section id="login" className="login">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">

          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-1">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</p>

                    <form className="login-form mx-1 mx-md-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="username" id="form3Example3c" className="form-control" value={username} onChange={handleUsername} />
                          <label className="form-label" htmlFor="form3Example3c">Username</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" className="form-control" value={password} onChange={handlePassword} />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>

                      {/* <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          Remember me
                        </label>
                      </div> */}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button onClick={login} type="button" className="btn btn-primary btn-lg">Login</button>
                      </div>

                    </form>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
