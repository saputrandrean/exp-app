import conn from "../config/database.js";

const getAllCustomers = (callback) => {
  const query = "SELECT * FROM CUSTOMER WHERE IS_DELETED = 0";
  return conn.query(query, callback);
};

const createNewCustomer = ({ customerName, taxID }) => {
  const query = "INSERT INTO CUSTOMER (CUSTOMER_NAME, TAX_ID) VALUES (?,?)";
  return conn.query(query, [customerName, taxID]);
};

const getCustomerById = (id, callback) => {
  const query = "SELECT * FROM CUSTOMER WHERE ID = ?";
  conn.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results[0]); // Return first row
  });
};

const updateCustomer = (id, { customer }) => {
  const query = "UPDATE CUSTOMER SET CUSTOMER_NAME = ? WHERE ID = ?";
  return conn.query(query, [customer, id]);
};

const deleteCustomer = (id) => {
  const query = "UPDATE CUSTOMER SET IS_DELETED = 1 WHERE ID = ?";
  return conn.query(query, [id]);
};

export default {
  getAllCustomers,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
};
