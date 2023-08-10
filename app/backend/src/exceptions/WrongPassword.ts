class WrongPasswordException extends Error {
  private statusCode:number
  constructor() {
    super("Wrong password");
    this.statusCode = 404;
  }
}

export default WrongPasswordException;