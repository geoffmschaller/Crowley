import CategoryInterface from "../interfaces/CategoryInterface";

const CUSTOM_PROJECTS: CategoryInterface = {
	title: "Custom Projects",
	description: "It's the more personal items that mean the most to us. With years of experience Crowley Construction can help, from hand made doll houses, to carefully crafted cutting boards.",
	header: require('../static/images/headers/jungleGym_header_bar.jpg'),
	categories: [
		{
			title: "Outdoor Living",
			description: "Our expertise doesn't stop at your living space. We can help design and build chicken coops, sheds, cat condos/catios and even play structures!",
			mainImage: require('../static/images/projects/custom/outdoor-living/picnic4.jpg'),
			previewImages: [
				require('../static/images/projects/custom/outdoor-living/coop.jpg'),
				require('../static/images/projects/custom/outdoor-living/coop4.jpg'),
				require('../static/images/projects/custom/outdoor-living/gym.jpg'),
				require('../static/images/projects/custom/outdoor-living/storage.jpg'),
			],
			gallery: [
				require('../static/images/projects/custom/outdoor-living/coop.jpg'),
				require('../static/images/projects/custom/outdoor-living/coop2.jpg'),
				require('../static/images/projects/custom/outdoor-living/coop3.jpg'),
				require('../static/images/projects/custom/outdoor-living/coop4.jpg'),
				require('../static/images/projects/custom/outdoor-living/coop5.jpg'),
				require('../static/images/projects/custom/outdoor-living/gym.jpg'),
				require('../static/images/projects/custom/outdoor-living/picnic.jpg'),
				require('../static/images/projects/custom/outdoor-living/picnic2.jpg'),
				require('../static/images/projects/custom/outdoor-living/picnic4.jpg'),
				require('../static/images/projects/custom/outdoor-living/shelving4.jpg'),
				require('../static/images/projects/custom/outdoor-living/storage.jpg'),
				require('../static/images/projects/custom/outdoor-living/storage2.jpg'),
			],
			url: "/custom-projects/outdoor-living"
		},
		{
			title: "Furniture",
			description: "Custom furniture doesn't need to be complicated. We make it easy to design furniture that fits your unique space and needs.",
			mainImage: require('../static/images/projects/custom/furniture/bench.jpg'),
			previewImages: [
				require('../static/images/projects/custom/furniture/storage15.jpg'),
				require('../static/images/projects/custom/furniture/doll3.jpg'),
				require('../static/images/projects/custom/furniture/doll.jpg'),
				require('../static/images/projects/custom/furniture/desk.jpg'),
			],
			gallery: [
				require('../static/images/projects/custom/furniture/bench.jpg'),
				require('../static/images/projects/custom/furniture/desk.jpg'),
				require('../static/images/projects/custom/furniture/desk2.jpg'),
				require('../static/images/projects/custom/furniture/doll.jpg'),
				require('../static/images/projects/custom/furniture/doll2.jpg'),
				require('../static/images/projects/custom/furniture/doll3.jpg'),
				require('../static/images/projects/custom/furniture/storage12.jpg'),
				require('../static/images/projects/custom/furniture/storage13.jpg'),
				require('../static/images/projects/custom/furniture/storage14.jpg'),
				require('../static/images/projects/custom/furniture/storage15.jpg'),
				require('../static/images/projects/custom/furniture/table.jpg'),
				require('../static/images/projects/custom/furniture/table2.jpg'),
			],
			url: "/custom-projects/furniture"
		},
		{
			title: "Cutting Boards",
			description: "Cutting boards are made with hard woods such as cherry, mahogany, and black walnut. They can be made in a variety of patterns. They can also be built in any size or come in a butcher block and cheese board matching set.",
			mainImage: require('../static/images/projects/custom/cutting-boards/cutting2.jpg'),
			previewImages: [
				require('../static/images/projects/custom/cutting-boards/cutting9.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting5.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting3.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting7.jpg'),
			],
			gallery: [
				require('../static/images/projects/custom/cutting-boards/cutting.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting2.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting3.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting4.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting5.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting6.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting7.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting8.jpg'),
				require('../static/images/projects/custom/cutting-boards/cutting9.jpg'),
			],
			url: "/custom-projects/cutting-boards"
		}
	]
};

export default CUSTOM_PROJECTS;
