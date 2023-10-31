import "../../styles/home.css";
import { Link } from "react-router-dom";
import React from 'react'

export const Private = () => {

    return (
        <>
            <div className="text-center mt-5">
                <h1>Vista Privada</h1>
                <Link to="/">
                    <h1>Logout</h1>
                </Link>
            </div>
        </>
    );
};