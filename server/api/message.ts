export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const amount = body.amount;
  const currency = body.currency;
  const name = body.name || "Supporter";
  const message = body.message || "No message provided";

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const payload = {
    content: `New contribution received! Amount: ${amount} ${currency}\nName: ${name}\nMessage: ${message}`,
  };

  await $fetch(webhookUrl!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return { success: true };
});
