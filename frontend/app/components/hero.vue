<template>
    <div class="flex justify-center items-center gap-[150px] w-full h-screen">
        <div class="flex flex-col justify-between items-start gap-7 max-w-[750px]">
            <h1 class="text-6xl font-bold">Personalized Challenges. Unique Products.</h1>
            <!-- Ignite your coding creativity and unleash your innovative potential with personalized coding challenges tailored to your skill level. -->
            <p class="text-xl">Giving you real world problems and a chance to solve it using code in your unique way. We're here to help you develop unique projects and real-world problem-solving skills.</p>
            <div class="flex gap-3">
                <NuxtLink href="/login" class="btn btn-primary text-white">Get Started</NuxtLink>
                <a href="#about" class="btn btn-primary btn-outline border-2">Learn More</a>
            </div>
        </div>
        <img class="w-[550px] -translate-y-16 hover:-translate-y-24 transition-all" src="/templogo.png" alt="Temporary Logo">
    </div>
</template>