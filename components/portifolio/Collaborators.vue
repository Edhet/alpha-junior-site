<script setup lang="ts">
import type { Collaborator } from '~/interfaces/collaborator';

const { data } = await useFetch('/api/colaboradores')
const collaborators: Collaborator[] = (data as unknown) as Collaborator[]

</script>

<template>
    <section class="my-10">
        <div class="whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-people-fill my-auto mr-2 float-start h-9 w-9 md:h-12 md:w-12" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
            <h1 class="text-3xl md:text-5xl font-bold">Colaboradores</h1>
        </div>
        <p class="font-light text-lg">Veja quem são os membros da nossa equipe, que fazem tudo isso ser possível.</p>


        <div class="grid justify-center md:justify-start md:grid-cols-2 lg:grid-cols-4 gap-3 flex-wrap p-6">
            <a :href="collaborator.linkedin" class="flex w-fit p-2 hover:underline" v-for="collaborator in collaborators.sort((a, b) => a.name > b.name ? 1 : -1)">
                <div class="mr-2 my-auto relative -z-10">
                    <img class="w-8 h-8 rounded-full object-cover" alt="Image do colaborador" :src="collaborator.pictureUrl">
                    <img class="absolute blur-lg top-0 left-0 w-8 h-8 rounded-full object-cover -z-20 pointer-events-none" :src="collaborator.pictureUrl">
                </div>
                <div>
                    <p>{{ collaborator.name }}</p>
                    <p class="font-light text-sm">{{ collaborator.occupation }}</p>
                </div>
            </a>
        </div>
    </section>
</template>