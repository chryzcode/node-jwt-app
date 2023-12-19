const CustomApiError = require("./custom-error");

class UnathenticatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.status_code = 401;
  }
}

module.exports = UnathenticatedError;
