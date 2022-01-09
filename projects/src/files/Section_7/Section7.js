import React from "react";
import { Row, Col } from "react-bootstrap";

const Section7 = () => {
	return (
		<section
			className="d-md-flex w-100 pt-5 pb-5 "
			style={{
				backgroundColor: "#ebecf0",
				borderBottom: "1px solid #d3d3d3",
			}}
		>
			<section className="overview">
				<h4>
					Blockchain for
					<br /> industries
				</h4>
				<p
					className="d-none d-lg-block mw-50 mt-3"
					style={{ fontSize: "18px" }}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
					mollitia, molestiae quas vel sint
				</p>
			</section>
			<section className="w-100-70 pl-30-0  " style={{ fontSize: "18px" }}>
				<Row>
					<Col>
						<a href="#">Supply Chain</a>
					</Col>
					<Col>
						<a href="#">Media & advertising</a>
					</Col>
					<Col>
						<a href="#">Insurance</a>
					</Col>
				</Row>
				<Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
					<Col>
						<a href="#">Healthcare</a>
					</Col>
					<Col>
						<a href="#">Oil & Gas</a>
					</Col>
					<Col>
						<a href="#">Financial Services</a>
					</Col>
				</Row>

				<Row>
					<Col>
						<a href="#">Government</a>
					</Col>
					<Col>
						<a href="#">Telecmunications</a>
					</Col>
					<Col>
						<a href="#">Travel</a>
					</Col>
				</Row>

				<Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
					<Col>
						<a href="#">Retail</a>
					</Col>
					<Col>
						<a href="#">Manufacturing</a>
					</Col>
					<Col></Col>
				</Row>
			</section>
		</section>
	);
};

export default Section7;
