import conn from "../config/database.js";

const getUsers = (callback) => {
  const query = "SELECT * FROM USERS";
  return conn.query(query, callback);
};

const getUserById = (id, callback) => {
  const query = "SELECT * FROM USERS WHERE ID = ?";
  conn.query(query, [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result[0]);
  });
};

const createUser = ({ username, password }) => {
  const query = "INSERT INTO USERS (USERNAME, PASSWORD) VALUES (?,?)";
  conn.query(query, [username, password]);
};

const updateUser = (id, { username, password }) => {
  const query = "UPDATE USERS SET USERNAME = ? PASSWORD = ? WHERE ID = ?";
  conn.query(query, [username, password, id]);
};

const deleteUser = (id) => {
  const query = "UPDATE USERS SET IS_DELETED = 1 WHERE ID = ?";
  conn.query(query, id);
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
