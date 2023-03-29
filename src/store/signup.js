// Utilities
import { defineStore } from 'pinia'

export const useSignupStore = defineStore('signup', {
    state: () => ({
        name: '',
        email: '',
        password: ''
    }),
})
