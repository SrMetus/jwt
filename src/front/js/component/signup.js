import "../../styles/home.css";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
    const { actions } = useContext(Context)
    const [log, setLog] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLog({ ...log, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Haciendo clic en Crear")
        await actions.signup(log)
        setLog({
            email: "",
            password: "",
        });
    }

    return (
        <div className="d-flex justify-content-center">
            <form className="w-50 border border-4 shadow rounded p-5 my-3" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="inputEmail" className="form-label">
                        Correo
                    </label>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="email@gmail.com"
                            value={log.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="password" className="form-control-label">
                        Contraseña
                    </label>
                    <div>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            value={log.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-primary my-2 col-">
                        Crear
                    </button>
                </div>
            </form>
        </div>
    );
};