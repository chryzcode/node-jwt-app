const CustomApiError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class UnathenticatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.status_code = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnathenticatedError;
