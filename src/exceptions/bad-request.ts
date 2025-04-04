
import HttpException, { ErrorCodes } from "./roots";

export class BadRequestException extends HttpException{
    constructor(message:string,errorCode:ErrorCodes,error?:any){
        super(message,errorCode,400,error)
    }
}