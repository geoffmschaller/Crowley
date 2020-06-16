import React, {FunctionComponent, PropsWithChildren} from 'react';
import styles from './Layout.module.sass';

const WidthRestrictor: FunctionComponent = (props: PropsWithChildren<any>) => {
	return (
		<div className={styles.widthRestrictor}>
			{props.children}
		</div>
	)
}

export default WidthRestrictor;
