import React from 'react';
import styles from './Footer.module.sass';
import MAIN_LOGO from '../../static/images/logos/mainlogo2.png';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<img src={MAIN_LOGO} alt=""/>
			<div className={styles.socialBar}>
				<i className="fab fa-instagram"/>
				<i className="fab fa-facebook-square"/>
				<i className="fab fa-yelp"/>
			</div>
			<div className={styles.address}>P.O. Box 382 Parma, Idaho 83660 | (208) 504 - 9245</div>
			<div className={styles.copy}>© Crowley Construction LLC - {new Date().getFullYear()} - All Rights Reserved.</div>
		</div>
	);
};

export default Footer;
