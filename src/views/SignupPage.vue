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
        <SignupFlow @sign-up="handleSignUp" />
      </template>
    </Card>
  </CenteredLayout>
</template>

<script setup lang="ts">
console.log("signup page loaded");
import CenteredLayout from "@/layouts/CenteredLayout.vue";
import SignupFlow from "@/components/SignupFlow.vue";
import type { SignupModel } from "@/types/models";

/**
 * methods
 */
function handleSignUp(model: SignupModel) {
  console.log("sign up data received:", model);
}
</script>
