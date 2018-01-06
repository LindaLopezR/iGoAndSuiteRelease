/**
 * WebhookController
 *
 * @description :: Server-side logic for managing webhooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		res.view({
			"title" : "Lorem",
			"name": "Linda",
			"age": "23",
			"profession": "Lorem em ipsum dolor sit amet, consectetur adipisicing elit."
		})
	}
};
