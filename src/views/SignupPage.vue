<template>
  <CenteredLayout>
    <Card>
      <template #content>
        <SignupFlow />
      </template>
    </Card>
  </CenteredLayout>
</template>

<script setup lang="ts">
console.log("signup page loaded");
import CenteredLayout from "@/layouts/CenteredLayout.vue";
import SignupFlow from "@/components/SignupFlow.vue";
</script>
