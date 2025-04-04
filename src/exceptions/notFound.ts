
import HttpException, { ErrorCodes } from "./roots";

export class NotFoundException extends HttpException{
    constructor(message:string,errorCode:ErrorCodes){
        super(message,errorCode,404,null)
    }
}