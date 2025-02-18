// logger.js
import pino from "pino";

class Logger {
  logger;
  constructor() {
    this.logger = pino({
      level: "info",
    });
  }

  // Log info messages
  info(message) {
    this.logger.info(message);
  }

  // Log error messages
  error(message) {
    this.logger.error(message);
  }

  // Log debug messages
  debug(message) {
    this.logger.debug(message);
  }

  // Log warning messages
  warn(message) {
    this.logger.warn(message);
  }
}

// Export an instance of the Logger class
export default new Logger().logger;
