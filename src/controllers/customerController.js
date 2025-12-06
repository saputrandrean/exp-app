import customerModel from "../models/customerModel.js";

const getAllCustomers = (req, res) => {
  customerModel.getAllCustomers((err, rows) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching customers",
        error: err.message,
      });
    }
    res.json({
      message: "Get Companies Success",
      data: rows,
    });
  });
};

const createNewCustomer = async (req, res) => {
  const { body } = req;

  try {
    await customerModel.createNewCustomer(body);
    res.json({
      message: "Create New Company Success 2",
      data: body,
    });
  } catch (error) {
    console.error("Error:", error); // Log error to console

    res.status(500).json({
      message: "Failed to insert new data",
      error: error.message,
      details: error.sqlMessage || null, // MariaDB specific error
    });
  }
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await customerModel.updateCustomer(id, body);
    res.json({
      message: "Successful Update Customer",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update existing data",
      error: error.message,
      details: error.sqlMessage || null, // MariaDB specific error
    });
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    await customerModel.deleteCustomer(id);
    res.json({
      message: "Successfull Delete Customer",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete existing data",
      error: error.message,
      details: error.sqlMessage || null, // MariaDB specific error
    });
  }
};

export default {
  getAllCustomers,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
};
