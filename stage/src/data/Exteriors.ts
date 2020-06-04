import CategoryInterface from "../interfaces/CategoryInterface";

const EXTERIORS: CategoryInterface = {
	title: "Custom Exteriors",
	description: "A new Exterior upgrade can transform any home from worn and lived in to charming and new. Ask us about some of the ways we can reinvigorate your home.",
	header: require('../static/images/headers/exteriors_header_bar.jpg'),
	categories: [
		{
			title: "Doors / Windows / Awnings",
			description: "Tired of your homes generic doors and windows? It's time for Crowley Construction to help you design the exterior of your dreams.",
			mainImage: require('../static/images/projects/exteriors/doors-windows-awnings/awning.jpg'),
			previewImages: [
				require('../static/images/projects/exteriors/doors-windows-awnings/awning4.jpg'),
				require('../static/images/projects/exteriors/doors-windows-awnings/door2.jpg'),
				require('../static/images/projects/exteriors/doors-windows-awnings/door3.jpg'),
				require('../static/images/projects/exteriors/doors-windows-awnings/window.jpg'),
			],
			gallery: [
				require('../static/images/projects/exteriors/doors-windows-awnings/awning.jpg'),
				require('../static/images/projects/exteriors/doors-windows-awnings/awning2.jpg'),
				require('../static/images/projects/exteriors/doors-windows-awnings/awning3.jpg'),
				require('../static/images/projects/exteriors/doors-windows-awnings/awning4.jpg'),
				require('../static/images/projects/exteriors/doors-windows-awnings/door2.jpg'),
				require('../static/images/projects/exteriors/doors-windows-awnings/door3.jpg'),
				require('../static/images/projects/exteriors/doors-windows-awnings/window.jpg'),
			],
			url: "/exteriors/doors-windows-awnings"
		},
		{
			title: "Decks & Patios",
			description: "Nothing gets you ready for BBQ season like a custom deck. Whether its a remodel, addition, or new build, Crowley Construction can help.",
			mainImage: require('../static/images/projects/exteriors/decks-patios/patio4.jpg'),
			previewImages: [
				require('../static/images/projects/exteriors/decks-patios/patio6.jpg'),
				require('../static/images/projects/exteriors/decks-patios/patio.jpg'),
				require('../static/images/projects/exteriors/decks-patios/stairs.jpg'),
				require('../static/images/projects/exteriors/decks-patios/patio3.jpg'),
			],
			gallery: [
				require('../static/images/projects/exteriors/decks-patios/patio.jpg'),
				require('../static/images/projects/exteriors/decks-patios/patio2.jpg'),
				require('../static/images/projects/exteriors/decks-patios/patio3.jpg'),
				require('../static/images/projects/exteriors/decks-patios/patio4.jpg'),
				require('../static/images/projects/exteriors/decks-patios/patio5.jpg'),
				require('../static/images/projects/exteriors/decks-patios/patio6.jpg'),
				require('../static/images/projects/exteriors/decks-patios/stairs.jpg'),
			],
			url: "/exteriors/decks-patios"
		}
	]
};

export default EXTERIORS;
