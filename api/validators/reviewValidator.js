const yup = require('yup');

const reviewValidator = async (object_to_validate) => {

	// VALIDATE
	let schema = yup.object().shape({
		name: yup.string().trim().required().min(1).max(50),
		rating: yup.string().trim().required().min(1).max(2),
		message: yup.string().trim().required().min(1).max(500),
	});
	try {
		await schema.validate(object_to_validate);
		return 200;
	} catch (err) {
		return err;
	}

}

module.exports = reviewValidator;