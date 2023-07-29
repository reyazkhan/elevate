import React from "react";
import Contents from "../topcontents/contents.tsx";
import CarouselHeader from "../carousel/carouselHeader.tsx";
import Menubar from "../menubar/menubar.tsx";

const Header = (props: any) => {
	const changeProductBasedOnCategory = (value: string) => {
		props?.changeProductBasedOnCategory(value);
	};
	const changeProductBasedOnSearch = (value: string) => {
		props?.changeProductBasedOnSearch(value);
	};

	return (
		<header>
			<div className='md:w-[80%] mx-auto'>
				<Contents />
			</div>
			<div className='absolute top-0 w-full'>
				<CarouselHeader />
			</div>
			<div className='absolute top-20 md:w-[80%] left-[10%] mx-auto'>
				<Menubar
					changeProductBasedOnCategory={changeProductBasedOnCategory}
					changeProductBasedOnSearch={changeProductBasedOnSearch}
				/>
			</div>
		</header>
	);
};

export default Header;
