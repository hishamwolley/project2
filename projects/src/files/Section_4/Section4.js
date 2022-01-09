import React from "react";
import ArticleSection4 from "./ArticleSection4";
import TabsSection4 from "./TabsSection4";

const Section4 = () => {
	return (
		<div
			className="w-100 pt-4 pb-5"
			style={{
				backgroundColor: "#ebecf0",
			}}
		>
			<section className="d-md-flex w-100">
				<section className="overview">
					<h4>
						Blockchain <br />
						Solutions
					</h4>
				</section>
				<div className="w-100-70">
					<section className=" pl-30-0 d-flex">
						<ArticleSection4
							text="Lorem ipsum dolor"
							link="Lorem ipsum dolor"
						/>
						<ArticleSection4
							text="Lorem ipsum dolor it amet"
							link="Lorem ipsum dolor it amet"
						/>
						<ArticleSection4
							text="Lorem ipsum dolor"
							link="Lorem ipsum dolor"
						/>
					</section>

					<section className="w-90-mx-auto ">
						<TabsSection4 text1="Healthcare" text2="Lorem Ipsum" />
						<TabsSection4 text1="Dolor" text2="Consectetur " />
						<TabsSection4 text1="Pretium " text2="Amet" />
						<TabsSection4 text1="Healthcare" text2="Ipsum" />
					</section>
				</div>
			</section>
		</div>
	);
};

export default Section4;
