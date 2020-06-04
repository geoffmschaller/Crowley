import React from 'react';
import styles from './Index.module.sass';
import ImageHeader from "../../inflatables/headers/ImageHeader";
import INDEX_HEADER_IMAGE from '../../static/images/headers/index_header_bar.jpg'
import BLOCK_MENU_ITEMS from "../../data/blockMenu";
import BlockMenuInterface from "../../interfaces/BlockMenuInterface";
import DesktopNavigation from "../../inflatables/navigation/desktop/DesktopNavigation";
import MobileNavigation from "../../inflatables/navigation/mobile/MobileNavigation";
import WidthRestrictor from "../../utils/layout/WidthRestrictor";
import {Link} from "react-router-dom";
import SlantedButton from "../../elements/buttons/SlantedButton";

class Index extends React.Component<any, any> {
	render() {
		return (
			<div className={styles.index}>
				<DesktopNavigation/>
				<MobileNavigation/>
				<ImageHeader image={INDEX_HEADER_IMAGE}/>
				<WidthRestrictor>
					<div className={styles.boxMenu}>
						{
							BLOCK_MENU_ITEMS.map((item: BlockMenuInterface, index: number) => {
								return <div className={styles.item} key={index}>
									<img src={item.image} alt=""/>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.description}>{item.description}</div>
									<Link to={item.link}>
										<SlantedButton label={`View ${item.title}`} color={'blue'}/>
									</Link>
								</div>
							})
						}
					</div>
				</WidthRestrictor>
				<div className={styles.whoWeAre}>
					<WidthRestrictor>
						<div className={styles.text}>
							<div className={styles.block}>
								<span className={styles.bold}>Who we are.</span> Crowley Construction is a small family-run construction company operating throughout the Treasure
								Valley. Sean Crowley has has worked in
								custom
								home building/remodels for 18 years and has <span className={styles.bold}>experience in every aspect of carpentry</span> from building custom
								dollhouses
								to overseeing ground up construction
								of
								high-end custom homes. Whether you need a small project done, would like to take some items off of your "honey-do list" or need an experienced
								contractor to
								oversee your new home build, we can help!
							</div>
							<div className={styles.block}>
								Not sure where to start? Whether you've an idea that's not yet on paper, a Pinterest board full of inspiration, or a full set of plans, <span
								className={styles.bold}>we will work with you through every phase</span> from design to completion to ensure you're getting exactly what you want.
								<br/>
								<br/>
								It's time to start on the project of your dreams, all you have to do is click <span className={styles.bold}>Get Started Now</span> and tell us about
								your
								ideas!
								<br/>
								<br/>
								<Link to={"/contact"}>
									<SlantedButton label={"Get Started Now!"} color={"green"}/>
								</Link>
							</div>
						</div>
						<div className={styles.reviews}>
							<div className={styles.review}>
								<div className={styles.body}>"Anytime anyone sees them we get compliments and asked who did them. I would use Sean again and again he goes above and
									beyond and puts his all into his work."
								</div>
								<div className={styles.stars}>
									<i className="fas fa-star"/>
									<i className="fas fa-star"/>
									<i className="fas fa-star"/>
									<i className="fas fa-star"/>
									<i className="fas fa-star"/>
								</div>
								<div className={styles.name}>- Aminha H.</div>
							</div>
						</div>
					</WidthRestrictor>
				</div>
				{/*}
				<WidthRestrictor>
					<div className={styles.instagram}>
						<div className={styles.title}>#crowleyconstructionid</div>
						<div className={styles.feed}/>
					</div>
				</WidthRestrictor>
				{*/}
			</div>
		);
	}
}

export default Index;
