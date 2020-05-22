import React from 'react';
import styles from './Error.module.sass';

class FourOFour extends React.Component{
	render() {
		return(
			<div className={styles.error}>
				404. Page Not Found.
			</div>
		);
	}
}

export default FourOFour;
