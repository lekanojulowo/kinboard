<template>
  <v-alert
    border="right"
    color="red"
    elevation="2"
    outlined
    type="error"
    class="text-center mx-auto mt-5"
    max-width="500"
  >
    <h1>Not Found</h1>
    <p>Oops, we couldn't find that page.</p>
    <p>
      Try going
      <v-btn color="purple" rounded text elevation="1" :to="{ name: 'home' }"
        >home</v-btn
      >
    </p>
  </v-alert>
</template>
