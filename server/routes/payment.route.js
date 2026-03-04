import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { createCheckoutSession, verifyStripePayment } from "../controllers/payment.controller.js";

const paymentRouter = express.Router();

paymentRouter.post("/create-checkout-session", isAuth, createCheckoutSession);
paymentRouter.post("/verify", isAuth, verifyStripePayment);

export default paymentRouter;