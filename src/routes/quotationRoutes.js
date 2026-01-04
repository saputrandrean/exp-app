import express from "express";
import quotationController from "../controllers/quotationController.js";

const router = express.Router();

router.get("/", quotationController.getQuotations);
router.post("/create", quotationController.createQuotation);
router.get("/edit/:id", quotationController.getQuotationsByID);
router.post("/update/:id", quotationController.updateQuotation);
router.post("/delete/:id", quotationController.deleteQuotation);

export default router;
