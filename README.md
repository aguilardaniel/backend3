# 🐾 Adoptme - API de Adopción de Mascotas

Adoptme es una API RESTful desarrollada en **Node.js** con **Express** y **MongoDB**, que gestiona usuarios y mascotas para un sistema de adopción.  
Incluye autenticación, autorización y documentación con Swagger/OpenAPI.

## Link a la imagen del proyecto en Dockerhub:

https://hub.docker.com/repository/docker/ldaguilar/serverdaniel



### Variables

Se podría utilizar la variable de entono PORT (aunque por defecto ya ejecuta en el puerto 8080) 
La url de mongo no la toma desde una variable de entorno, ya está configurada en el archivo  app.js

#### Posible error a corregir

El endpoint de **eliminación de usuario** no funciona correctamente
dejo el error encontrado, junto a la posible modificación para corregirlo (no implementé la misma para respetar lo que se pidío)

En *user.controller.js:*


/*
No Funciona realmente. El código original no elimina el usuario
Dejo comentada abajo una potencial solución
*/
const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({status:"success",message:"User deleted"})
}

/*
const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.delete(userId);
    res.send({status:"success",message:"User deleted"})
}

*/

    