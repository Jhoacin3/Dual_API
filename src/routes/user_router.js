const express = require('express'); 
const userController = require('../controllers/user_controller');
// const { createUser } = require('../services/user');

//constructor que retorna un objeto
const router= express.Router();

// peticion get 
router.get("/all", userController.getUsers );

router.post("/createUser", userController.createUser );

// Ruta para actualizar un usuario existente
router.put('/:id', userController.updateUser);

// Ruta para eliminar un usuario existente
router.delete('/:id', userController.deleteUser);

// router.post("/users", (req, res)=>{
//     res.send("usuario creado");
// })// ruta para poder crear usuarios con metodo post

// router.put("/users/:id", (req, res)=>{
//     res.send("usuario creado");
// })// ruta para poder crear usuarios con metodo post

module.exports = router;

