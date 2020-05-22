import SubCategoryInterface from "./SubCategoryInterface";

interface CategoryInterface {
	header: string,
	title: string,
	description: string,
	categories: SubCategoryInterface[]
}

export default CategoryInterface;
