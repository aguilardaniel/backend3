import { describe, it } from "mocha"
import supertest from "supertest"
import {expect,} from "chai"
import fs from "fs"

import mongoose, { isValidObjectId } from "mongoose"
const requester=supertest("http://localhost:8080")

mongoose.set('strictQuery', false);
await mongoose.connect('mongodb+srv://Daniel:coderbackend2@cluster0.dn7gxxu.mongodb.net/backend3')

describe("Pruebas router pets", function(){
    this.timeout(10_000) 
    

after(async()=>{
        await mongoose.connection.collection("pets").deleteMany({specie:"test"})
    })


    describe("Test basicos router /api/pets", async()=>{


        it("Si consulto /api/pets con el metodo GET, devuelve una respuesta con status 200", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            
          
        })

        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            
          
        })


        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad _id", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("_id")
            
          
        })

        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad name", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("name")
            
          
        })

        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad specie", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("specie")
            
          
        })

        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad birthDate", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("birthDate")
            
          
        })

        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad birthDate que es una fecha con formato YYYY-MM-DDTHH:mm:ss.sssZ", async()=>{
            
            const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;  

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("birthDate")
            expect(body.payload[0].birthDate).to.match(isoDateRegex);
            
          
        })
        
        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad adopted", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("adopted")
            
          
        })

        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad adopted que puede ser true o false", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("adopted")
            expect(body.payload[0].adopted).to.be.a("boolean");
            
          
        })

        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad owner", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("owner")
            
          
        })

        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad owner que es un objetId de mongodB", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("owner")
            expect(isValidObjectId(body.payload[0].owner)).to.be.true
            
        })


        it("Si consulto /api/pets con el metodo GET, devuelve un objeto con una propiedad payload que es un array de mascotas que tiene la propiedad image", async()=>{
            

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.get("/api/pets")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.be.an("array");
            expect(body.payload[0]).to.has.property("image")
            
          
        })

        it("Si envío los datos correctos de una mascota al /api/pets metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad _id", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("_id")
          
        })

         it("Si envío los datos correctos de una mascota al /api/pets metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad name", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("name")
          
        })

        it("Si envío los datos correctos de una mascota al /api/pets metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad birthDate", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("birthDate")
          
        })

        it("Si envío los datos con birthDate como un string 'YYYY-MM-DD' al /api/pets metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad birthDate", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: "2025-11-18"
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("birthDate")
          
        })

        it("Si envío los datos correctos de una mascota al /api/pets metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad adopted", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("adopted")
          
        })

        it("La propiedad adopted obtenida en /api/pets si envio los datos correctos tiene valor false", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("adopted")
            expect(body.payload.adopted).to.be.eq(false)
            
        })

        it("Si envío los datos correctos de una mascota al /api/pets metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad image", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("image")
          
        })

        it("La propiedad image obtenida en /api/pets si envio los datos correctos es un string vacío", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("image")
            expect(body.payload.image).to.be.eq("")
            
        })

          it("Si envío los datos correctos de una mascota al /api/pets metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad _id que es un ObjetId válido", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
            
        })
        
        it("Si envío los datos incompletos de una mascota al /api/pets metodo POST, me retorna un error", async()=>{
            let petMock={
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(400)

        })


        it("Si envío los datos correctos de una mascota al /api/pets metodo POST, da de alta la mascota en DB", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)

            let resultadoChequeo= await mongoose.connection.collection("pets").findOne({_id: mongoose.Types.ObjectId(body.payload._id)})
            // console.log(resultado)

            // console.log(body)

            expect(resultadoChequeo)
            /* expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
            expect(isValidObjectId(body.payload._id)).to.be.equal(true) */
        })


        it("Si envío los datos correctos de una mascota al /api/pets metodo POST, guarda en base de datos un objeto con este valor de name", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)

            let resultadoChequeo= await mongoose.connection.collection("pets").findOne({_id: mongoose.Types.ObjectId(body.payload._id)})
            // console.log(resultado)

            // console.log(body)

            expect(resultadoChequeo.name).to.be.equal(petMock.name)
            /* expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
            expect(isValidObjectId(body.payload._id)).to.be.equal(true) */
        })

        it("Si envío los datos correctos de una mascota al /api/pets metodo POST, guarda en base de datos un objeto con este valor de specie", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)

            let resultadoChequeo= await mongoose.connection.collection("pets").findOne({_id: mongoose.Types.ObjectId(body.payload._id)})
            // console.log(resultado)

            // console.log(body)

            expect(resultadoChequeo.specie).to.be.equal(petMock.specie)
            /* expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
            expect(isValidObjectId(body.payload._id)).to.be.equal(true) */
        })

        it("Si envío los datos correctos de una mascota al /api/pets metodo POST, guarda en base de datos un objeto con este valor de birthDate", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toISOString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)

            let resultadoChequeo= await mongoose.connection.collection("pets").findOne({_id: mongoose.Types.ObjectId(body.payload._id)})
            
            // console.log(resultadoChequeo)
            //console.log(petMock.birthDate)
            // console.log(body)

            expect(resultadoChequeo.birthDate.toISOString()).to.be.equal(petMock.birthDate)
            /* expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
            expect(isValidObjectId(body.payload._id)).to.be.equal(true) */
        })


        it("Si envío campos extras los  name, specie y birthDate al /api/pets metodo POST, da de alta la mascota en DB sin incluir los extras enviados", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                casa: "Gryffindor",
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)

            let resultadoChequeo= await mongoose.connection.collection("pets").findOne({_id: mongoose.Types.ObjectId(body.payload._id)})
            // console.log(resultado)

            // console.log(body)

            expect(resultadoChequeo)
            expect(body.payload).to.not.has.property("casa")
            /*
            expect(isValidObjectId(body.payload._id)).to.be.true
            expect(isValidObjectId(body.payload._id)).to.be.equal(true) */
        })


         it("Si envío los datos correctos de una mascota al /api/pets/withimage (incluyendo una imagen valida) metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad _id", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("_id")
            //expect(fs.existsSync(body.payload.image)).to.be.true
            fs.unlinkSync(body.payload.image)
          
        })

         it("Si envío los datos correctos de una mascota al /api/pets/withimage (incluyendo una imagen valida) metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad name", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("name")
            fs.unlinkSync(body.payload.image)
          
        })

        it("Si envío los datos correctos de una mascota al /api/pets/withimage (incluyendo una imagen valida) metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad birthDate", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("birthDate")
            fs.unlinkSync(body.payload.image)
          
        })

        it("Si envío los datos con birthDate como un string 'YYYY-MM-DD' al /api/pets/withimage (incluyendo una imagen válida) metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad birthDate", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: "2025-11-18"
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("birthDate")
            fs.unlinkSync(body.payload.image)
          
        })

        it("Si envío los datos correctos de una mascota al /api/pets/withimage (incluyendo una imagen valida) metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad adopted", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("adopted")
            fs.unlinkSync(body.payload.image)
          
        })

        it("La propiedad adopted obtenida en /api/pets/withimage si envio los datos correctos tiene valor false", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("adopted")
            expect(body.payload.adopted).to.be.eq(false)
            fs.unlinkSync(body.payload.image)
            
        })

        it("Si envío los datos correctos de una mascota al /api/pets/withimage (incluyendo una imagen valida) metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad image", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("image")
            fs.unlinkSync(body.payload.image)
          
        })


          it("Si envío los datos correctos de una mascota al /api/pets/withimage (incluyendo una imagen valida) metodo POST, devuelve un ojeto con una propiedad payload que contiene una propiedad _id que es un ObjetId válido", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
            fs.unlinkSync(body.payload.image)
            
        })
        
        it("Si envío los datos incompletos de una mascota al /api/pets/withimage (incluyendo una imagen valida) metodo POST, me retorna un error", async()=>{
            let petMock={
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            

            
            //fs.unlinkSync(body.payload.image)
            expect(status).to.be.eq(400)
            

        })

        
        it("Si envío los datos correctos de una mascota al /api/pets/withimage (incluyendo una imagen valida) metodo POST, da de alta la mascota con su imagen en DB", async()=>{
            let petMock={
                name: "Roger", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-fatiga.png")
            // console.log(resultado)

            // console.log(body)

            let resultadoChequeo= await mongoose.connection.collection("pets").findOne({_id: mongoose.Types.ObjectId(body.payload._id)})

             
            expect(status).to.be.eq(200)
            expect(body.payload.image).to.be.ok
            expect(fs.existsSync(body.payload.image)).to.be.true
            fs.unlinkSync(body.payload.image)
            expect(body.payload.image).to.be.equal(resultadoChequeo.image)
            
        })




          

        



    })
  



})