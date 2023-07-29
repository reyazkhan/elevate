import {
	faBars,
	faCartShopping,
	faMagnifyingGlass,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Label, TextInput, Tooltip } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { get } from "../../services/api.ts";

const Menubar = (props) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [categories, setCategories] = useState<Array<string>>();
	const [selectedCategory, setSelectedCategory] = useState("");
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
		console.log(windowWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	useEffect(() => {
		console.log("Window Width:", windowWidth);
		setWindowWidth(windowWidth);
	}, [windowWidth]);

	useState(() => {
		const data: any = get("products/categories");
		data.then((d) => {
			if (d?.length) {
				console.log("categories", d);
				setCategories(d);
			}
		});
	});

	const handleHamburger = () => {
		if (window.innerWidth <= 768) {
			// Code to run when the device/browser width is 400px or less
			console.log("Hamburger clicked on mobile!");
			setShowMenu(!showMenu);
		}
	};

	const handleItemClick = (cat) => {
		setSelectedCategory(cat);
		props?.changeProductBasedOnCategory(cat);
	};
	const handleSearch = (e: any) => {
		props?.changeProductBasedOnSearch(e.target.value);
	};

	return (
		<div className='my-8 flex gap-8 md:gap-4 xl:gap-8 items-center justify-between'>
			<div className='flex cursor-pointer'>
				{windowWidth > 768 && (
					<Tooltip content='Work on mobile/tab' style='light'>
						<FontAwesomeIcon
							xml={""}
							onClick={handleHamburger}
							icon={faBars}
							className='h-6 md:h-8 lg:h-12'
							color='black'
						/>
					</Tooltip>
				)}
				{windowWidth <= 768 && (
					<FontAwesomeIcon
						xml={""}
						onClick={handleHamburger}
						icon={faBars}
						className='h-6 md:h-8 lg:h-12'
						color='black'
					/>
				)}
			</div>
			<div className='hidden lg:block cursor-pointer'>
				<Dropdown
					label={selectedCategory ? selectedCategory : "All Category"}
				>
					{categories?.map((cat: string, index: number) => (
						<Dropdown.Item
							key={index}
							value={cat}
							onClick={() => handleItemClick(cat)}
							className={`${
								cat === selectedCategory ? "bg-green-300" : ""
							}`}
						>
							{cat}
						</Dropdown.Item>
					))}
				</Dropdown>
			</div>
			{showMenu && windowWidth <= 768 && (
				<div
					className={`${
						windowWidth >= 500 ? "hidden" : ""
					}absolute top-20 left-[3.5rem] cursor-pointer `}
				>
					<Dropdown
						label={
							selectedCategory ? selectedCategory : "All Category"
						}
					>
						{categories?.map((cat: string, index: number) => (
							<Dropdown.Item
								key={index}
								value={cat}
								onClick={() => handleItemClick(cat)}
								className={`${
									cat === selectedCategory
										? "bg-green-300"
										: ""
								}`}
							>
								{cat}
							</Dropdown.Item>
						))}
					</Dropdown>
				</div>
			)}
			<div className='flex bg-white rounded-lg'>
				<div className='border-2 border-gray-300 p-2 '>
					<input
						className='outline-none text-gray-500 w-[150px] md:w-[150px] lg:w-[200px] xl:w-[400px]'
						placeholder='Search this blog'
						onChange={handleSearch}
					/>
				</div>
				<div className='bg-red-500 flex items-center justify-center p-2 px-4 rounded-r-md cursor-pointer'>
					<FontAwesomeIcon
						xml={""}
						icon={faMagnifyingGlass}
						color='white'
						fontWeight={600}
						// onClick={handleSearch}
					/>
				</div>
			</div>
			<div className='hidden lg:block cursor-pointer'>
				<Dropdown label='Language'>
					<Dropdown.Item>English</Dropdown.Item>
					<Dropdown.Item>Hindi</Dropdown.Item>
					<Dropdown.Item>Arabic</Dropdown.Item>
				</Dropdown>
			</div>
			<div className='hidden md:flex gap-2 items-center cursor-pointer'>
				<FontAwesomeIcon
					xml={""}
					icon={faCartShopping}
					className='lg:h-6'
				/>
				<p className='lg:text-lg font-bold'>Cart</p>
			</div>
			<div className='hidden md:flex gap-2 items-center cursor-pointer'>
				<FontAwesomeIcon xml={""} icon={faUser} className='lg:h-6' />
				<p className='lg:text-lg font-bold'>User</p>
			</div>
		</div>
	);
};

export default Menubar;
