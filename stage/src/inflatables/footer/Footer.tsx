import React from 'react';
import styles from './Footer.module.sass';
import MAIN_LOGO from '../../static/images/logos/mainlogo2.png';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<img src={MAIN_LOGO} alt=""/>
			<div className={styles.socialBar}>
				<a href="https://www.facebook.com/crowleyconstructionid" target={"_blank"} rel="noopener noreferrer"><i className="fab fa-facebook-f"/></a>
				<a href="https://www.instagram.com/crowleyconstructionllc/?hl=en" target={"_blank"} rel="noopener noreferrer"><i className="fab fa-instagram"/></a>
				<a href="https://nz.pinterest.com/crowleyconstllc/" target={"_blank"} rel="noopener noreferrer"><i className="fab fa-pinterest-square"/></a>
				<a href="https://www.yelp.com/biz/crowley-construction-parma" target={"_blank"} rel="noopener noreferrer"><i className="fab fa-yelp"/></a>
			</div>
			<div className={styles.address}>P.O. Box 382 Parma, Idaho 83660 | (208) 504 - 9245</div>
			<div className={styles.copy}>© Crowley Construction LLC - {new Date().getFullYear()} - All Rights Reserved.</div>
		</div>
	);
};

export default Footer;
