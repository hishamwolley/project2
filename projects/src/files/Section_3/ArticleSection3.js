import React from "react";

const ArticleSection3 = ({ img, alt }) => {
	return (
		<section className=" w-33">
			<article className="mw-95">
				<h4 className="d-md-block d-none">Unmatched speed and reliability</h4>
				<img src={img} alt={alt}></img>
				<p className="d-none d-md-block" style={{ fontSize: "14px" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque
					est, semper vel tristique in, laoreet non lectus. Nulla efficitur
					libero at velit tempus condimentum.
				</p>
				<h4 className="d-md-none">Unmatched speed and reliability</h4>
			</article>
		</section>
	);
};

export default ArticleSection3;
