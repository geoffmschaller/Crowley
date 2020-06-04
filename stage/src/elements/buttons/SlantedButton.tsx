import React from 'react';
import styles from './Buttons.module.sass';

interface SlantedButtonProps {
	label: string
	color: "yellow" | "blue" | "green"
}

const SlantedButton = (props: SlantedButtonProps) => {
	return (
		<div className={[styles.slantedButton, styles[props.color]].join(" ")}>
			<div className={styles.text}>{props.label}</div>
		</div>
	)
}

export default SlantedButton;
