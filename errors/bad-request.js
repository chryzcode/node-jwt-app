const CustomApiError = require('./custom-error')

class BadRequest extends CustomApiError {
  constructor(message) {
      super(message);
      this.status_code = 400
  }
}

module.exports = BadRequest;
