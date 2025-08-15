import { Router } from 'express';
//import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

/* router.post('/register',sessionsController.register);
router.post('/login',sessionsController.login);
router.get('/current',sessionsController.current);
router.get('/unprotectedLogin',sessionsController.unprotectedLogin);
router.get('/unprotectedCurrent',sessionsController.unprotectedCurrent); */
import { generateUser } from '../mocks/user.mock.js';
import { generatePet } from '../mocks/pets.mock.js';
import userModel from '../dao/models/User.js';
import petModel from '../dao/models/Pet.js';


router.get('/mockingpets',async(req, res)=>{
    
    let petsnumber=2
    
    let pets=[]
    for(let i=1; i<petsnumber; i++){
        pets.push(generatePet())
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({pets});

});




router.get('/mockingusers',async(req, res)=>{
    
    let exampleUsers=50
    
    let users=[]
    for(let i=0; i<exampleUsers; i++){
        users.push(generateUser())
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({users});

});



router.post('/generateData',async(req, res)=>{
    let {users}=req.query
    let {pets}=req.query

    if(users<0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Cantidad de usuarios debe ser positiva`})
    }
    if(!users) users=1

    if(pets<0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Cantidad de mascotas por usuario debe ser positiva`})
    }
    if(!pets) pets=1

    let usersArray=[]
    for(let i=0; i<users; i++){

        let user=await generateUser()
        let petsArray= []

        for(let j=0; j<pets; j++){

            let pet=await generatePet(user._id)
            petsArray.push(pet)
            
            
        }
        const savedPets = await petModel.insertMany(petsArray);
        user.pets=petsArray;
        usersArray.push(user)
    }

    
        usersArray=await userModel.insertMany(usersArray)
    

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usersArray});

});



export default router;