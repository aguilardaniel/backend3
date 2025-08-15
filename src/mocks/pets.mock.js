import {fakerES as fa} from "@faker-js/faker"
import crypto from "crypto";

const petSpecies = ['perro', 'gato', 'hamster', 'conejo', 'loro', 'tortuga'];


export const generatePet=(owner)=>{
    let _id= crypto.randomBytes(12).toString("hex")
    
    let specie= fa.helpers.arrayElement(petSpecies)
    let name= fa.animal.petName()
    let birthDate= fa.date.past({ years: 10 })
    let adopted= fa.datatype.boolean()
    owner
    let image= fa.image.urlLoremFlickr({ category: specie })
    let __v= 0


    return {
        _id,
        name,
        specie, 
        birthDate, 
        adopted,
        owner,
        image,
        __v
    }
}
