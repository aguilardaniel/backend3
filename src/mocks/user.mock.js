import {fakerES as fa} from "@faker-js/faker"
import { createHash } from "../utils/index.js";
import crypto from "crypto";

const userRoles = ['user', 'admin'];

 export  const  generateUser=async()=>{
    let _id= crypto.randomBytes(12).toString("hex")
    let first_name= fa.person.firstName()
    let last_name= fa.person.lastName()
    let email=fa.internet.email({firstName: first_name, lastName: last_name})

    let password = await createHash("coder123")
    let role= fa.helpers.arrayElement(userRoles)

    let pets=[]
    let __v= 0


    return {
        _id,
        first_name,
        last_name, 
        email, 
        password,
        role,
        pets,
        __v
    }
}
