import { createMollieClient } from "@mollie/api-client";

const mollieClient = await createMollieClient({
  apiKey: process.env.MOLLIE_API_KEY!,
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const amount = body.amount;
  const currency = body.currency;
  console.log("Creating Mollie payment:", amount, currency, body.isDotDe);
  if (typeof amount !== "string" || typeof currency !== "string") {
    return { error: "Invalid request" };
  }
  const payment = await mollieClient.payments.create({
    amount: {
      value: amount,
      currency,
    },
    description: "Support Nirvati Development",
    redirectUrl: (body.isDotDe ? "https://nirvati.de/thank-you" : "https://nirvati.eu/thank-you") + `?amount=${amount}&currency=${currency}`,
    cancelUrl: body.isDotDe ? "https://nirvati.de/support-us" : "https://nirvati.eu/support-us",
  });

  return {
    target: payment.getCheckoutUrl(),
  };
});
