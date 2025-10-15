<template>
  <form>
    <div class="flex ga-2 mb-2">
      <div class="w-full">
        <FloatLabel variant="in">
          <InputText
            v-model="name"
            id="name"
            @blur="nameTouched = true"
            @input="nameTouched = true"
            :invalid="(submitted && !name) || ((nameTouched || submitted) && !isNameValid)"
            size="small"
            fluid
          />
          <label for="name">Name *</label>
        </FloatLabel>
        <Message
          v-if="submitted && !name"
          severity="error"
          variant="simple"
          size="small"
          class="mt-1"
          >Name is required</Message
        >
        <Message
          v-else-if="(nameTouched || submitted) && name && !isNameValid"
          severity="error"
          variant="simple"
          size="small"
          class="mt-1"
          >Please insert letters only</Message
        >
      </div>
      <div class="w-full">
        <FloatLabel variant="in">
          <InputText
            v-model="surname"
            id="surname"
            @blur="surnameTouched = true"
            @input="surnameTouched = true"
            :invalid="(submitted && !surname) || ((surnameTouched || submitted) && !isSurnameValid)"
            size="small"
            fluid
          />
          <label for="surname">Surname *</label>
        </FloatLabel>
        <Message
          v-if="submitted && !surname"
          severity="error"
          variant="simple"
          size="small"
          class="mt-1"
          >Surname is required</Message
        >
        <Message
          v-else-if="(surnameTouched || submitted) && surname && !isSurnameValid"
          severity="error"
          variant="simple"
          size="small"
          class="mt-1"
          >Please insert letters only</Message
        >
      </div>
    </div>

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
    <div class="flex ga-2 mb-4">
      <div class="w-full">
        <FloatLabel variant="in">
          <Password
            v-model="password"
            id="password"
            :invalid="submitted && !password"
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
      <div class="w-full">
        <FloatLabel variant="in">
          <Password
            v-model="confirmPassword"
            id="confirmPassword"
            @blur="confirmPasswordTouched = true"
            @input="confirmPasswordTouched = true"
            :invalid="
              (submitted && !confirmPassword) ||
              ((confirmPasswordTouched || submitted) && !isConfirmPasswordValid)
            "
            :feedback="false"
            size="small"
            toggle-mask
            fluid
          />
          <label for="confirmPassword">Confirm Password *</label>
        </FloatLabel>
        <Message
          v-if="submitted && !confirmPassword"
          severity="error"
          variant="simple"
          size="small"
          class="mt-1"
          >Please confirm your password</Message
        >
        <Message
          v-else-if="
            (confirmPasswordTouched || submitted) && confirmPassword && !isConfirmPasswordValid
          "
          severity="error"
          variant="simple"
          size="small"
          class="mt-1"
          >Passwords do not match</Message
        >
      </div>
    </div>

    <Button
      label="Sign Up"
      type="submit"
      @click.prevent="onSignUp"
      fluid
    />
  </form>

  <Toast position="bottom-right" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useToast } from "primevue/usetoast";

const emit = defineEmits(["sign-up"]);
const toast = useToast();

/**
 * state
 */
const name = ref("");
const surname = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const submitted = ref(false);

/**
 * touched state for real-time validation
 */
const nameTouched = ref(false);
const surnameTouched = ref(false);
const emailTouched = ref(false);
const confirmPasswordTouched = ref(false);

/**
 * validation
 */
const namePattern = /^[A-Za-z]+$/;
const isNameValid = computed(() => name.value === "" || namePattern.test(name.value));
const isSurnameValid = computed(() => surname.value === "" || namePattern.test(surname.value));
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = computed(() => email.value === "" || emailPattern.test(email.value));
const isConfirmPasswordValid = computed(
  () => confirmPassword.value === "" || password.value === confirmPassword.value,
);

const isFormValid = computed(
  () =>
    name.value &&
    namePattern.test(name.value) &&
    surname.value &&
    namePattern.test(surname.value) &&
    email.value &&
    emailPattern.test(email.value) &&
    password.value &&
    confirmPassword.value &&
    password.value === confirmPassword.value,
);

/**
 * methods
 */
function onSignUp() {
  submitted.value = true;

  if (!isFormValid.value) {
    console.error("signup validation failed");
    toast.add({
      severity: "error",
      summary: "Signup Failed",
      detail: "Please fix the highlighted fields.",
      life: 5000,
    });
    return;
  }

  const model = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    password: password.value,
  };

  console.log("emitting sign up data:", model);
  emit("sign-up", model);
}
</script>
