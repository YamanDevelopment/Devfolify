<script setup>
    import { ref } from 'vue';

    const user = useUserSession();

    const isSignUp = ref(false);

    const handleLogin = async (event) => {
        const form = event.target;
        const formData = new FormData(form);

        await user.login(formData.get('email'), formData.get('password'));

        form.reset();
    };

    const handleRegistration = async (event) => {
        const form = event.target;
        const formData = new FormData(form);

        await user.register(formData.get('email'), formData.get('password'));

        form.reset();
    };
</script>

<template>
  <div class="w-screen h-screen flex justify-between items-center" style="margin: 0 auto;">
    <a href="/" class="absolute text-3xl font-bold cursor-pointer z-10 top-5 left-5">Devfolify</a>
    <section class="w-[40vw] h-screen bg-[#000] overflow-hidden">
        <img src="/loginSide.jpg" alt="" class="w-full h-full">
    </section>
    <section class="w-[60vw] h-screen flex justify-center items-center bg-[#111111]">
      <div class="flex flex-col justify-center items-center gap-12 p-5 w-[25vw] h-[50vh] bg-[#1d232a] rounded-3xl">
        <h2 class="text-3xl font-bold">Login/Register</h2>
        <AuthForm v-if="isSignUp" :handle-submit="handleRegistration" submit-type="Sign Up"></AuthForm>
        <AuthForm v-else :handle-submit="handleLogin" submit-type="Log In"></AuthForm>
        <button v-if="isSignUp" @click="isSignUp = false" class="u-margin-block-start-16">
            Already have an account? Log in
        </button>
        <button v-else @click="isSignUp = true" class="u-margin-block-start-16">
            Don't have an account? Sign up
        </button>
      </div>
    </section>
  </div>
</template>
