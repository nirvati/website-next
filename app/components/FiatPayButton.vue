<template>
  <form
    class="flex items-center justify-center flex-col gap-4"
    @submit.prevent="submitPayment"
  >
    <div class="flex flex-row items-center gap-4">
      <UInputNumber
        v-model="price"
        name="price"
        :min="1"
        :step="1"
        data-price="1"
        :step-snapping="false"
        :format-options="{
          style: 'currency',
          currency: 'EUR',
        }"
        :disabled="loading"
      />
    </div>
    <UButton size="xl" type="submit" :loading>Pay</UButton>
  </form>
</template>

<script setup lang="ts">
const price = ref(1);

const loading = ref(false);

async function submitPayment() {
  loading.value = true;
  const resp = await $fetch("/api/pay", {
    method: "POST",
    body: {
      amount: price.value.toFixed(2),
      currency: "EUR",
    },
  });
  if (resp && resp.target) {
    window.location.href = resp.target;
  }
}
</script>
