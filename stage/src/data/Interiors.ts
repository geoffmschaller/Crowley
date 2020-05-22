import CABINETS_STORAGE_MAIN from '../static/images/projects/shelving6.jpg';
import CABINETS_STORAGE_ONE from '../static/images/projects/cabinet.jpg';
import CABINETS_STORAGE_TWO from '../static/images/projects/cabinet2.jpg';
import CABINETS_STORAGE_THREE from '../static/images/projects/cabinet3.jpg'
import CABINETS_STORAGE_FOUR from '../static/images/projects/cabinet4.jpg'
import PANELING_MAIN from '../static/images/projects/paneling.jpg';
import PANELING_ONE from '../static/images/projects/paneling2.jpg';
import PANELING_TWO from '../static/images/projects/paneling3.jpg';
import PANELING_THREE from '../static/images/projects/paneling4.jpg';
import PANELING_FOUR from '../static/images/projects/paneling5.jpg';
import DOORS_MAIN from '../static/images/projects/door7.jpg';
import DOORS_ONE from '../static/images/projects/door.jpg';
import DOORS_TWO from '../static/images/projects/door4.jpg';
import DOORS_THREE from '../static/images/projects/door5.jpg';
import DOORS_FOUR from '../static/images/projects/door6.jpg';
import ADDITIONS_MAIN from '../static/images/projects/ceiling3.jpg';
import ADDITIONS_ONE from '../static/images/projects/ceiling.jpg';
import ADDITIONS_TWO from '../static/images/projects/ceiling2.jpg';
import ADDITIONS_THREE from '../static/images/projects/fireplace2.jpg';
import ADDITIONS_FOUR from '../static/images/projects/fireplace.jpg';
import INTERIOR_HEADER_IMAGE from '../static/images/interiors_header_bar.jpg';
import CategoryInterface from "../interfaces/CategoryInterface";

const INTERIORS: CategoryInterface = {
	title: "Custom Interiors",
	description: "It's time your family had a home interior as unique as you are! Now you can, and Crowley Construction can help!",
	header: INTERIOR_HEADER_IMAGE,
	categories: [
		{
			title: "Cabinets & Storage",
			description: "Whether it's a full kitchen remodel, bathroom vanity repair, custom closet storage, or a full wall entertainment center, Crowley Construction can design functional and beautiful storage for your home.",
			mainImage: CABINETS_STORAGE_MAIN,
			previewImages: [CABINETS_STORAGE_ONE, CABINETS_STORAGE_TWO, CABINETS_STORAGE_THREE, CABINETS_STORAGE_FOUR]
		},
		{
			title: "Paneling",
			description: "Nothing impacts the feel of a room like the surrounding walls. Don't compromise for boring drywall any longer. Bring your walls to life with custom paneling from Crowley Construction.",
			mainImage: PANELING_MAIN,
			previewImages: [PANELING_ONE, PANELING_TWO, PANELING_THREE, PANELING_FOUR]
		},
		{
			title: "Doors & Entrances",
			description: "From repairing a door that just doesn't close smoothly to building a custom door that's perfect for your space and style, we can help!",
			mainImage: DOORS_MAIN,
			previewImages: [DOORS_ONE, DOORS_TWO, DOORS_THREE, DOORS_FOUR]
		},
		{
			title: "Home Additions",
			description: "We offer a multitude of home renovation solutions to truly customize the interior of your home and transform it into the home of your dreams.",
			mainImage: ADDITIONS_MAIN,
			previewImages: [ADDITIONS_ONE, ADDITIONS_TWO, ADDITIONS_THREE, ADDITIONS_FOUR]
		}
	]
};

export default INTERIORS;
