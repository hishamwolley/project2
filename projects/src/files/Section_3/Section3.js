import React from "react";
import ArticleSection3 from "./ArticleSection3";
import clock from "../../images/section3/clock.png";
import talking from "../../images/section3/talking.png";
import thinking from "../../images/section3/thinking.png";

const Section3 = () => {
	return (
		<section className="d-md-flex w-100 bg-white pt-4 pb-4 text-center">
			<section className="benefits">
				<h4>Benefits</h4>
			</section>
			<section className="w-100-70 d-flex pl-30-0">
				<ArticleSection3 img={clock} alt="clock logo" />
				<ArticleSection3 img={talking} alt="messages logo" />
				<ArticleSection3 img={thinking} alt="thinking logo" />
			</section>
		</section>
	);
};

export default Section3;
