import Stripe from "stripe";
import Payment from "../models/payment.model.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { planId, amount, credits } = req.body;

    if (!amount || !credits) {
      return res.status(400).json({ message: "Invalid plan data" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: `${planId} Plan`,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/pricing`,
    });

    await Payment.create({
      userId: req.userId,
      planId,
      amount,
      credits,
      stripeSessionId: session.id,
      status: "created",
    });

    res.json({ url: session.url });

  } catch (error) {
    res.status(500).json({ message: `Stripe session error: ${error.message}` });
  }
};


export const verifyStripePayment = async (req, res) => {
  try {
    const { session_id } = req.body;

    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== "paid") {
      return res.status(400).json({ message: "Payment not completed" });
    }

    const payment = await Payment.findOne({ stripeSessionId: session_id });

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    if (payment.status === "paid") {
      return res.json({ message: "Already processed" });
    }

    payment.status = "paid";
    await payment.save();

    const updatedUser = await User.findByIdAndUpdate(
      payment.userId,
      { $inc: { credits: payment.credits } },
      { new: true }
    );

    res.json({
      success: true,
      message: "Payment successful, credits added",
      user: updatedUser,
    });

  } catch (error) {
    res.status(500).json({ message: `Verification error: ${error.message}` });
  }
};