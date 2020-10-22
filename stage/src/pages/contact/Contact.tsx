import React, {ChangeEvent} from 'react';
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
		error: true,
		result: "",
		sending: false,
		name: "",
		email: "",
		message: ""
	};

	updateValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let input: string = event.target.name;
		let s: React.ComponentState = {...this.state};
		s[input] = event.target.value;
		this.setState(s);
	};

	sendContact = async () => {
		await this.setState({sending: true});
		let results = await ContactAPICaller(this.state.name, this.state.email, this.state.message);
		if (results.data.errors.length > 0)
			this.setState({error: true, result: results.data.message});
		else
			this.setState({
				error: false,
				result: results.data.message,
				name: "",
				email: "",
				message: ""
			});
		await this.setState({sending: false});
	};

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
								We'd love to hear from you regarding any project big or small. Reach out to us using the contact form below and a
								member of our team will get back
								to
								you.
								We look forward to making your dream project a reality.
							</div>
							<div className={styles.inputs}>
								<input name="name" type="text" placeholder={"Full Name"} value={this.state.name}
								       onChange={(event) => this.updateValue(event)}/>
								<input name="email" type="text" placeholder={"Email"} value={this.state.email}
								       onChange={(event) => this.updateValue(event)}/>
								<textarea name="message" placeholder={"Your Message"} value={this.state.message}
								          onChange={(event) => this.updateValue(event)}/>
								<button disabled={this.state.sending} onClick={() => this.sendContact()}>
									{
										this.state.sending
											? <i className="fas fa-spinner"/>
											: <div>Send</div>
									}
								</button>
								{
									this.state.error
										? <div className={styles.error}>{this.state.result.toUpperCase()}</div>
										: null
								}
								{
									!this.state.error
										? <div className={styles.success}>{this.state.result}</div>
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
