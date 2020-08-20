const escapeHtml = require('escape-html');

/**
 * Responds to an HTTP request using data from the request body parsed according
 * to the "content-type" header.
 * DOCs: https://cloud.google.com/functions/docs/writing/http
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloContent = (req, res) => {

  res.set('Access-Control-Allow-Origin', '*');
  exports.helloHttp = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).send('Hello World!');
      break;
    case 'PUT':
      res.status(403).send('Forbidden!');
      break;
    default:
      res.status(405).send({error: 'Something blew up!'});
      break;
  }
};

  res.status(200).send(`Hello ${escapeHtml(name || 'World')}!`);
};