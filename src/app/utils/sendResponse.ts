import { Response } from "express"

type TData <T> = {
    statusCode:number,
    success:boolean,
    message:string,
    data:T
}

const sendResponse =<T> (res : Response , data : TData<T>)=>{
    return res.status(data?.statusCode).json({
        success : data?.success,
        statusCode : data?.statusCode,
        message : data ?.message,
        data : data?.data

    })
}

export default sendResponse;