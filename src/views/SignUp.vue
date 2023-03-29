<template>
  <v-container>
    <v-card width="300" max-width="100%" class="mx-auto mt-16">
      <v-card-title>Sign Up</v-card-title>

      <v-card-text>
        <v-text-field v-model="signup.name" label="Name" variant="underlined" />
        <v-text-field v-model="signup.email" label="Email" variant="underlined" />
        <v-text-field v-model="signup.password" label="Password" variant="underlined" />
      </v-card-text>
      <v-card-actions>
        <v-btn :loading="signup.loading" @click="signup.createUser" block class="bg-indigo">Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useSignupStore } from '@/store/signup';

const signup = ref(useSignupStore())
</script>