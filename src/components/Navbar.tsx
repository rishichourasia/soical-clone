import React from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {
	const user = useSelector((state: any) => state.user);

	return (
		<nav className="navbar navbar-expand-lg card">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img
						className="logo"
						src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
						alt="logo"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="search">
					<input type="text" className="form-control" placeholder="Search" />
				</div>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<i className="bi bi-house-door-fill"></i>
						</li>
						<li className="nav-item">
							<i className="bi bi-compass"></i>
						</li>
						<li className="nav-item">
							<i className="bi bi-chat"></i>
						</li>
						<li className="nav-item">
							<i className="bi bi-heart"></i>
						</li>
						<li className="nav-item">
							<img src={user.profilePicture} alt="profilephoto" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
