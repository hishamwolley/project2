import React from "react";
import PostSection2 from "./PostSection2";
import img1 from "../../images/section2/1.png";
import img2 from "../../images/section2/2.png";
import img3 from "../../images/section2/3.png";

const Section2 = () => {
	return (
		<section
			className="d-md-flex w-100 pt-5 pb-5"
			style={{
				backgroundColor: "#ebecf0",
			}}
		>
			<section className="overview">
				<h4>Overview</h4>
			</section>
			<section className="w-100-70 ">
				<article className="mw-100-70">
					<h3>Lorum Ipsum Dolur Sit amet</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						neque est, semper vel tristique in, laoreet non lectus. Nullam
						accumsan condimentum tincidunt. Nullam ultricies magna nec tellus
						sodales fermentum. Aliquam magna sem, consequat id dignissim vitae,
						consectetur ut ipsum. Aliquam sodales id ligula vel fermentum. Morbi
						a diam iaculis lacus bibendum ornare. Aliquam dapibus laoreet
						sapien, in varius purus semper vel. Nunc venenatis sem nisi, eu
						volutpat lacus sagittis a. Vestibulum ante ipsum primis in faucibus
						orci luctus et ultrices posuere cubilia curae; Fusce quis dictum
						est. Curabitur at ex metus. Nam venenatis sagittis dui in blandit.
					</p>
					<p className="mt-5">
						Cras facilisis porttitor erat sed mollis. Nullam vestibulum magna
						eget dolor rhoncus, in vehicula nibh sollicitudin. Vivamus venenatis
						eu elit ac convallis. Ut congue dignissim sem id venenatis.
						Pellentesque diam libero, feugiat a arcu a, cursus viverra quam.
						Phasellus molestie aliquam velit, condimentum feugiat metus feugiat
						eget. Praesent in neque non lorem semper pretium. Phasellus et sem
						at est hendrerit vulputate ac lacinia nibh. Cras maximus quam vitae
						massa sollicitudin, eget ultricies arcu pellentesque.
					</p>
				</article>
				<div className="mw-95 mb-4 mt-5">
					<hr />
				</div>
				<section className="d-flex w-100 justifyCont pl-30-0">
					<PostSection2 img={img1} alt="image" show="d-none d-md-block" />
					<PostSection2 img={img2} alt="image" />
					<PostSection2 img={img3} alt="image" />
				</section>
			</section>
		</section>
	);
};

export default Section2;
