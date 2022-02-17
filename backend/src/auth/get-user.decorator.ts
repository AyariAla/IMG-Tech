import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";


export const GetUser=createParamDecorator(
    (_data, ctx: ExecutionContext): User => {const req = ctx.switchToHttp().getRequest()    //auth Guard use it in controller of crud later 
    return req.user;
},
);