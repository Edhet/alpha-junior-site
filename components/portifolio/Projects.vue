<script setup lang="ts">
import type Project from '~/interfaces/project';

const { data } = await useFetch('/api/projetos')
const projects: Project[] = (data as unknown) as Project[]

</script>

<template>
    <section class="my-10">
        <div class="whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill my-auto mr-2 float-start h-9 w-9 md:h-12 md:w-12" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
            </svg>
            <h1 class="text-3xl md:text-5xl font-bold">Projetos</h1>
        </div>
        <p class="font-light text-lg">Os projetos que definem a nossa história como empresa.</p>
        
        <div class="flex flex-col gap-12 mt-12">
            <div class="relative p-4 md:p-10 flex flex-col gap-8" v-for="project in projects">
                <div class="absolute left-0 top-0 w-full h-full -z-10 backdrop-blur-md rounded-lg"></div>
                <img class="absolute left-0 top-0 w-full h-full object-cover -z-20 rounded-lg brightness-50 pointer-events-none overflow-hidden" :src="project.imageUrl" alt="Imagem do projeto">

                <div class="flex flex-col gap-2 md:w-2/3">
                    <div>
                        <h3 class="text-4xl font-bold"> {{ project.name }} </h3>
                        <p class="text-lg"> {{ project.description }} </p>
                    </div>
                    <div class="flex gap-4 mt-2">
                        <div v-if="project.collaborators && project.collaborators.length > 0" v-for="collaborator in project.collaborators" class="font-bold">
                            <img class="w-8 h-8 rounded-full object-cover" alt="Imagem do colaborador" :src="collaborator.pictureUrl ?? '/img/logo_alpha.png'" :title="collaborator.name">
                        </div>
                    </div>
                    <a v-if="project.deployUrl" :href="project.deployUrl" 
                    class="w-fit my-4 py-2 px-4 rounded-3xl text-black bg-white hover:bg-neutral-400 transition-all">Ver implementação</a>
                </div>
            </div>
        </div>
    </section>
</template>