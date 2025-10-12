<template>
  <CenteredLayout>
    <RouterLink to="/login">
      <Button label="Log in" />
    </RouterLink>
  </CenteredLayout>
</template>

<script setup lang="ts">
console.log("landing page loaded");
import CenteredLayout from "@/layouts/CenteredLayout.vue";
</script>
