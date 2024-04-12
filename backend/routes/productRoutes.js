import express from "express";
const router = express.Router();
import { getProdcuts, getProdcutsById } from "../controllers/productController.js";

//products api
router.route('/').get(getProdcuts);
router.route('/:id').get(getProdcutsById)

export default router;
