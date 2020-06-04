import React, {FunctionComponent} from 'react';
import styles from './ImageHeader.module.sass';
import {Link} from "react-router-dom";
import SlantedButton from "../../elements/buttons/SlantedButton";

interface ImageHeaderPropsInterface {
	image: string
}

const ImageHeader: FunctionComponent<ImageHeaderPropsInterface> = ({image}) => {
	return (
		<div className={styles.imageHeader}>
			<div className={styles.background} style={{backgroundImage: `url(${image})`}}/>
			<div className={styles.overlay}>
				<div className={styles.slant}>
					<div className={styles.text}>Dream | Build | Enjoy</div>
				</div>
				<p>Welcome to Crowley Construction, tell us about your dream project and we will make it a reality. Let's get started! </p>
				<Link to={"/contact"}>
					<SlantedButton label={"Get Started!"} color={"yellow"}/>
				</Link>
			</div>
		</div>
	);
}

export default ImageHeader;
