<template>
    <form class="flex flex-col items-center gap-3" @submit.prevent="handleSubmit" >
        <ul class="flex flex-col gap-2">
            <!-- Input field e-mail -->
            <li class="">
                <label class="input input-bordered bg-[#1d232a] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="email" name="email" class="input-text" placeholder="Email" required />
                </label>
            </li>
            <!-- Input field e-mail -->
            <li class="">
                <label class="input input-bordered bg-[#1d232a] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                    <input type="password" name="password" class="input-text" placeholder="Password" required
                    />
                </label>
            </li>
        </ul>
        <p class="max-w-[260px] text-gray-500 text-center text-sm">Password must be at least 9 characters long, start with a letter, and include a symbol.</p>
        <ul class="btn btn-primary w-32">
            <!-- Login button  -->
            <li class="">
                <button class="button is-small u-margin-inline-start-4" aria-label="Login" @click="handleSubmit" >
                {{submitType}}
                </button>
            </li>
        </ul>
    </form>
</template>

<script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        handleSubmit: {
            type: Function,
            required: true
        },
        submitType: {
            type: String,
            required: true
        }
    })
</script>
