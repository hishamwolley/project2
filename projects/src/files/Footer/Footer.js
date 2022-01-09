import React from "react";

const Footer = () => {
	return (
		<footer
			style={{
				display: "flex",
				width: "100%",
				backgroundColor: "#2b2d2f",
				paddingTop: "3rem",
				paddingBottom: "6rem",
				color: "white",
			}}
		>
			<section style={{ width: "30%", paddingLeft: "30px" }}>
				<h3 style={{ maxWidth: "60%" }}>
					Learn more about BlueBarricade Blockchain
				</h3>
			</section>
		</footer>
	);
};

export default Footer;
