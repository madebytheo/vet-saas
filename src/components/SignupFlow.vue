<template>
  <Stepper
    value="1"
    linear
    class="card-stepper"
  >
    <StepList>
      <Step value="1">Your Information</Step>
      <Step value="2">Practice Setup</Step>
      <Step value="3">Placeholder</Step>
    </StepList>

    <!-- each panel could be its own component that emits up to here for handling -->
    <StepPanels class="stepper-panels">
      <StepPanel value="1">
        <form>
          <div class="flex ga-2 mb-2">
            <div class="w-full">
              <FloatLabel variant="in">
                <InputText
                  v-model="name"
                  id="name"
                  :invalid="submitted && !name"
                  size="small"
                  fluid
                />
                <label for="name">Name</label>
              </FloatLabel>
              <Message
                v-if="submitted && !name"
                severity="error"
                variant="simple"
                size="small"
                class="mt-1"
                >Name is required</Message
              >
            </div>
            <div class="w-full">
              <FloatLabel variant="in">
                <InputText
                  v-model="surname"
                  id="surname"
                  :invalid="submitted && !surname"
                  size="small"
                  fluid
                />
                <label for="surname">Surname</label>
              </FloatLabel>
              <Message
                v-if="submitted && !surname"
                severity="error"
                variant="simple"
                size="small"
                class="mt-1"
                >Surname is required</Message
              >
            </div>
          </div>

          <div class="flex ga-2 mb-2">
            <div class="w-full">
              <FloatLabel variant="in">
                <InputText
                  v-model="email"
                  id="email"
                  :invalid="submitted && !email"
                  size="small"
                  fluid
                />
                <label for="email">Email</label>
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
            <div class="w-full">
              <FloatLabel variant="in">
                <InputText
                  v-model="cellphone"
                  id="cellphone"
                  :invalid="submitted && !cellphone"
                  size="small"
                  fluid
                />
                <label for="cellphone">Cellphone</label>
              </FloatLabel>
              <Message
                v-if="submitted && !cellphone"
                severity="error"
                variant="simple"
                size="small"
                class="mt-1"
                >Cellphone is required</Message
              >
            </div>
          </div>
          <div class="flex ga-2 mb-4">
            <div class="w-full">
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
            <div class="w-full">
              <FloatLabel variant="in">
                <Password
                  v-model="confirmPassword"
                  id="confirmPassword"
                  :invalid="submitted && !confirmPassword"
                  :feedback="false"
                  size="small"
                  toggle-mask
                  fluid
                />
                <label for="confirmPassword">Confirm Password</label>
              </FloatLabel>
              <Message
                v-if="submitted && !confirmPassword"
                severity="error"
                variant="simple"
                size="small"
                class="mt-1"
                >Please confirm your password</Message
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
      </StepPanel>
    </StepPanels>
  </Stepper>

  <!--
  stepper

  step 2: create or join existing practice
  step 3a: create - name, email, phone, type
  step 3b: join - ???
  -->
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["sign-up"]);

/**
 * state
 */
const name = ref("");
const surname = ref("");
const email = ref("");
const cellphone = ref("");
const password = ref("");
const confirmPassword = ref("");
const submitted = ref(false);

/**
 * methods
 */
function onSignUp() {
  submitted.value = true;

  // validate form
  if (
    !name.value ||
    !surname.value ||
    !email.value ||
    !cellphone.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    console.error("signup validation failed");
    return;
  }

  const model = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    cellphone: cellphone.value,
    password: password.value,
  };

  console.log("emitting sign up data:", model);
  emit("sign-up", model);
}

// TODO: proper validation
// - email format
// - cellphone format
// - password match
// sign up should be disabled until all fields are valid
</script>
