/**
 * WebhookController
 *
 * @description :: Server-side logic for managing webhooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	doWebhook(req, res) {

		const data = req.body;
		// console.log(data);
		let webhook = {
			name : data.repository.name,
			date : data.repository.updated_at,
			user : {
				name : data.repository.owner.login,
				avatar : data.repository.owner.avatar_url,
			},
			message : '',
			repository : data.repository.full_name,
		};

		Webhook.create(data).exec(function(err, records) {
			if (err) {
				console.log('Error ', err);
			}
			if (records) {
				console.log('Records ', webhook);
			}
		});
		return res.json({});
	},

	history(req, res) {

		Webhook.find().exec(function(err, response) {
			if (err) {
				console.log('Error ', err);
			}
			if (res) {
				console.log('Res ', response);
				return res.view('homepage', {
					commitsGoAndSeeWeb : response,
					commitsGoAndSee: response,
					commitsGoAndTag : response
				})
			}
		});
	}
};
