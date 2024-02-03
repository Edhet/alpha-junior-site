<script setup lang="ts">
useSeoMeta({
    description: 'Os projetos que definem a nossa história como empresa.',
    ogTitle: 'Alpha Junior - Portifólio',
    ogDescription: 'Os projetos que definem a nossa história como empresa.',
    ogImage: '/img/social.jpg',
    ogUrl: 'https://alphajunior.uniriotec.br/portifolio',
    twitterTitle: 'Alpha Junior - Portifólio',
    twitterDescription: 'Os projetos que definem a nossa história como empresa.',
    twitterImage: '/img/social.jpg',
    twitterCard: 'summary'
})

useHead({
    title: "Alpha Junior - Portifólio",
    htmlAttrs: {
        lang: 'pt'
    }
})
</script>

<template>
    <PortifolioProjects></PortifolioProjects>
    <PortifolioCollaborators></PortifolioCollaborators>
</template>