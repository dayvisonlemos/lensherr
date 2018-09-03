const httpstatus = require('http-status');
const ExtendableError = require('./extendable.error');

class ForbiddenError extends ExtendableError {
  constructor(message) {
    super(message);
    this.status = httpstatus.FORBIDDEN;
  }
}

module.exports = ForbiddenError;
