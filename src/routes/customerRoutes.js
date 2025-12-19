import express from "express";
import customerController from "../controllers/customerController.js";

const router = express.Router();

router.get("/", customerController.getAllCustomers);
router.post("/create", customerController.createNewCustomer);
router.get("/edit/:id", customerController.showEditForm);
router.post("/update/:id", customerController.updateCustomer);
router.post("/delete/:id", customerController.deleteCustomer);

export default router;
