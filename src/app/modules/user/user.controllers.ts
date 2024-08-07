/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express"
import { UserService } from "./user.service"

const createUser = async(req : Request, res : Response)=>{
    try{
        const result : any = await UserService.createUserIntoDB(req.body);
        const {_doc} = result
        const {password , ...remaining} = _doc
        res.status(200).json({
            success : true ,
            data : remaining
        })
    }
    catch(err){
        console.log(err)
    }
}



export const UserControllers = {
    createUser
}