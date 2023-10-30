import "../../styles/home.css";
import { Link } from "react-router-dom";
import React from 'react'

export const Home = () => {

	return (
		<>
			<div className="text-center mt-5">
				<Link to="/signup">
					<h1>Signup</h1>
				</Link>
				<Link to="/login">
					<h1>Login</h1>
				</Link>
			</div>
		</>
	);
};
