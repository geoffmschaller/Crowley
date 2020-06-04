import APIResponse from "../interfaces/APIResponse";
import axios from 'axios';

const ContactAPICaller = async (name: string, email: string, message: string): Promise<APIResponse> => {

	const result = await axios.post('https://www.api.crowleyconstructionid.com/contact', {name: name, email: email, message: message});

	return {
		status: result.data.status,
		message: result.data.message,
		payload: result.data.payload
	}

}

export default ContactAPICaller;
