// Utilities
import { auth, db } from '@/plugins/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const useSignupStore = defineStore('signup', {
    state: () => ({
        name: '',
        email: '',
        password: '',
        loading: false
    }),

    actions: {
        createUser() {
            if (this.name == '' || this.email == '' || this.password == '') return

            this.loading = true

            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(async user => {
                    await setDoc(doc(db, 'users', user.user.uid), {
                        name: this.name,
                        email: this.email,
                        createdAt: serverTimestamp()
                    })

                    this.loading = false
                })
                .catch(error => {
                    this.loading = false
                    console.log()
                })
        }
    }
})
