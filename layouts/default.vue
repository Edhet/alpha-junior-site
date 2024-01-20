<template>
    <header class="flex justify-between py-4 px-12 border-b sticky top-0 backdrop-blur-lg bg-black/75 border-zinc-900 bg-porcelain-100">
        <div class="flex gap-3">
            <img src="../assets/images/logo_alpha.png" class="mt-auto h-5">
            <h1 class="">Alpha Junior</h1>
        </div>
        <nav class="flex gap-4">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/projects">Projects</NuxtLink>
        </nav>
    </header>
    <main class="mx-6 md:mx-24 lg:mx-32 2xl:max-w-[70%] 2xl:mx-[15%] min-h-full">
        <slot />
    </main>
</template>