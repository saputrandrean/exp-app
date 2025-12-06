import express from "express";
import customerController from "../controllers/customerController.js";

const router = express.Router();

// router.get("/", customerController.getAllCustomers);
// router.post("/", customerController.createNewCustomer);
// router.put("/:id", customerController.updateCustomer);
// router.delete("/:id", customerController.deleteCustomer);

// GET all customers (list page)
router.get("/", customerController.getAllCustomers);

// POST create new customer
router.post("/create", customerController.createNewCustomer);

// GET edit form
router.get("/edit/:id", customerController.showEditForm);

// POST update customer
router.post("/update/:id", customerController.updateCustomer);

// POST delete customer
router.post("/delete/:id", customerController.deleteCustomer);

export default router;
