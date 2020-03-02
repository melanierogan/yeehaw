'use strict';

module.exports = function initHomeController(app) {
	const {router} = app;

	router.get('/', async (request, response) => {
		response.render('home', {
			title: app.name
		});
	});

};
