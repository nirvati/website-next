<template>
  <form
    method="POST"
    action="https://btcpay-server.nirvati.de/api/v1/invoices"
    class="flex items-center justify-center flex-col gap-4"
    @submit="handleFormSubmit"
  >
    <input
      type="hidden"
      name="storeId"
      value="DXscgAWQHnnEsJjoUQDJcCdfRRYAthiTUTSDpm6aizVo"
    />
    <input type="hidden" name="jsonResponse" value="true" />
    <div class="flex flex-row items-center gap-4">
      <UInputNumber
        v-model="price"
        name="price"
        :min="1"
        :step="1"
        data-price="1"
      />
      <USelect
        v-model="currency"
        name="currency"
        :items="['SATS', 'USD', 'GBP', 'EUR', 'BTC']"
      />
    </div>
    <input
      type="image"
      class="submit"
      name="submit"
      src="https://btcpay-server.nirvati.de/img/paybutton/pay.svg"
      style="width: 209px"
      alt="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor"
    />
  </form>
</template>

<script setup lang="ts">
useScript("https://btcpay-server.nirvati.de/modal/btcpay.js");
const price = ref(1);
const currency = ref("SATS");

onMounted(() => {
  window.addEventListener("message", (event) => {
    console.log(event?.data?.status?.toLowerCase());
      if (
        event?.data?.status?.toLowerCase() === "complete" ||
        event?.data?.status?.toLowerCase() === "paid" ||
        event?.data?.status?.toLowerCase() === "settled"
      ) {
        setTimeout(() => {
          navigateTo(
            "/thank-you?amount=" + price.value + "&currency=" + currency.value
          );
          window.btcpay.hideFrame();
        }, 2000);
      }
  });
});

function handleFormSubmit(event) {
  event.preventDefault();
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200 && this.responseText) {
      window.btcpay.appendInvoiceFrame(JSON.parse(this.responseText).invoiceId);
    }
  };
  xhttp.open("POST", event.target.getAttribute("action"), true);
  xhttp.send(new FormData(event.target));
}
</script>
