import INTERIORS_IMAGE from '../static/images/interior_thumb.jpg'
import EXTERIORS_IMAGE from '../static/images/exterior_thumb.jpg';
import CUSTOM_PROJECTS from '../static/images/cabinets2_thumb.jpg';
import BlockMenuInterface from "../interfaces/BlockMenuInterface";

const BLOCK_MENU_ITEMS: BlockMenuInterface[] = [
	{
		image: INTERIORS_IMAGE,
		title: "Interiors",
		description: "Let us help you design the interior that you and your family will fall in love with.",
		link: "/interiors"
	},
	{
		image: EXTERIORS_IMAGE,
		title: "Exteriors",
		description: "Reinvent your homes exterior and custom tailor it to your exact needs.",
		link: "/exteriors"
	},
	{
		image: CUSTOM_PROJECTS,
		title: "Custom Projects",
		description: "Have a smaller remodel project for us? We've got you covered there too.",
		link: "/custom-projects"
	},
];

export default BLOCK_MENU_ITEMS;
