<template>
  <CenteredLayout>
    <Card class="card text-center">
      <template #title>
        <div>
          <Avatar
            label="VS"
            size="xlarge"
            class="mb-5"
          />
        </div>
        Welcome Back
      </template>
      <!-- TODO: route 'Sign up' to `/sign-up` -->
      <template #subtitle>
        Don't have an account?
        <RouterLink to="./sign-up">Sign up</RouterLink>
      </template>

      <template #content>
        <LoginForm @login="handleLogin" />
      </template>
    </Card>
  </CenteredLayout>
</template>

<script setup lang="ts">
console.log("login page loaded");
import CenteredLayout from "@/layouts/CenteredLayout.vue";
import LoginForm from "@/components/LoginForm.vue";
import type { LoginModel } from "@/types/models";

/**
 * methods
 */
function handleLogin(model: LoginModel) {
  console.log("login data received:", model);
}
</script>
