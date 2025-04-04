import HttpException, { ErrorCodes } from "./roots";

export class InternalServerError extends HttpException{
    constructor(message:string,errorCode:ErrorCodes,errors:any){
        super(message,errorCode,500,errors)
    }
}