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

    const {
      amount,
      currency,
      cardholderName,
      email,
      address,
      city,
      province,
      postalCode,
      country,
      paymentMethodId,
    } = data;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
      confirmation_method: "manual",
      billing_details: {
        name: cardholderName,
        email,
        address: {
          line1: address,
          city,
          state: province,
          postal_code: postalCode,
          country,
        },
      },
    });

    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    throw new functions.https.HttpsError(
      "internal",
      "Error creating payment intent"
    );
  }
});
