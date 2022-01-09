import React from "react";
import volvo from "../../images/section6/vilvo-video-holder.png";

const Section6 = () => {
	return (
		<section className="w-100 d-md-flex pt-5 pb-5">
			<section className="overview">
				<h4>
					Blockchain use
					<br />
					cases
				</h4>
			</section>
			<section className="w-100-70-x">
				<div style={{ width: "100%" }}>
					<ul
						className="d-flex justify-content-between w-100-70 pr-30"
						style={{
							fontSize: "18px",
						}}
					>
						<li style={{ fontWeight: "bold", borderBottom: "2px blue solid" }}>
							Volvo
						</li>
						<li>Greenbay</li>
						<li>Negril Burn Unit</li>
						<li>Farm to Plant</li>
					</ul>
					<div className="d-xl-flex mt-5  justify-content-around">
						<div className="playParent w-100-70">
							<img src={volvo} className="w-100" alt="car" />
						</div>
						<article className="w-100-30 pl-30-0 mt-3-0">
							<h2>Volvo: Our 'Use Case' Scebario Video Here</h2>
							<p className="mt-4 mw-95 ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								mollitia, molestiae quas vel sint commodi repudiandae
								consequuntur voluptatum laborum numquam blanditiis harum
								quisquam eius sed odit fugiat iusto fuga praesentium optio,
								eaque rerum! Provident similique accusantium nemo autem.
								Veritatis
							</p>

							<a href="#" className="d-block mt-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								mollitia (04:27)
							</a>

							<a href="#" className="d-block mt-3">
								Lorem ipsum dolor sit.
							</a>
						</article>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Section6;
