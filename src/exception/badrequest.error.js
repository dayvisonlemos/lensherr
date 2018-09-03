const httpstatus = require('http-status');
const ExtendableError = require('./extendable.error');

class BadRequestError extends ExtendableError {
  constructor(message) {
    super(message);
    this.status = httpstatus.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
