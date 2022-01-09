import React from "react";
import { BsArrowRight } from "react-icons/bs";

const PostSection2 = ({ img, alt }) => {
	return (
		<section style={{ width: "90%", margin: "0 auto" }}>
			<h3 className="mw-95">Lorem ipsum dolor sit amet, consectetur.</h3>
			<img className="w-95" src={img} alt={alt}></img>
			<p className="w-95 mt-2" style={{ fontSize: "14px" }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque
				est, semper vel tristique in, laoreet non lectus. Nullam accumsan
				condimentum tincidunt. Nullam ultricies magna nec tellus sodales
				fermentum. Aliquam magna sem, consequat id dignissim vitae, consectetur
				ut ipsum.
			</p>
			<a href="#" className="d-block">
				Lorem ipsum dolor sit amet, consectetur adipiscing amet.
				<span className="ml-2">
					<BsArrowRight />
				</span>
			</a>
		</section>
	);
};

export default PostSection2;
