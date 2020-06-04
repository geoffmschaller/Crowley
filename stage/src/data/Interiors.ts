import CategoryInterface from "../interfaces/CategoryInterface";

const INTERIORS: CategoryInterface = {
	title: "Custom Interiors",
	description: "It's time your family had a home interior as unique as you are! Now you can, and Crowley Construction can help!",
	header: require('../static/images/headers/interiors_header_bar.jpg'),
	categories: [
		{
			title: "Cabinets & Storage",
			description: "Whether it's a full kitchen remodel, bathroom vanity repair, custom closet storage, or a full wall entertainment center, Crowley Construction can design functional and beautiful storage for your home.",
			mainImage: require('../static/images/projects/interiors/cabinets-storage/shelving6.jpg'),
			previewImages: [
				require('../static/images/projects/interiors/cabinets-storage/shelving8.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving9.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet7.jpg'),
			],
			gallery: [
				require('../static/images/projects/interiors/cabinets-storage/cabinet.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet2.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet3.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet4.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet5.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet6.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet7.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet8.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet9.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet10.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet11.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/cabinet12.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving2.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving3.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving5.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving6.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving7.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving8.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/shelving9.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/storage3.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/storage4.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/storage5.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/storage6.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/storage7.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/storage8.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/storage9.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/storage10.jpg'),
				require('../static/images/projects/interiors/cabinets-storage/storage11.jpg'),
			],
			url: "/interiors/cabinets-storage"
		},
		{
			title: "Paneling",
			description: "Nothing impacts the feel of a room like the surrounding walls. Don't compromise for boring drywall any longer. Bring your walls to life with custom paneling from Crowley Construction.",
			mainImage: require('../static/images/projects/interiors/paneling/paneling.jpg'),
			previewImages: [
				require('../static/images/projects/interiors/paneling/paneling7.jpg'),
				require('../static/images/projects/interiors/paneling/paneling2.jpg'),
				require('../static/images/projects/interiors/paneling/paneling4.jpg'),
				require('../static/images/projects/interiors/paneling/paneling3.jpg'),
			],
			gallery: [
				require('../static/images/projects/interiors/paneling/paneling.jpg'),
				require('../static/images/projects/interiors/paneling/paneling2.jpg'),
				require('../static/images/projects/interiors/paneling/paneling3.jpg'),
				require('../static/images/projects/interiors/paneling/paneling4.jpg'),
				require('../static/images/projects/interiors/paneling/paneling5.jpg'),
				require('../static/images/projects/interiors/paneling/paneling6.jpg'),
				require('../static/images/projects/interiors/paneling/paneling7.jpg'),
				require('../static/images/projects/interiors/paneling/paneling8.jpg'),
				require('../static/images/projects/interiors/paneling/paneling9.jpg'),
			],
			url: "/interiors/paneling"
		},
		{
			title: "Doors & Entrances",
			description: "From repairing a door that just doesn't close smoothly to building a custom door that's perfect for your space and style, we can help!",
			mainImage: require('../static/images/projects/interiors/doors/door7.jpg'),
			previewImages: [
				require('../static/images/projects/interiors/doors/door6.jpg'),
				require('../static/images/projects/interiors/doors/door.jpg'),
				require('../static/images/projects/interiors/doors/door5.jpg'),
				require('../static/images/projects/interiors/doors/door4.jpg'),
			],
			gallery: [
				require('../static/images/projects/interiors/doors/door.jpg'),
				require('../static/images/projects/interiors/doors/door4.jpg'),
				require('../static/images/projects/interiors/doors/door5.jpg'),
				require('../static/images/projects/interiors/doors/door6.jpg'),
				require('../static/images/projects/interiors/doors/door7.jpg'),
			],
			url: "/interiors/doors-entrances"
		},
		{
			title: "Home Additions",
			description: "We offer a multitude of home renovation solutions to truly customize the interior of your home and transform it into the home of your dreams.",
			mainImage: require('../static/images/projects/interiors/home-additions/ceiling3.jpg'),
			previewImages: [
				require('../static/images/projects/interiors/home-additions/ceiling2.jpg'),
				require('../static/images/projects/interiors/home-additions/fireplace.jpg'),
				require('../static/images/projects/interiors/home-additions/mirror.jpg'),
				require('../static/images/projects/interiors/home-additions/ceiling.jpg'),
			],
			gallery: [
				require('../static/images/projects/interiors/home-additions/ceiling.jpg'),
				require('../static/images/projects/interiors/home-additions/ceiling2.jpg'),
				require('../static/images/projects/interiors/home-additions/ceiling3.jpg'),
				require('../static/images/projects/interiors/home-additions/fireplace.jpg'),
				require('../static/images/projects/interiors/home-additions/fireplace2.jpg'),
				require('../static/images/projects/interiors/home-additions/mirror.jpg'),
				require('../static/images/projects/interiors/home-additions/mirror2.jpg'),
			],
			url: "/interiors/home-additions"
		}
	]
};

export default INTERIORS;
