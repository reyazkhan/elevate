import React from "react";
import { Carousel } from "flowbite-react";
// import imageSliderData from "../../constant/imageslider.ts";
const imageSliderData: any = [
	"https://www.martechcube.com/wp-content/uploads/2021/04/iCloudModel-1-1024x576.jpg",
	"https://img.freepik.com/premium-photo/online-shopping-concept-fashion-internet-generate-ai_868783-1216.jpg",
	"https://img.freepik.com/premium-photo/online-shopping-concept-smartphone-blue-background-ai-generation_201606-4494.jpg",
	"https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/01/25181555/eCommerce-Cartoon.png",
	"https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-06/ecommerce-companies.png",
];
const CarouselHeader = () => {
	return (
		<div className='w-full '>
			<div className='h-[500px]'>
				<Carousel slide={true} indicators={false}>
					{imageSliderData?.map((data: any) => {
						return (
							<img
								key={data}
								style={{ height: "100%", width: "100%" }}
								// src={data?.src}
								src={data}
								alt=''
							/>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

export default CarouselHeader;
