<template>
  <form>
    <FloatLabel variant="in">
      <InputText
        v-model="email"
        id="email"
        class="mb-2"
        fluid
      />
      <label for="email">Email Address</label>
    </FloatLabel>

    <FloatLabel variant="in">
      <Password
        v-model="password"
        id="password"
        :feedback="false"
        toggle-mask
        fluid
      />
      <label for="password">Password</label>
    </FloatLabel>

    <Button
      label="Log in"
      type="submit"
      @click.prevent="onLogin"
      class="mt-3"
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

/**
 * methods
 */
function onLogin() {
  const model = {
    email: email.value,
    password: password.value,
  };

  console.log("emitting login data:", model);
  emit("login", model);
}

// TODO: add validation + user feedback
</script>
