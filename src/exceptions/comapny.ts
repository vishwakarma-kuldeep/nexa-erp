import HttpException, { ErrorCodes } from "./roots";

export class CompanyError extends HttpException{
    constructor(message:string,errorCode:ErrorCodes){
        super(message,errorCode,400,null)
    }
}