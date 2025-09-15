import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose"
//import { createHash } from "../../src/utils/index.js";

import {describe, it} from "mocha"
import Assert from "assert"

const assert=Assert.strict
const usersDao=new Users()

mongoose.set('strictQuery', false);
await mongoose.connect('mongodb+srv://Daniel:coderbackend2@cluster0.dn7gxxu.mongodb.net/backend3')


describe("Tests Unitarios dao Users", function(){
    this.timeout(10_000)


    /* after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    }) */

    afterEach(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    it("El dao con su método get, retorna un array", async()=>{
        let resultado=await usersDao.get()

        assert.equal(Array.isArray(resultado), true)
    })


    it("El dao con su método get, retorna un array de objetos, objetos con propiedad _id", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0]._id)
        }
    })

    it("El dao con su método get, retorna un array de objetos, objetos con propiedad first_name", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0].first_name)
        }
    })

    it("El dao con su método get, retorna un array de objetos, objetos con propiedad last_name", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0].last_name)
        }
    })

    it("El dao con su método get, retorna un array de objetos, objetos con propiedad email", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0].email)
        }
    })

    it("El dao con su método get, retorna un array de objetos, objetos con propiedad password", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0].password)
        }
    })

    it("El dao con su método get, retorna un array de objetos, objetos con propiedad role", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0].role)
        }
    })

    it("El dao con su método get, retorna un array de objetos, objetos con propiedad pets", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0].pets)
        }
    })


    it("La propiedad pets es un array", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.equal(Array.isArray(resultado[0].pets), true)
        }
    })

     it("La propiedad pets es un array de ojetos, ojetos con propiedad _id", async()=>{
        let resultado=await usersDao.get()

        /* if(Array.isArray(resultado) && resultado.length>0){
            assert.equal(Array.isArray(resultado[0].pets), true)
        } */

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0].pets[0]._id)
        }
    })


    it("El dao con su método save, devuelve un objeto con propiedad _id", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado._id)
    
    })

    it("El dao con su método save, devuelve un objeto con propiedad _id la cual contiene un ObjetID válido", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado._id)
        assert.equal(isValidObjectId(resultado._id), true)
    
    })

    it("El dao con su método save, devuelve un objeto con propiedad first_name", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado.first_name)
    })


    it("El dao con su método save,  devuelve un objeto con propiedad first_name que es igual al enviado", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado.first_name)
        assert.equal(resultado.first_name, userMock.first_name)
    })


     it("El dao con su método save, devuelve un objeto con propiedad last_name", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado.last_name)
    })


    it("El dao con su método save,  devuelve un objeto con propiedad last_name que es igual al enviado", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado.last_name)
        assert.equal(resultado.last_name, userMock.last_name)
    })
    

     it("El dao con su método save, devuelve un objeto con propiedad email", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado.email)
    })


    it("El dao con su método save,  devuelve un objeto con propiedad email que es igual al enviado", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado.email)
        assert.equal(resultado.email, userMock.email)
    })


     it("El dao con su método save, devuelve un objeto con propiedad password", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado.password)
    })


    it("El dao con su método save,  devuelve un objeto con propiedad password que es igual al enviado", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado.password)
        assert.equal(resultado.password, userMock.password)
    })

    it("El dao con su método save, graba un usuario en db", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        let resultadoChequeo= await mongoose.connection.collection("users").findOne({_id: resultado._id})

        assert.ok(resultadoChequeo)
       /*  assert.equal(isValidObjectId(resultado._id), true)
        assert.ok(resultado.first_name)
        assert.equal(resultado.first_name, userMock.first_name) */
    })


    it("Las propiedades del objeto que devuelve correctamente el método save, coinciden con el objeto guardado en la base de datos", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        let resultadoChequeo= await mongoose.connection.collection("users").findOne({_id: resultado._id})

        assert.equal(resultado._id.toString(),resultadoChequeo._id.toString())
        assert.equal(resultado.first_name,resultadoChequeo.first_name)
        assert.equal(resultado.last_name,resultadoChequeo.last_name)
        assert.equal(resultado.email,resultadoChequeo.email)
        assert.equal(resultado.password,resultadoChequeo.password)

        

       /*  assert.equal(isValidObjectId(resultado._id), true)
        assert.ok(resultado.first_name)
        assert.equal(resultado.first_name, userMock.first_name) */
    })
    

     it("El dao con su método save, da error si se intenta guardar datos sin el campo first_name", async()=>{

        let userMock={
            //first_name:"juan",
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }


        await assert.rejects(
        async () => {
            await usersDao.save(userMock)
        }
        )
    })

    
    it("El dao con su método save, da error si se intenta guardar datos sin el campo last_name", async()=>{

        let userMock={
            first_name:"juan",
            //last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }


        await assert.rejects(
        async () => {
            await usersDao.save(userMock)
        }
        )
    })

    it("El dao con su método save, da error si se intenta guardar datos sin el campo email", async()=>{

        let userMock={
            first_name:"juan",
            last_name:"lopez", 
            //email:"test@test.com", 
            password:"123"
        }


        await assert.rejects(
        async () => {
            await usersDao.save(userMock)
        }
        )
    })



    it("El dao con su método save, da error si se intenta guardar datos sin el campo password", async()=>{

        let userMock={
            first_name:"juan",
            last_name:"lopez", 
            email:"test@test.com", 
            //password:"123"
        }


        await assert.rejects(
        async () => {
            await usersDao.save(userMock)
        }
        )
    })



})