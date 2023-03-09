const axios = require('axios');
const HTTPError = require('../errors/HTTPError');

const verifyJWT = async (req, res, next) => {
	try{
		const token = req.headers['authorization'];
		if (!token) throw new HTTPError(401, 'No token provided');
		const verifiedResponse = await axios({
			method: 'GET',
			url: `${process.env.AUTH_SERVICE_HOST}/auth/verify`,
			headers: {
				'authorization': token
			}
		});
		req.user = {
			id: verifiedResponse.data.id,
		};
		next();
	} catch(error) {
		// console.log(error);
		console.log(error.message);
		res.status(401).send({ message: 'Unauthorized' });
	}
};

module.exports = { verifyJWT };
