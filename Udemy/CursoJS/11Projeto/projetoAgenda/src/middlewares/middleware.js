exports.middlewareGlobal = (request, response, next) => {
	response.locals.errors = request.flash('errors');
	response.locals.success = request.flash('success');
	response.locals.user = request.session.user;
	next();
}

exports.outroMiddleware = (request, response, next) => {
	next();
}


exports.checkCsrfError = (error, request, response, next) => {
	if (error) {
		return response.render('404')
	}

	next();
}

exports.csrfMiddleware = (request, response, next) => {
	response.locals.csrfToken = request.csrfToken();
	next();
}

exports.loginRequired = (request, response, next) => {
	if (!request.session.user) {
		request.flash('errors', 'Você precisa fazer login');
		request.session.save(() => response.redirect('/'));
		return;
	}

	next();
}