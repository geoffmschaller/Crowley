import APIResponse from "../interfaces/APIResponse";
import axios from 'axios';

const InstagramAPICaller = async (): Promise<APIResponse> => {

	const result = await axios.post('https://www.api.crowleyconstructionid.com/instagram', {});

	return {
		status: result.data.status,
		message: result.data.message,
		payload: result.data.payload
	}

}

export default InstagramAPICaller;
