import HttpException, { ErrorCodes } from "./roots";

export class UnautherizedUserError extends HttpException{
    constructor(message:string,errorCode:ErrorCodes){
        super(message,errorCode,401,null)
    }
}