import express from "express";
import supplierController from "../controllers/supplierController.js";

const router = express.Router();

router.get("/", supplierController.getSuppliers);
router.post("/create", supplierController.createSupplier);
// router.get("/edit/:id", quotationController.getQuotationsByID);
// router.post("/update/:id", quotationController.updateQuotation);
// router.post("/delete/:id", quotationController.deleteQuotation);

export default router;
