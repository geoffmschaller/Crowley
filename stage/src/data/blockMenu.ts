import BlockMenuInterface from "../interfaces/BlockMenuInterface";

const BLOCK_MENU_ITEMS: BlockMenuInterface[] = [
	{
		image: require('../static/images/thumbs/interior_thumb.jpg'),
		title: "Interiors",
		description: "Let us help you design the interior that you and your family will fall in love with.",
		link: "/interiors"
	},
	{
		image: require('../static/images/thumbs/exterior_thumb.jpg'),
		title: "Exteriors",
		description: "Reinvent your homes exterior and custom tailor it to your exact needs.",
		link: "/exteriors"
	},
	{
		image: require('../static/images/thumbs/cabinets_thumb.jpg'),
		title: "Custom Projects",
		description: "Have a smaller remodel project for us? We've got you covered there too.",
		link: "/custom-projects"
	},
];

export default BLOCK_MENU_ITEMS;
