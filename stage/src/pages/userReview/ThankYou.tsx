import React from 'react';
import styles from './UserReview.module.sass';
import WidthRestrictor from "../../layout/WidthRestrictor";
import {Link} from "react-router-dom";
import SlantedButton from "../../elements/buttons/SlantedButton";

const ThankYou = () => {
	return (
		<div className={styles.userReview}>
			<WidthRestrictor>
				<div className={styles.holder}>
					<div className={styles.thanks}>
						Thank You for your feedback. We really appreciate you taking the time to let us know how we are doing.
					</div>
					<Link to={"/"}>
						<SlantedButton label={"Home"} color={"yellow"}/>
					</Link>
				</div>
			</WidthRestrictor>
		</div>
	);
}

export default ThankYou;
