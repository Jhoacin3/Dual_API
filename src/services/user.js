const user = require("../models/user");
//estos codigos se exportan a mi archivo user_controller
//funcion parea obetener el listado de usuarios
exports.getUsers = async () => {
  //operaciones realizadas
  const usersList = await user.find();
  return usersList;
};

//crear un nuevo usuario
exports.createUser = async (email, password, lastname, phone) => {
  const newUser = new user({
    email,
    password,
    lastname,
    phone,
  });
  return newUser.save();
};
//actualizar un usuario

// Actualizar un usuario existente
exports.updateUser = async (userId, newData) => {
  
    const updatedUser = await user.findByIdAndUpdate(userId, {
      email: newData.email, 
      password: newData.password,
      lastname: newData.lastname,
      phone: newData.phone
    }, {new: true});

    // console.log("******newdata: ", newData)
    return updatedUser;
  
};

//eliminar un usuario archivo service
exports.deleteUser = async (userId)=>{
  console.log("**********id", userId)

  await user.findByIdAndDelete(userId); // Buscar y eliminar el usuario por su id

};