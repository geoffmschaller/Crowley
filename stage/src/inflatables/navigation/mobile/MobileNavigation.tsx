import React from 'react';
import styles from './MobileNavigation.module.sass';
import MAIN_LOGO from '../../../static/images/logos/mainlogo2.png'
import {Link} from "react-router-dom";

class MobileNavigation extends React.Component<any, any> {

	state = {
		sliderOpen: false,
		offset: 0
	}

	setSliderMode = (mode: boolean) => {
		this.setState({sliderOpen: mode});
		document.body.style.overflow = mode ? "hidden" : "auto";
	}

	render() {
		return (
			<div className={styles.navigation}>
				<div className={styles.display}>
					<img src={MAIN_LOGO} alt=""/>
					<div className={styles.menuButton} onClick={() => this.setSliderMode(true)}><i className="fas fa-bars"/> Menu</div>
				</div>
				<div className={this.state.sliderOpen ? [styles.background, styles.showBackground].join(" ") : [styles.background, styles.hideBackground].join(" ")}
				     onClick={() => this.setSliderMode(false)}/>
				<div className={this.state.sliderOpen ? [styles.menu, styles.menuOpen].join(" ") : [styles.menu, styles.menuClosed].join(" ")}>
					<div className={styles.closeBar} onClick={() => this.setSliderMode(false)}><i className="fas fa-times"/></div>
					<div className={styles.item}>
						<Link to={"/"} onClick={() => this.setSliderMode(false)}>
							<div>Home</div>
						</Link>
					</div>
					<div className={styles.item}>
						<Link to={"/interiors"} onClick={() => this.setSliderMode(false)}>
							<div>Interiors</div>
						</Link>
					</div>
					<div className={styles.item} onClick={() => this.setSliderMode(false)}>
						<Link to={"/exteriors"}>
							<div>Exteriors</div>
						</Link>
					</div>
					<div className={styles.item} onClick={() => this.setSliderMode(false)}>
						<Link to={"/custom-projects"}>
							<div>Custom Projects</div>
						</Link>
					</div>
					<div className={styles.item} onClick={() => this.setSliderMode(false)}>
						<Link to={"/contact"}>
							<div>Contact Us</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default MobileNavigation;
