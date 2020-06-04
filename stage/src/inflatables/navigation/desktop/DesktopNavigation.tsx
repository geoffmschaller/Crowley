import React from 'react';
import styles from './DesktopNavigation.module.sass';
import MAIN_LOGO from '../../../static/images/logos/mainlogo2.png';
import {Link} from "react-router-dom";

const DesktopNavigation = () => {
	return (
		<div className={styles.navigation}>
			<div className={styles.topBar}>Give us a call! (208) 504 - 9245</div>
			<div className={styles.midBar}>
				<div className={styles.display}>
					<Link to={"/"}>
						<img src={MAIN_LOGO} alt=""/>
					</Link>
					<div className={styles.menu}>
						<Link to={"/interiors"}>
							<div className={styles.item}>Interiors</div>
						</Link>
						<Link to={"/exteriors"}>
							<div className={styles.item}>Exteriors</div>
						</Link>
						<Link to={"/custom-projects"}>
							<div className={styles.item}>Custom Projects</div>
						</Link>
						<Link to={"/contact"}>
							<div className={styles.item}>Contact Us</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DesktopNavigation;
