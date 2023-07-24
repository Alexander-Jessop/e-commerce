/* eslint-disable */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripePackage = require("stripe");

admin.initializeApp();

const stripeSecretKey = functions.config().stripe.secret_key;
const stripe = new stripePackage(stripeSecretKey);

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  try {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "User must be authenticated."
      );
    }

    const { amount, currency, paymentMethodId, receipt_email } = data;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
      confirmation_method: "manual",
      receipt_email,
      expand: ["latest_charge"],
    });

    const receiptUrl = paymentIntent.latest_charge.receipt_url;

    return {
      clientSecret: paymentIntent.client_secret,
      status: paymentIntent.status,
      receiptUrl,
    };
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    throw new functions.https.HttpsError(
      error.code || "internal",
      error.message || "Error creating payment intent"
    );
  }
});
