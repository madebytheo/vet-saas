<template>
  <form>
    <div class="mb-2">
      <FloatLabel variant="in">
        <InputText
          v-model="email"
          id="email"
          :invalid="submitted && !email"
          fluid
        />
        <label for="email">Email Address</label>
      </FloatLabel>
      <Message
        v-if="submitted && !email"
        severity="error"
        variant="simple"
        size="small"
        class="mt-1"
        >Email is required</Message
      >
    </div>

    <div class="mb-3">
      <FloatLabel variant="in">
        <Password
          v-model="password"
          id="password"
          :invalid="submitted && !password"
          :feedback="false"
          toggle-mask
          fluid
        />
        <label for="password">Password</label>
      </FloatLabel>
      <Message
        v-if="submitted && !password"
        severity="error"
        variant="simple"
        size="small"
        class="mt-1"
        >Password is required</Message
      >
    </div>

    <Button
      label="Log in"
      type="submit"
      @click.prevent="onLogin"
      fluid
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["login"]);

/**
 * state
 */
const email = ref("");
const password = ref("");
const submitted = ref(false);

/**
 * methods
 */
function onLogin() {
  submitted.value = true;

  // validate form
  if (!email.value || !password.value) {
    console.error("login validation failed");
    return;
  }

  const model = {
    email: email.value,
    password: password.value,
  };

  console.log("emitting login data:", model);
  emit("login", model);
}
</script>
