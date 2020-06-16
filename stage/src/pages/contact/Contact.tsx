import React from 'react';
import styles from './Contact.module.sass';
import MAIN_LOGO from '../../static/images/logos/mainlogo2.png';
import DesktopNavigation from "../../inflatables/navigation/desktop/DesktopNavigation";
import MobileNavigation from "../../inflatables/navigation/mobile/MobileNavigation";
import WidthRestrictor from "../../layout/WidthRestrictor";
import CONTACT_HEADER_IMAGE from "../../static/images/headers/contact_header_bar.jpg";
import ImageHeader from "../../inflatables/headers/ImageHeader";
import ContactAPICaller from "../../api/ContactAPICaller";

class Contact extends React.Component<any, any> {

	state = {
		name: "",
		email: "",
		message: "",
		response: {
			status: 0,
			message: "",
			payload: {}
		}
	}

	updateName = (value: string) => {
		let s = {...this.state};
		s.name = value;
		this.setState(s);
	}

	updateEmail = (value: string) => {
		let s = {...this.state};
		s.email = value;
		this.setState(s);
	}

	updateMessage = (value: string) => {
		let s = {...this.state};
		s.message = value;
		this.setState(s);
	}

	sendContact = async () => {
		let s = {...this.state};
		s.response = await ContactAPICaller(this.state.name, this.state.email, this.state.message);
		if (s.response.status === 200) {
			s.message = "";
			s.name = "";
			s.email = "";
		}
		this.setState(s);
	}

	render() {
		return (
			<div className={styles.contact}>
				<DesktopNavigation/>
				<MobileNavigation/>
				<ImageHeader image={CONTACT_HEADER_IMAGE}/>
				<WidthRestrictor>
					<div className={styles.holder}>
						<div className={styles.form}>
							<div className={styles.title}>Contact Us</div>
							<div className={styles.description}>
								We'd love to hear from you regarding any project big or small. Reach out to us using the contact form below and a member of our team will get back
								to
								you.
								We look forward to making your dream project a reality.
							</div>
							<div className={styles.inputs}>
								<input type="text" placeholder={"Full Name"} value={this.state.name} onChange={(event: any) => this.updateName(event.target.value)}/>
								<input type="text" placeholder={"Your Email"} value={this.state.email} onChange={(event: any) => this.updateEmail(event.target.value)}/>
								<textarea placeholder={"How can we help you?"} value={this.state.message} onChange={(event: any) => this.updateMessage(event.target.value)}/>
								<button onClick={() => this.sendContact()}>Submit</button>
								{
									this.state.response.status === 500
										? <div className={styles.error}>{this.state.response.message}</div>
										: null
								}
								{
									this.state.response.status === 200
										? <div className={styles.success}>{this.state.response.message}</div>
										: null
								}
							</div>
						</div>
						<div className={styles.information}>
							<img src={MAIN_LOGO} alt=""/>
							<div className={styles.block}>
								<div className={styles.title}>Name:</div>
								<div className={styles.value}>Sean Crowley</div>
							</div>
							<div className={styles.block}>
								<div className={styles.title}>Email:</div>
								<div className={styles.value}>sean@crowleyconstructionid.com</div>
							</div>
							<div className={styles.block}>
								<div className={styles.title}>Phone:</div>
								<div className={styles.value}>(208) 504 - 9245</div>
							</div>
							<div className={styles.block}>
								<div className={styles.title}>Address:</div>
								<div className={styles.value}>P.O. Box 382 Parma, Idaho 83660</div>
							</div>
						</div>
					</div>
				</WidthRestrictor>
			</div>
		);
	}

}

export default Contact;
