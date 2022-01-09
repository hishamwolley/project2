import React from "react";
import img from "../../images/Section5/image.png";
import { BsArrowRight } from "react-icons/bs";

const Section5 = () => {
	return (
		<section
			className="w-100 align-items-center d-md-flex"
			style={{
				backgroundColor: "#2b2d2f",
			}}
		>
			<section
				className="w-100-50 d-md-none"
				style={{
					height: "325px",
					backgroundImage: `url(${img})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			></section>

			<article
				className="pt-3 pb-3 w-100-50 text-white  pl-30"
				style={{
					fontSize: "20px",
				}}
			>
				<p className="font-weight-bold text-center-left">
					Get started ith Blue Barricade
				</p>
				<p className="mw-100-70" style={{ lineHeight: "2.25rem" }}>
					Join an existing network. Build your own blockchain solutions.
					Co-create with our experts. Partner with others for new opportunities.
					Wherever you are in your blockchain journey, IBM Blockchain will meet
					you
				</p>
				<a href="#" className="d-block text-center-left">
					Get Started Now
					<span className="ml-2">
						<BsArrowRight />
					</span>
				</a>

				<a href="#" className="d-block mt-2 text-center-left">
					Learn Blockchain basics
					<span className="ml-2">
						<BsArrowRight />
					</span>
				</a>
			</article>
			<section
				className="w-100-50 d-none d-md-block"
				style={{
					height: "325px",
					backgroundImage: `url(${img})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			></section>
		</section>
	);
};

export default Section5;
