class UserAlreadyExists extends Error {
  private statusCode:number;
  constructor() {
    super("User already exists");
    this.statusCode = 500;
  }
}

export default UserAlreadyExists;