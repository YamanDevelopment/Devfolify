<script setup>
    const user = useUserSession();
</script>

<template>
    <div class="w-screen h-20 px-8 bg-neutral flex justify-between items-center">
        <a href="/" class="text-3xl font-bold cursor-pointer">Devfolify</a>
        <div class="flex gap-3">
            <p>{{ user.current.providerUid }}</p>
            <!-- Email and logout button if logged in user -->
            <div class="btn w-24 text-white" v-if="user.current.value" >
                <button type="button" @click="user.logout()">
                    Logout
                </button>
            </div>
            <!-- Login button if no user logged in -->
            <NuxtLink v-else href="/login" class="btn w-24 text-white">
                Login
            </NuxtLink>
        </div>
    </div>
</template>
