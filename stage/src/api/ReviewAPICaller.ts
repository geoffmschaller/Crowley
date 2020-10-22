import APIResponse from "../interfaces/APIResponse";
import axios from 'axios';

const ReviewAPICaller = async (name: string, rating: string, message: string): Promise<APIResponse> => {

	const result = await axios.post('https://www.api.crowleyconstructionid.com/review/new', {name: name, rating: rating, message: message});

	return {
		status: result.data.status,
		message: result.data.message,
		payload: result.data.payload
	}

}

export default ReviewAPICaller;
