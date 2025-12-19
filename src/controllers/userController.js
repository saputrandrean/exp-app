import userModel from "../models/userModel.js";

const getUsers = (req, res) => {
  userModel.getUsers((err, rows) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching customers",
        error: err.message,
      });
    }
    res.render("user/index", {
      rows,
      title: "User Management",
      page: "user",
    });
  });
};

const getUser = (req, res) => {
  const { id } = req.params;

  userModel.getUserById(id, (err, user) => {
    if (err) {
      return res.status(500).send("Error fetching user");
    }

    if (!user) {
      return res.status(400).send("User not found");
    }
    res.render("userEdit", {
      user,
      title: "User",
      page: "user",
    });
  });
};

const createUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    await userModel.createUser({
      username,
      password,
    });
    res.redirect("/user");
  } catch (error) {
    res.status(500).json({
      message: "Failed to insert new data",
      error: error.message,
      details: error.sqlMessage || null,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  try {
    await userModel.updateUser(id, { user });
    res.redirect("/user");
  } catch (error) {
    res.status(500).json({
      message: "Failed to update existing data",
      error: error.message,
      details: error.sqlMessage || null,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    res.redirect("/user");
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete existing data",
      error: error.message,
      details: error.sqlMessage || null,
    });
  }
};

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
