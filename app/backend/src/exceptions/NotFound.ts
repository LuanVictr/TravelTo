class UserNotFoundException extends Error {
  private statusCode:number;
  constructor() {
    super("User not found");
    this.statusCode = 404;
  }
}

export default UserNotFoundException;