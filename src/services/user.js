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

// pasando los nuevos registros actualizados
exports.updateUser = async (userId, newData) => {
  // objeto newData
    //se utiliza el metodo findByIdAndUpdate para buscar y actualziar el documento
    //este recibe tres parmetros: userId, el newData y {new: true} este es para que devuelva con los nuevos datos
    const updatedUser = await user.findByIdAndUpdate(userId, {
      // asignando cada propiedad, De esta forma le estamos diciendo a Mongoose exactamente qué campos queremos actualizar con los nuevos valores provenientes de newData.
      email: newData.email, 
      password: newData.password,
      lastname: newData.lastname,
      phone: newData.phone
    }, {new: true});

    return updatedUser;
  // RESUMEN: estoy usando findByIdAndUpdate para buscar el usuario por ID, construir el objeto con los campos a actualizar, y devolver el usuario actualizado.
};

//eliminar un usuario archivo service
exports.deleteUser = async (userId)=>{

  await user.findByIdAndDelete(userId); // Buscar y eliminar el usuario por su id

};