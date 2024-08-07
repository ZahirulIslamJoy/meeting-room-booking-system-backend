import { Request, Response } from "express"
import { UserService } from "./user.service"

const createUser = async(req : Request, res : Response)=>{
    try{
        const result = await UserService.createStudentIntoDB(req.body);
        res.status(200).json({
            success : true ,
            data : result
        })
    }
    catch(err){
        console.log(err)
    }
}



export const UserControllers = {
    createUser
}