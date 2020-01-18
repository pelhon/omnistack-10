const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
		async index(request, response) {
				const devs = await Dev.find();
				return response.json(devs);
		},
		async save(request, response) {
				const { github_username, techs, latitude, longitude } = request.body;
				let dev = await Dev.findOne({ github_username });

				if(!dev){
					const github_response = await axios.get(`https://api.github.com/users/${github_username}`)
					.catch(err => {
						// To-do: add message error when a user is not found
						console.log('Error', err);
					});

					const { name = login, avatar_url, bio, login } = github_response.data;
					const techsArray = parseStringAsArray(techs);

					const location = {
							type: 'Point',
							coordinates: [longitude, latitude],
					}
					dev = await Dev.create({
							github_username,
							name,
							avatar_url,
							bio,
							techs: techsArray,
							location
					})
				}
				return response.json(dev);
		},
		async update() {

		},
		async destroy() {

		}
}
