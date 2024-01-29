<template>
    <header class="flex justify-between py-4 px-6 md:px-16 lg:px-[20%] border-b sticky top-0 backdrop-blur-lg bg-black/60 border-white/20 z-50">
        <NuxtLink to="/">
            <svg width="32" height="32" viewBox="0 0 538 527" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.494873" y="443.11" width="537.619" height="147.456" rx="73.7278" transform="rotate(-55.4775 0.494873 443.11)" fill="white" />
                <rect x="458.523" y="439.713" width="397.699" height="111.438" rx="55.719" transform="rotate(-117.825 458.523 439.713)" fill="white" />
                <circle cx="339" cy="351" r="48" fill="white" />
            </svg>
        </NuxtLink>
        <nav class="flex gap-4 text-white">
            <NuxtLink class="my-auto hover:text-neutral-400 transition-all" to="/">Início</NuxtLink>
            <NuxtLink class="my-auto hover:text-neutral-400 transition-all" to="/portifolio">Portifólio</NuxtLink>
            <NuxtLink to="/contato" class="py-2 px-4 rounded-3xl text-sm text-black bg-white hover:bg-neutral-400 transition-all">Contato</NuxtLink>
        </nav>
    </header>
</template>