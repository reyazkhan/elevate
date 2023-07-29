import React, { useEffect, useState } from "react";
import { get } from "../../services/api.ts";

interface ProductsType {
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	rating: any;
	title: string;
}

const Card = ({ data }: any) => {
	return (
		<div className='flex flex-col gap-2 justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full items-center px-12 py-4'>
			<h1 className='text-2xl font-bold'>{data?.category}</h1>
			<p className='text-red-500 text-xl font-semibold'>
				Price{" "}
				<span className='text-black font-bold'>
					{data?.price + " $"}
				</span>
			</p>
			<img src={data?.image} alt='' className='h-60 w-full my-8' />
		</div>
	);
};

const Products = (props) => {
	const [productsArray, setProductsArray] = useState<Array<ProductsType>>([]);
	const [resultArray, setResultArray] = useState<Array<ProductsType>>([]);

	console.log("props in Products", props);

	// const changeProductBasedOnCategory=()=>{

	// };
	// const handleSearch = () => {

	// };
	useEffect(() => {
		// (async () => {
		if (props?.searchProduct) {
			const searchResult = resultArray.filter(
				(prd: ProductsType, index: number) =>
					prd.title.includes(props?.searchProduct)
			);
			console.log("searchResult", searchResult);
			setProductsArray(searchResult);
			return;
		}
		if (props?.selectedCategory) {
			const data: any = get(
				`products/category/${props?.selectedCategory}`
			);
			data.then((d) => {
				if (d?.length) {
					console.log("datata", d);
					setProductsArray(d);
					setResultArray(d);
				}
			});
		} else {
			const data: any = get("products");
			data.then((d) => {
				if (d?.length) {
					console.log("datata", d);
					setProductsArray(d);
					setResultArray(d);
				}
			});
		}

		// })();
	}, [props?.selectedCategory, props?.searchProduct]);
	return (
		<>
			<div className='my-8'>
				<div className='py-3 flex justify-center'>
					<h1 className='text-3xl md:text-5xl font-bold '>
						Man & Woman Fashion
					</h1>
				</div>
				<div className='grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-2 md:px-0'>
					{productsArray.map((item: any, index: number) => (
						<div key={item + index} className='flex'>
							<Card data={item} />
						</div>
					))}
				</div>
				{!props?.searchProduct && !productsArray?.length && (
					<div className='flex justify-center'>
						<h1 className='text-3xl text-green-500'>
							Data Loading...
						</h1>
					</div>
				)}
				{props?.searchProduct && !productsArray?.length ? (
					<div className='flex justify-center'>
						<h1 className='text-3xl text-green-500'>
							No Data Found
						</h1>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default Products;
