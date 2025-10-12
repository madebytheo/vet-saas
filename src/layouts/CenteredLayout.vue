<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 97dvh; /** > 97 creates scrollbar */
}
</style>
