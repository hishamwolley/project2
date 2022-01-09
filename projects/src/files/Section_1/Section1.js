import React from "react";
import backgroundImage from "../../images/background-image.png";
import { BsArrowRight } from "react-icons/bs";
import playButton from "../../images/play-button.png";

const Section1 = () => {
	return (
		<main
			className="w-100"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<section className="w-100 h-100 d-md-flex ">
				<div className="d-md-none w-100 vh-50 playParent">
					<div className=" w-50">
						<img className="playChild" src={playButton} alt="play logo"></img>
					</div>
				</div>
				<div className="h-100 trial">
					<section
						className="pt-5 heightTrial"
						style={{
							paddingLeft: "30px",
						}}
					>
						<h1 className="text-white">Lorem Ipsum Dolor</h1>
					</section>

					<article
						className="text-white mw-90"
						style={{
							paddingLeft: "30px",
							fontSize: "20px",
							// maxWidth: "80%",
						}}
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
							ex nibh. Duis ultricies turpis mi, vel plvinar us auctor sed.
							Aenean fermentum nunc erat, suscipit feugiat magna comentum vitae.
							Sed pulvinar, massa quis.
						</p>
						<button
							style={{
								fontSize: "16px",
								boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
								backgroundColor: "#02509a",
								border: "none",
								color: "white",
								padding: "10px 16px",
								marginTop: "3rem",
								display: "flex",
								alignItems: "center",
								width: "190px",
								justifyContent: "space-between",
							}}
						>
							<span>Get Started Now</span>
							<span>
								<BsArrowRight size="1.25rem" />
							</span>
						</button>
					</article>
				</div>
				<div className="playParent w-50 d-none d-md-block">
					<img className="playChild" src={playButton} alt="play logo"></img>
				</div>
			</section>
			<section
				className="mt-5 d-flex pt-5 pb-5 w-100"
				style={{
					width: "100%",
					backgroundColor: "#121212",
				}}
			>
				<section
					className="w-50 text-white"
					style={{
						paddingLeft: "30px",
					}}
				>
					<article>
						<h4>Blue Barricade Support for Blockchain Transfers</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
							ex nibh. Duis ultricies turpis mi, vel pulvinar purus auctor sed.
							Aenean fermentum nunc erat Lorem ipsum dolor sit amet, consectetur
							adipiscing elit.
						</p>
					</article>
				</section>
				<section className="w-50 d-flex justify-content-end align-items-center mr-2 ">
					<button
						style={{
							fontSize: "16px",
							backgroundColor: "#02509a",
							border: "none",
							color: "white",
							padding: "10px 16px",
							display: "flex",
							alignItems: "center",
							marginRight: "2rem",
							justifyContent: "space-between",
						}}
					>
						<span>Explore More</span>
						<span className="ml-1">
							<BsArrowRight size="1.125rem" />
						</span>
					</button>
				</section>
			</section>
		</main>
	);
};

export default Section1;
