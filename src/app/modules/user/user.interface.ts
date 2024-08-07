type Role= "admin" | "user"


export type TUser = {
    name: string ,
    email : string ,
    password : string ,
    phone : number ,
    address : string ,
    role :Role
}