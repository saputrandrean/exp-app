import { title } from "process";
import customerModel from "../models/customerModel.js";

const getAllCustomers = (req, res) => {
  customerModel.getAllCustomers((err, rows) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching customers",
        error: err.message,
      });
    }
    res.render("customer", {
      rows,
      title: "Customer Management",
      page: "company",
    });
  });
};

const createNewCustomer = async (req, res) => {
  const { customerName, taxID } = req.body;
  try {
    console.log({ customerName });
    await customerModel.createNewCustomer({
      customerName,
      taxID,
    });
    res.redirect("/customer");
  } catch (error) {
    console.error("Error:", error); // Log error to console

    res.status(500).json({
      message: "Failed to insert new data",
      error: error.message,
      details: error.sqlMessage || null, // MariaDB specific error
    });
  }
};

// NEW: Show edit form
const showEditForm = (req, res) => {
  const { id } = req.params;

  customerModel.getCustomerById(id, (err, customer) => {
    if (err) {
      return res.status(500).send("Error fetching customer");
    }
    if (!customer) {
      return res.status(404).send("Customer not found");
    }
    res.render("customer-edit", {
      customer,
      title: "Edit Customer",
      page: "company",
    });
  });
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { customer } = req.body;

  try {
    await customerModel.updateCustomer(id, { customer });
    // res.json({
    //   message: "Successful Update Customer",
    //   data: body,
    // });
    res.redirect("/customer");
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
    // res.json({
    //   message: "Successfull Delete Customer",
    // });
    res.redirect("/company");
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
  showEditForm,
  updateCustomer,
  deleteCustomer,
};
