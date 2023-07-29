import logo from "./logo.svg";
import "./App.css";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contents from "./components/topcontents/contents.tsx";
import CarouselHeader from "./components/carousel/carouselHeader.tsx";
import Header from "./components/header/header.tsx";
import Products from "./components/products/products.tsx";
import { useState } from "react";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [searchProduct, setSearchProduct] = useState("");
	const changeProductBasedOnCategory = (value) => {
		setSelectedCategory(value);
	};
	const changeProductBasedOnSearch = (value) => {
		setSearchProduct(value);
	};
	return (
		<>
			{/* <FontAwesomeIcon icon={faPenNib} /> */}
			{/* <Contents /> */}
			<Header
				changeProductBasedOnCategory={changeProductBasedOnCategory}
				changeProductBasedOnSearch={changeProductBasedOnSearch}
			/>
			<div className='mt-[450px] md:w-[80%] mx-auto'>
				<Products
					selectedCategory={selectedCategory}
					searchProduct={searchProduct}
				/>
			</div>
			{/* <CarouselHeader /> */}
		</>
	);
}

export default App;
