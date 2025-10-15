<template>
  <form>
    <div class="mb-2">
      <FloatLabel variant="in">
        <InputText
          v-model="email"
          id="email"
          @blur="emailTouched = true"
          @input="emailTouched = true"
          :invalid="(submitted && !email) || ((emailTouched || submitted) && !isEmailValid)"
          size="small"
          fluid
        />
        <label for="email">Email *</label>
      </FloatLabel>
      <Message
        v-if="submitted && !email"
        severity="error"
        variant="simple"
        size="small"
        class="mt-1"
        >Email is required</Message
      >
      <Message
        v-else-if="(emailTouched || submitted) && email && !isEmailValid"
        severity="error"
        variant="simple"
        size="small"
        class="mt-1"
        >Please enter a valid email address</Message
      >
    </div>

    <div class="mb-4">
      <FloatLabel variant="in">
        <Password
          v-model="password"
          id="password"
          :invalid="submitted && !password"
          :feedback="false"
          size="small"
          toggle-mask
          fluid
        />
        <label for="password">Password *</label>
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
      label="Log In"
      type="submit"
      @click.prevent="onLogin"
      fluid
    />
  </form>

  <Toast position="bottom-right" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useToast } from "primevue/usetoast";

const emit = defineEmits(["login"]);
const toast = useToast();

/**
 * state
 */
const email = ref("");
const password = ref("");
const submitted = ref(false);

/**
 * touched state for real-time validation
 */
const emailTouched = ref(false);

/**
 * validation
 */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = computed(() => emailPattern.test(email.value));
const isFormValid = computed(() => email.value && isEmailValid.value && password.value);

/**
 * methods
 */
function onLogin() {
  submitted.value = true;

  if (!isFormValid.value) {
    console.error("login validation failed");
    toast.add({
      severity: "error",
      summary: "Login Failed",
      detail: "Please fix the highlighted fields.",
      life: 5000,
    });
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
