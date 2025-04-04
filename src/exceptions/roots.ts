// message , status code , error code, error

class HttpException extends Error {
  message: string;
  errorCode: any;
  statusCode: number;
  errors: ErrorCodes;

  constructor(
    message: string,
    errorCode: ErrorCodes,
    statusCode: number,
    errors: any
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.errors = errors;
  }
}

export enum ErrorCodes {
  USER_NOT_FOUND            =    1001,
  USER_ALREADY_EXIST        =    1002,
  USER_DUPLICATE            =    1003,
  INCORRECT_PASSWORD        =    1004,
  EMPTY_REQUEST_BODY        =    1005,
  PASSWORD_DOES_NOT_MATCH   =    1006,
  INVALID_CREDENTIALS       =    1007,
  INVALID_ROLE              =    1008,
  ADDRESS_NOT_FOUND         =    1009,
  ADDRESS_DOES_NOT_BELONG   =    1010,
  USER_CREATION_LIMIT_EXCEEDED = 1011,
  PERMISSION_DENIED         =    1012,
  INVALID_TOKEN             =    1013,
  INCORRECT_OLD_PASSWORD        =    1014,

  INTERNAL_SERVER_ERROR     =    2001,

  UNPROCESSABLE_ENTITY      =    3001,
  
  UNAUTHERIZED_USER         =    4001,
  NOT_FOUND                 =    4002,
  MISMATCHED_ROLE           =    4003,


  COMPANY_NOT_FOUND         =    5001,
  COMPANY_ALREADY_EXIST     =    5002,
  COMPANY_DUPLICATE         =    5003,

}

export default HttpException;
