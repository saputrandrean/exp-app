import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/edit/:id", userController.getUser);
router.post("/create", userController.createUser);
router.post("/update/:id", userController.updateUser);
router.post("/delete/:id", userController.deleteUser);

export default router;
