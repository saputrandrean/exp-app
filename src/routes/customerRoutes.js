import express from "express";
import customerController from "../controllers/customerController.js";

const router = express.Router();

router.get("/", customerController.getAllCustomers);
router.post("/", customerController.createNewCustomer);
router.put("/:id", customerController.updateCustomer);

export default router;
