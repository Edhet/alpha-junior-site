<script setup lang="ts">
useSeoMeta({
    description: 'Da ideia à implementação de soluções de TI',
    ogTitle: 'Alpha Junior',
    ogDescription: 'Da ideia à implementação de soluções de TI',
    ogImage: '/img/social.jpg',
    ogUrl: 'https://alphajunior.uniriotec.br',
    twitterTitle: 'Alpha Junior',
    twitterDescription: 'Da ideia à implementação de soluções de TI',
    twitterImage: '/img/social.jpg',
    twitterCard: 'summary'
})

useHead({
    htmlAttrs: {
        lang: 'pt'
    }
})
</script>

<template>
    <HomePitch></HomePitch>
    <HomeBento></HomeBento>
    <HomeContactWidget></HomeContactWidget>
</template>