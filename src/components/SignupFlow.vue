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

    <StepPanels class="stepper-panels">
      <StepPanel value="1">
        <SignupForm @sign-up="handleSignUp" />
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
import SignupForm from "./SignupForm.vue";
import type { SignupModel } from "@/types/models";

/**
 * methods
 */
function handleSignUp(model: SignupModel) {
  console.log("sign up data received:", model);
}
</script>
