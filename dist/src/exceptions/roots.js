"use strict";
// message , status code , error code, error
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCodes = void 0;
class HttpException extends Error {
    constructor(message, errorCode, statusCode, errors) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.errors = errors;
    }
}
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["USER_NOT_FOUND"] = 1001] = "USER_NOT_FOUND";
    ErrorCodes[ErrorCodes["USER_ALREADY_EXIST"] = 1002] = "USER_ALREADY_EXIST";
    ErrorCodes[ErrorCodes["USER_DUPLICATE"] = 1003] = "USER_DUPLICATE";
    ErrorCodes[ErrorCodes["INCORRECT_PASSWORD"] = 1004] = "INCORRECT_PASSWORD";
    ErrorCodes[ErrorCodes["EMPTY_REQUEST_BODY"] = 1005] = "EMPTY_REQUEST_BODY";
    ErrorCodes[ErrorCodes["PASSWORD_DOES_NOT_MATCH"] = 1006] = "PASSWORD_DOES_NOT_MATCH";
    ErrorCodes[ErrorCodes["INVALID_CREDENTIALS"] = 1007] = "INVALID_CREDENTIALS";
    ErrorCodes[ErrorCodes["INVALID_ROLE"] = 1008] = "INVALID_ROLE";
    ErrorCodes[ErrorCodes["ADDRESS_NOT_FOUND"] = 1009] = "ADDRESS_NOT_FOUND";
    ErrorCodes[ErrorCodes["ADDRESS_DOES_NOT_BELONG"] = 1010] = "ADDRESS_DOES_NOT_BELONG";
    ErrorCodes[ErrorCodes["USER_CREATION_LIMIT_EXCEEDED"] = 1011] = "USER_CREATION_LIMIT_EXCEEDED";
    ErrorCodes[ErrorCodes["PERMISSION_DENIED"] = 1012] = "PERMISSION_DENIED";
    ErrorCodes[ErrorCodes["INVALID_TOKEN"] = 1013] = "INVALID_TOKEN";
    ErrorCodes[ErrorCodes["INCORRECT_OLD_PASSWORD"] = 1014] = "INCORRECT_OLD_PASSWORD";
    ErrorCodes[ErrorCodes["ROLE_ALREADY_EXISTS"] = 1015] = "ROLE_ALREADY_EXISTS";
    ErrorCodes[ErrorCodes["ROLE_NOT_FOUND"] = 1016] = "ROLE_NOT_FOUND";
    ErrorCodes[ErrorCodes["ROLE_DOES_NOT_BELONG"] = 1017] = "ROLE_DOES_NOT_BELONG";
    ErrorCodes[ErrorCodes["INTERNAL_SERVER_ERROR"] = 2001] = "INTERNAL_SERVER_ERROR";
    ErrorCodes[ErrorCodes["UNPROCESSABLE_ENTITY"] = 3001] = "UNPROCESSABLE_ENTITY";
    ErrorCodes[ErrorCodes["UNAUTHERIZED_USER"] = 4001] = "UNAUTHERIZED_USER";
    ErrorCodes[ErrorCodes["NOT_FOUND"] = 4002] = "NOT_FOUND";
    ErrorCodes[ErrorCodes["MISMATCHED_ROLE"] = 4003] = "MISMATCHED_ROLE";
    ErrorCodes[ErrorCodes["COMPANY_NOT_FOUND"] = 5001] = "COMPANY_NOT_FOUND";
    ErrorCodes[ErrorCodes["COMPANY_ALREADY_EXIST"] = 5002] = "COMPANY_ALREADY_EXIST";
    ErrorCodes[ErrorCodes["COMPANY_DUPLICATE"] = 5003] = "COMPANY_DUPLICATE";
})(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
exports.default = HttpException;
