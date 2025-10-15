<template>
  <CenteredLayout>
    <Card>
      <template #title>
        <div class="mb-5">
          <Avatar
            label="VS"
            size="xlarge"
          />
        </div>
        Get Started
      </template>
      <template #subtitle>Create a new account.</template>
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
