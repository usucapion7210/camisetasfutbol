import React from "react";
import estilos from "./navbar.module.css";

const Navbar = () => {
	return (
		<nav className={estilos.nav}>
			<ul className="nav_ul">
				<li className="nav_li">
					<a href="https://www.google.com.ar/" className="nav_ul_a">
						productos
					</a>
				</li>
				<li className="nav_li">
					<a href="https://www.google.com.ar/" className="nav_ul_a">
						nosotros
					</a>
				</li>
				<li className="nav_li">
					<a href="https://www.google.com.ar/" className="nav_ul_a">
						contacto
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
