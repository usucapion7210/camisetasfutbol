import React from "react";
import Navbar from "../Navbar/Navbar";
import style from "./footer.module.css";

const Footer = () => {
	return (
		<footer className={style.nav}>
			<h1>Footer</h1>
			<p> ® Roberto Trezzini</p>

			<Navbar />
		</footer>
	);
};

export default Footer;
