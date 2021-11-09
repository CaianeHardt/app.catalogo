class InvalidArgumentError extends Error {
    constructor(mensage) {
      super(mensage);
      this.name = 'InvalidArgumentError';
    }
  }
  
  class InternalServerError extends Error {
    constructor(mensage) {
      super(mensage);
      this.name = 'InternalServerError';
    }
  }
  
  module.exports = {
    InvalidArgumentError: InvalidArgumentError,
    InternalServerError: InternalServerError
  };