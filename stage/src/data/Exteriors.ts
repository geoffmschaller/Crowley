import DWA_MAIN from '../static/images/projects/awning.jpg';
import DWA_ONE from '../static/images/projects/awning4.jpg';
import DWA_TWO from '../static/images/projects/awning2.jpg';
import DWA_THREE from '../static/images/projects/awning3.jpg';
import DWA_FOUR from '../static/images/projects/window.jpg';
import DECKS_MAIN from '../static/images/projects/patio.jpg';
import DECKS_ONE from '../static/images/projects/patio4.jpg';
import DECKS_TWO from '../static/images/projects/stairs.jpg';
import DECKS_THREE from '../static/images/projects/patio2.jpg';
import DECKS_FOUR from '../static/images/projects/patio3.jpg';
import EXTERIOR_HEADER_IMAGE from '../static/images/exteriors_header_bar.jpg';
import CategoryInterface from "../interfaces/CategoryInterface";

const EXTERIORS: CategoryInterface = {
	title: "Custom Exteriors",
	description: "A new Exterior upgrade can transform any home from worn and lived in to charming and new. Ask us about some of the ways we can reinvigorate your home.",
	header: EXTERIOR_HEADER_IMAGE,
	categories: [
		{
			title: "Doors / Windows / Awnings",
			description: "Tired of your homes generic doors and windows? It's time for Crowley Construction to help you design the exterior of your dreams.",
			mainImage: DWA_MAIN,
			previewImages: [DWA_ONE, DWA_TWO, DWA_THREE, DWA_FOUR]
		},
		{
			title: "Decks & Patios",
			description: "Nothing gets you ready for BBQ season like a custom deck. Whether its a remodel, addition, or new build, Crowley Construction can help.",
			mainImage: DECKS_MAIN,
			previewImages: [DECKS_ONE, DECKS_TWO, DECKS_THREE, DECKS_FOUR]
		}
	]
};

export default EXTERIORS;
