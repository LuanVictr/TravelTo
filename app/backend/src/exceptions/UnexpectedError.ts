class UnexpectedException extends Error {
  private statusCode;
  constructor() {
    super("Something unexpected happened"),
    this.statusCode = 404;
  }
}

export default UnexpectedException;