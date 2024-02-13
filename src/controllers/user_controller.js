const userServices = require("../services/user");
// userServices
//ver todos los usuarios

// mostrar todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    //OJO
    const users = await userServices.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

// crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { email, password, lastname, phone } = req.body;
  try {
    const users = await userServices.createUser(
      email,
      password,
      lastname,
      phone
    );
    // res.json(users);
    res.status(200).json("Usuario creado correctamente :)"); // Manejar cualquier error que ocurra

  } catch (error) {
    res.status(500).json({ error: "Error al crear usuarios" });
  }
};

exports.updateUser = async (req, res) => {
  // Obtengo el id del usuario de los parámetros de la solicitud
  const userId = req.params.id; 
    // construyendo el objeto con los datos a actualizar
  const updateData = {
    email: req.body.email,
    password: req.body.password,
    lastname: req.body.lastname,
    phone: req.body.phone,
  } // Obtener los nuevos datos del usuario de los datos de la solicitud

  try {
    const updatedUser = await userServices.updateUser(userId, updateData); // Llamar al servicio para actualizar el usuario
    // res.json(updatedUser);
    res.status(200).json("Usuario actualizado correctamente :)"); // Manejar cualquier error que ocurra
    // Responder con el usuario actualizado
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario" }); // Manejar cualquier error que ocurra
  }
};

//eliminar un usuario
exports.deleteUser = async (req, res) => {
  const userId = req.params.id; // Obtener el id del usuario de los parámetros de la solicitud
  console.log("reflejando id correspondiete: ", userId)

  try {
    await userServices.deleteUser(userId); // Llamar al servicio para eliminar el usuario
    res.json({ message: "Usuario eliminado correctamente" }); // Responder con un mensaje de éxito
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" }); // Manejar cualquier error que ocurra
  }
};

