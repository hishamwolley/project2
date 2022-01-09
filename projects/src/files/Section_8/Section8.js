import React from "react";
import PostSection8 from "./PostSection8";

import img1 from "../../images/section2/1.png";
import img2 from "../../images/section2/2.png";
import img3 from "../../images/section2/3.png";

import { Row, Col } from "react-bootstrap";

const Section8 = () => {
	return (
		<section className="d-md-flex w-100 bg-white pt-5 pb-5 ">
			<section className="overview">
				<h4>
					BlueBaricade Blockchain
					<br />
					Resources
				</h4>
			</section>
			<div className="w-100-70">
				<section
					style={{ borderBottom: "1px solid #d3d3d3", paddingBottom: "2rem" }}
				>
					<Row>
						<Col>
							<PostSection8 img={img1} alt="img" />
						</Col>

						<Col>
							<PostSection8 img={img3} alt="img" />
						</Col>
					</Row>
				</section>
				<section style={{ paddingTop: "2rem" }}>
					<Row>
						<Col>
							<PostSection8 img={img3} alt="img" />
						</Col>

						<Col>
							<PostSection8 img={img2} alt="img" />
						</Col>
					</Row>
				</section>
			</div>
		</section>
	);
};

export default Section8;
