import OL_MAIN from '../static/images/projects/gym.jpg';
import OL_ONE from '../static/images/projects/coop.jpg';
import OL_TWO from '../static/images/projects/coop2.jpg';
import OL_THREE from '../static/images/projects/coop3.jpg';
import OL_FOUR from '../static/images/projects/coop4.jpg';
import FURNITURE_MAIN from '../static/images/projects/picnic4.jpg';
import FURNITURE_ONE from '../static/images/projects/bench.jpg';
import FURNITURE_TWO from '../static/images/projects/desk.jpg';
import FURNITURE_THREE from '../static/images/projects/desk2.jpg';
import FURNITURE_FOUR from '../static/images/projects/picnic.jpg';
import CUTTING_MAIN from '../static/images/projects/cutting9.jpg';
import CUTTING_ONE from '../static/images/projects/cutting7.jpg';
import CUTTING_TWO from '../static/images/projects/cutting2.jpg';
import CUTTING_THREE from '../static/images/projects/cutting3.jpg';
import CUTTING_FOUR from '../static/images/projects/cutting.jpg';
import CUSTOM_PROJECT_HEADER from '../static/images/jungleGym_header_bar.jpg';
import CategoryInterface from "../interfaces/CategoryInterface";

const CUSTOM_PROJECTS: CategoryInterface = {
	title: "Custom Projects",
	description: "It's the more personal items that mean the most to us. With years of experience Crowley Construction can help, from hand made doll houses, to carefully crafted cutting boards.",
	header: CUSTOM_PROJECT_HEADER,
	categories: [
		{
			title: "Outdoor Living",
			description: "Our expertise doesn't stop at your living space. We can help design and build chicken coops, sheds, cat condos/catios and even play structures!",
			mainImage: OL_MAIN,
			previewImages: [OL_ONE, OL_TWO, OL_THREE, OL_FOUR]
		},
		{
			title: "Furniture",
			description: "Custom furniture doesn't need to be complicated. We make it easy to design furniture that fits your unique space and needs.",
			mainImage: FURNITURE_MAIN,
			previewImages: [FURNITURE_ONE, FURNITURE_TWO, FURNITURE_THREE, FURNITURE_FOUR]
		},
		{
			title: "Cutting Boards",
			description: "Cutting boards are made with hard woods such as cherry, mahogany, and black walnut. They can be made in a variety of patterns. They can also be built in any size or come in a butcher block and cheese board matching set.",
			mainImage: CUTTING_MAIN,
			previewImages: [CUTTING_ONE, CUTTING_TWO, CUTTING_THREE, CUTTING_FOUR]
		}
	]
};

export default CUSTOM_PROJECTS;
