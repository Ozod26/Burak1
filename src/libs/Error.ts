export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 404,
  FORBIDDEM = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "Somthing went wrong!",
  NO_DATA_FOUND = "No data is found!",
  CREATED_FAILED = "Create is failed!",
  UPDATE_FAILED = "Updata is failed!",

  USED_NICK_PHONE = "You are inserting already used nick or phone!",
  NO_MEMBER_NICK = "No member with that member nick!",
  BLOCKED_USER = "You have been blocked, contact the restaurant!",
  WRONG_PASSWORD = "wrong passwodr, please try again!",
  NOT_AUTHENTICATED = "You are not authenticated, Please login first!",
  NOT_ = "NOT_",
  TOKEN_CREATION_FAILED = "TOKEN_CREATION_FAILED",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  static standard = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    Message: Message.SOMETHING_WENT_WRONG,
  };

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
