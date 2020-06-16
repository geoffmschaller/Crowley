import React from 'react';
import styles from './Gallery.module.sass';
import SubCategoryInterface from "../../interfaces/SubCategoryInterface";
import DesktopNavigation from "../../inflatables/navigation/desktop/DesktopNavigation";
import MobileNavigation from "../../inflatables/navigation/mobile/MobileNavigation";
import WidthRestrictor from "../../layout/WidthRestrictor";
import ImageHeader from "../../inflatables/headers/ImageHeader";

interface GalleryPropsInterface {
	data: SubCategoryInterface
}

class Gallery extends React.Component<GalleryPropsInterface, any> {

	state = {
		viewerImage: "",
		viewerOpen: false,
		offset: 0
	}

	setViewerImage = (image: string) => {
		let s = {...this.state};
		s.viewerImage = image;
		s.viewerOpen = true;
		s.offset = window.scrollY;
		this.setState(s);
		document.body.style.overflow = "hidden";
	}

	closeViewer = () => {
		let s = {...this.state};
		s.viewerOpen = false;
		document.body.style.overflow = 'auto';
		this.setState(s);
	}

	render() {
		return (
			<div className={styles.gallery}>
				<DesktopNavigation/>
				<MobileNavigation/>
				<ImageHeader image={this.props.data.mainImage}/>
				<WidthRestrictor>
					<div className={styles.holder}>
						<div className={styles.title}>{this.props.data.title}</div>
						<div className={styles.description}>{this.props.data.description}</div>
						<div className={styles.images}>
							{
								this.props.data.gallery.map((src: string, index: number) => {
									return <img src={src} alt="" key={index} onClick={() => this.setViewerImage(src)}/>
								})
							}
						</div>
					</div>
				</WidthRestrictor>
				<div className={this.state.viewerOpen ? [styles.viewer, styles.open].join(" ") : styles.viewer} onClick={() => this.closeViewer()}
				     style={{top: `${this.state.offset}px`}}>
					<img src={this.state.viewerImage} alt=""/>
				</div>
			</div>
		)
	}

}

export default Gallery;
