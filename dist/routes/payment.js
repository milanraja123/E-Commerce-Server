import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { allCoupons, applyDiscount, createPaymentIntent, deleteCoupon, getCoupon, newCoupon, updateCoupon, } from "../controllers/payment.js";
const router = express.Router();
router.post("/create", createPaymentIntent);
router.get("/discount", applyDiscount);
router.post("/coupon/new", adminOnly, newCoupon);
router.get("/coupon/all", adminOnly, allCoupons);
router
    .route("/coupon/:id")
    .get(adminOnly, getCoupon)
    .put(adminOnly, updateCoupon)
    .delete(adminOnly, deleteCoupon);
export default router;
