<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" :class="showHideModal" id="modal">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click="isOpen = !isOpen">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                @click.prevent="showLogin"
                class="block rounded py-3 px-4 transition"
                :class="{ ' hover:text-white text-white bg-blue-600': tab === 'LoginForm' }"
                href="#"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                @click.prevent="showRegister"
                class="block rounded py-3 px-4 transition"
                :class="{
                  ' hover:text-white text-white bg-blue-600': tab === 'RegisterForm'
                }"
                href="#"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form / Registration Form -->

          <keep-alive>
            <component :is="tab" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapWritableState } from 'pinia'
import useModalStore from '@/stores/modal'

import LoginForm from '@/components/ui/LoginForm.vue'
import RegisterForm from '@/components/ui/RegisterForm.vue'

export default {
  name: 'AuthModal',
  computed: {
    ...mapState(useModalStore, ['showHideModal']),
    ...mapWritableState(useModalStore, ['isOpen'])
  },
  data() {
    return {
      tab: 'LoginForm'
    }
  },
  methods: {
    showLogin() {
      this.tab = 'LoginForm'
    },
    showRegister() {
      this.tab = 'RegisterForm'
    }
  },
  components: {
    LoginForm,
    RegisterForm
  }
}
</script>
