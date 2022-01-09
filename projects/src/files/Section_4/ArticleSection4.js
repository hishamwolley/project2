import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ArticleSection4 = ({ text, link }) => {
	return (
		<section className="w-33">
			<article className="mw-95">
				<h4>{text}</h4>
				<p className="d-none" style={{ fontSize: "14px" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque
					est, semper vel tristique in, laoreet non lectus. Nullam accumsan
					condimentum tincidunt. Nullam ultricies magna nec tellus sodales
					fermentum. Aliquam magna sem, consequat id dignissim vitae,
					consectetur ut ipsum.
				</p>
				<a href="#">
					{link}
					<span style={{ marginLeft: ".5rem" }}>
						<BsArrowRight />
					</span>
				</a>
			</article>
		</section>
	);
};

export default ArticleSection4;
