import { error } from "console";
import HttpException, { ErrorCodes } from "./roots";

export class UnprocessableEntity extends HttpException {
    constructor(message:string,errorCode:ErrorCodes,errors:any)
    {super(message,errorCode,422,errors)}

}