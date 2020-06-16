import React from 'react';
import styles from './InstagramFeed.module.sass';
import axios from "axios";
import InstagramPostInterface from "../../../interfaces/InstagramPostInterface";

class InstagramFeed extends React.Component<any, any> {

	state = {
		posts: []
	}

	async componentDidMount() {
		const raw_feed = await axios.get("https://www.instagram.com/crowleyconstructionllc/?__a=1");
		const raw_posts = raw_feed.data.graphql.user.edge_owner_to_timeline_media.edges;
		const posts: InstagramPostInterface[] = [];
		for (let i: number = 0; i < raw_posts.length; i++) {
			const p = raw_posts[i].node;
			posts.push({
				image: p.display_url,
				id: p.shortcode,
				caption: p.edge_media_to_caption.edges[0].node.text,
				count: p.edge_liked_by.count
			})
		}
		this.setState({posts: posts});
	}

	render() {
		return (
			<div className={styles.instagramFeed}>
				<div className={styles.titleBar}>
					<div className={styles.border}/>
					<div className={styles.title}>
						<a href="https://www.facebook.com/crowleyconstructionid" target={"_blank"} rel="noopener noreferrer"><i className="fab fa-facebook-f"/></a>
						<a href="https://www.instagram.com/crowleyconstructionllc/?hl=en" target={"_blank"} rel="noopener noreferrer"><i className="fab fa-instagram"/></a>
						<a href="https://nz.pinterest.com/crowleyconstllc/" target={"_blank"} rel="noopener noreferrer"><i className="fab fa-pinterest-square"/></a>
						<a href="https://www.yelp.com/biz/crowley-construction-parma" target={"_blank"} rel="noopener noreferrer"><i className="fab fa-yelp"/></a>
					</div>
					<div className={styles.hashBar}>
						<div className={styles.hash}>#crowleyconstructionid</div>
						<div className={styles.hash}>#crowleyconstructionllc</div>
					</div>
				</div>
				<div className={styles.feed}>
					{
						this.state.posts.map((post: InstagramPostInterface, index: number) => {
							return <div className={styles.item} style={{backgroundImage: `url(${post.image})`}} key={index}>
								<a href={`https://instagram.com/p/${post.id}`} target={"_blank"} rel="noopener noreferrer">
									<div className={styles.overlay}>

									</div>
								</a>

							</div>
						})
					}
				</div>
			</div>
		)
	}

}

export default InstagramFeed;
