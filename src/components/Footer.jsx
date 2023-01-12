import React from "react";
import ReactDOM from "react-dom";


function Footer() {

	const d = new Date("July 21, 1983 01:15:00");
	let year = d.getFullYear();

	return <footer><p>Copyright @{year}</p></footer>;
}

export default Footer;
