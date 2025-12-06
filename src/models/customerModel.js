import conn from "../config/database.js";

const getAllCustomers = (callback) => {
  return conn.query("SELECT * FROM CUSTOMER", callback);
};

const createNewCustomer = (body, callback) => {
  return conn.query(
    `INSERT INTO CUSTOMER (CUSTOMER_NAME) VALUES ('${body.CUSTOMER_NAME}')`,
    callback
  );
};

const updateCustomer = (id, body, callback) => {
  return conn.query(
    `UPDATE CUSTOMER
    SET CUSTOMER_NAME = ('${body.CUSTOMER_NAME}')
    WHERE ID = ${id}`,
    callback
  );
};

const deleteCustomer = (id, callback) => {
  return conn.query(
    `DELETE FROM CUSTOMER
    WHERE ID = ${id}`,
    callback
  );
};

export default {
  getAllCustomers,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
};
