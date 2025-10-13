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
        Welcome Back
      </template>
      <template #subtitle>
        <div class="linked-subtitle">
          <div class="mr-1">Don't have an account?</div>
          <RouterLink to="./sign-up">
            <Button
              label="Sign up"
              variant="link"
              class="link"
            />
          </RouterLink>
          🐾
        </div>
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
