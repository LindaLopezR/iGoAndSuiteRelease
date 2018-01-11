/**
 * WebhookController
 *
 * @description :: Server-side logic for managing webhooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	docommit(req, res) {

		const data = req.body;
		console.log(data);
		let commit = {
			name : data.commits[0].message,
			date : data.commits[0].timestamp,
			user : {
				name : data.commits[0].committer.name,
			},
			message : data.commits[0].message,
			repository : data.repository.name,
		};

		console.log(commit);

		commit.create(commit).exec(function(err, records) {
			if (err) {
				console.log('Error ', err);
			}
			if (records) {
				console.log('Records ', records);
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
				// console.log('Res ', response);
				let commitsGoAndSee = response.filter( (commit) => commit.repository == 'iGoAndSeeReactNative' );
				console.log('***********');
				console.log('Ruta:', commitsGoAndSee);
				return res.view('homepage', {
					commitsGoAndSeeWeb : response.filter( (commit) => commit.repository == 'WebhookTester' ),
					commitsGoAndSee: response.filter( (commit) => commit.repository == 'iGoAndSeeReactNative' ),
					commitsGoAndTag : response.filter( (commit) => commit.repository == '' ),
				})
			}
		});
	}
};
