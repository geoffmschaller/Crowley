import React from 'react';
import styles from './UserReview.module.sass';
import WidthRestrictor from "../../utils/layout/WidthRestrictor";
import ReviewAPICaller from "../../api/ReviewAPICaller";

interface UserReviewStateInterface {
	rating: number,
	stars: any[]
}

class UserReview extends React.Component<any, UserReviewStateInterface> {

	state = {
		rating: 5,
		name: "",
		message: "",
		response: {
			status: 0,
			message: "",
			payload: {}
		},
		stars: [
			<i className="fas fa-star" onClick={() => this.setRating(1)} key={1}/>,
			<i className="fas fa-star" onClick={() => this.setRating(2)} key={2}/>,
			<i className="fas fa-star" onClick={() => this.setRating(3)} key={3}/>,
			<i className="fas fa-star" onClick={() => this.setRating(4)} key={4}/>,
			<i className="fas fa-star" onClick={() => this.setRating(5)} key={5}/>
		]
	}

	updateMessage = (value: string) => {
		let s = {...this.state};
		s.message = value;
		this.setState(s);
	}

	updateName = (value: string) => {
		let s = {...this.state};
		s.name = value;
		this.setState(s);
	}

	setRating = (newRating: number) => {
		let s = {...this.state};
		for (let i: number = 0; i < newRating; i++) {
			s.stars[i] = <i className="fas fa-star" onClick={() => this.setRating(i + 1)} key={i + 1}/>
		}
		for (let k: number = newRating; k < 5; k++) {
			s.stars[k] = <i className="far fa-star" onClick={() => this.setRating(k + 1)} key={k + 1}/>
		}
		s.rating = newRating;
		this.setState(s);
	}

	sendReview = async () => {
		let s = {...this.state};
		s.response = await ReviewAPICaller(this.state.name, this.state.rating.toString(), this.state.message);
		await this.setState(s);
		if (s.response.status === 200) {
			this.props.history.push('/thank-you');
		}
	}

	render() {
		return (
			<div className={styles.userReview}>
				<WidthRestrictor>
					<div className={styles.holder}>
						<div className={styles.step}>
							<div className={styles.title}>Step #1</div>
							<div className={styles.bold}>Your information:</div>
							<input type="text" placeholder={"What is your name?"} value={this.state.name} onChange={(event: any) => this.updateName(event.target.value)}/>
						</div>

						<div className={styles.step}>
							<div className={styles.title}>Step #2</div>
							<div className={styles.bold}>Rate your experience:</div>
							<div className={styles.starBar}>
								{
									this.state.stars.map((star, index) => {
										return star;
									})
								}
							</div>
						</div>
						<div className={styles.step}>
							<div className={styles.title}>Step #3</div>
							<div className={styles.bold}>Comments for us?</div>
							<textarea placeholder={"Comments for us?"} value={this.state.message} onChange={(event: any) => this.updateMessage(event.target.value)}/>
						</div>
						<button onClick={() => this.sendReview()}>Submit</button>
						{
							this.state.response.status === 500
								? <div className={styles.error}>{this.state.response.message}</div>
								: null
						}
					</div>
				</WidthRestrictor>
			</div>
		);
	}

}

export default UserReview;
