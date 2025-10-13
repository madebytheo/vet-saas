<template>
  <CenteredLayout>
    <RouterLink to="/log-in">
      <Button label="Log in" />
    </RouterLink>
  </CenteredLayout>
</template>

<script setup lang="ts">
console.log("landing page loaded");
import CenteredLayout from "@/layouts/CenteredLayout.vue";
</script>
