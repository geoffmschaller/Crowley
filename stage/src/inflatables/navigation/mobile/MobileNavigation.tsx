import React from 'react';
import styles from './MobileNavigation.module.sass';
import MAIN_LOGO from '../../../static/images/mainlogo2.png'

class MobileNavigation extends React.Component<any, any> {

	state = {
		sliderOpen: false
	}

	setSliderMode = (mode: boolean) => {
		this.setState({sliderOpen: mode});
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
						<div>Interiors</div>
					</div>
					<div className={styles.item}>
						<div>Exteriors</div>
					</div>
					<div className={styles.item}>
						<div>Custom Projects</div>
					</div>
					<div className={styles.item}>
						<div>Contact Us</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MobileNavigation;
