/**
 * WebhookController
 *
 * @description :: Server-side logic for managing webhooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	doWebhook(req, res) {
		console.log('webhook');


		const data = req.body;
		console.log(data);
		let webhook = {
			date : '',
			user : {
				name : '',
				avatar : '',
			},
			message : '',
			repository : '',
		};

		Webhook.create(data).exec(function(err, records) {
			if (err) {
				console.log('Error ', err);
			}
			if (records) {
				console.log('Records ', records);
			}
		});

		return res.json({});
	}



};
