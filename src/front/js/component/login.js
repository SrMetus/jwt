// src/components/Login.js
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [log, setLog] = useState({
    email: "",
    password: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLog({ ...log, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await actions.login(log);
      setLog({
        email: "",
        password: ""
      });
      navigate("/vistaprivada");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="col-8 p-4 b rounded login" onSubmit={handleSubmit}>
          <div className=" mb-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="email@email.com"
              onChange={handleChange}
              value={log.email}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="contraseña"
              onChange={handleChange}
              value={log.password}
              required
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-success">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
