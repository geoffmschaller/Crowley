import React, {FunctionComponent} from 'react';
import styles from './ImageHeader.module.sass';

interface ImageHeaderPropsInterface {
	image: string
}

const ImageHeader: FunctionComponent<ImageHeaderPropsInterface> = ({image}) => {
	return (
		<div className={styles.imageHeader} style={{backgroundImage: `url(${image})`}}>
			<div className={styles.slant}>
				<div className={styles.text}>Dream. Build. Enjoy.</div>
			</div>
			<p>Welcome to Crowley Construction, tell us about your dream project and we will make it a reality. Let's get started! </p>
			<button>Get Started</button>
		</div>
	);
}

export default ImageHeader;
