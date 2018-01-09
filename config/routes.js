module.exports.routes = {
  'get /' : {
    view: 'homepage',
    controller: 'CommitsController',
    action: 'release'
  },
  'get /notfound': {
    response: 'notFound'
  },
};
