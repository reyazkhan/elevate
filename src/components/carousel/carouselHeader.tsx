import React from "react";
import { Carousel } from "flowbite-react";
// import imageSliderData from "../../constant/imageslider.ts";
const imageSliderData: any = [
	"https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMn1PCo4QTFWeaPKo6GpAZW1Tp8cDB24uVORP0lIZl8GzWsQAVRNDopBQ4yBXrgHaM1g&usqp=CAU",
	"https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/01/25181555/eCommerce-Cartoon.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTJtFr0V1A9u8eSUWv5oEaQKV8BiwtdBsZg&usqp=CAU",
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
								height={100}
								width={100}
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
