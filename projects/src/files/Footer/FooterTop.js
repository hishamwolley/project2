import React from "react";
import { BsArrowRight } from "react-icons/bs";

const FooterTop = () => {
	return (
		<section
			className="d-flex w-100 pt-5 pb-5"
			style={{
				backgroundColor: "#ebecf0",
			}}
		>
			<section className="overview">
				<h4>
					Choose your <br />
					learning journey
				</h4>
				<p className="text-center-left mt-3 ">
					Lorem ipsum dolor sit amet consectetur
				</p>
				<a href="#" className="text-center-left d-block ">
					Lorem ipsum dolor sit amet.
					<span style={{ marginLeft: ".5rem" }}>
						<BsArrowRight />
					</span>
				</a>
			</section>
		</section>
	);
};

export default FooterTop;
