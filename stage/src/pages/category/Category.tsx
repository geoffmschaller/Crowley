import React from 'react';
import styles from './Category.module.sass';
import CategoryInterface from "../../interfaces/CategoryInterface";
import DesktopNavigation from "../../inflatables/navigation/desktop/DesktopNavigation";
import MobileNavigation from "../../inflatables/navigation/mobile/MobileNavigation";
import WidthRestrictor from "../../utils/layout/WidthRestrictor";
import ImageHeader from "../../inflatables/headers/ImageHeader";
import SlantedButton from "../../elements/buttons/SlantedButton";
import {Link} from "react-router-dom";

interface CategoryPropsInterface {
	data: CategoryInterface
}

class Category extends React.Component<CategoryPropsInterface, any> {
	render() {
		return (
			<div className={styles.category}>
				<DesktopNavigation/>
				<MobileNavigation/>
				<ImageHeader image={this.props.data.header}/>
				<WidthRestrictor>
					<div className={styles.holder}>
						<div className={styles.title}>{this.props.data.title}</div>
						<div className={styles.description}>{this.props.data.description}</div>
						{
							this.props.data.categories.map((cat, index) => {
								return <div className={styles.cat} key={index}>
									<img src={cat.mainImage} alt="" className={styles.mainImage}/>
									<div className={styles.information}>
										<div className={styles.title}>{cat.title}</div>
										<div className={styles.description}>{cat.description}</div>
										<div className={styles.grid}>
											{
												cat.previewImages.map((im: string, index: number) => {
													return <img src={im} alt="" key={index}/>
												})
											}
										</div>
										<div className={styles.buttonBar}>
											<Link to={cat.url}>
												<SlantedButton label={`View ${cat.title} Gallery`} color={"blue"}/>
											</Link>
										</div>
									</div>
									<div className={"clear"}/>
								</div>
							})
						}
					</div>
				</WidthRestrictor>

			</div>
		)
	}
}

export default Category;
