<script setup lang="ts">
import type { Email } from '~/interfaces/email'

const opcoesOrcamento = getBudgetOptions()

let email: Email = { from: "", subject: "", text: "", budget: "Mais de R$10.000", academic: false }
let errorMessages: any = ref({ from: "", subject: "", text: "" })

enum EmailState { READY, LOADING, SUCCESS, ERROR }

let emailStatus = ref(EmailState.READY)
let responseMessage = ref("")

async function sendEmail() {
    errorMessages.value = {
        from: validEmail(email.from),
        subject: validString(email.subject, 'sm'),
        text: validString(email.text, 'bg')
    }

    if (errorMessages.value.from || errorMessages.value.subject || errorMessages.value.text) {
        return
    }

    emailStatus.value = EmailState.LOADING
    const response = await $fetch('/api/contato', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email)
    })

    responseMessage.value = response.message
    emailStatus.value = response.code == 200 ? EmailState.SUCCESS : EmailState.ERROR
    setTimeout(() => emailStatus.value = EmailState.READY, 4000)
}
</script>

<template>
    <form @submit.prevent="sendEmail()" class="flex flex-col gap-4 text-white backdrop-blur-lg bg-black/60 border border-white/20 md:hover:border-white transition-all p-6 rounded-lg w-full md:w-2/3 xl:w-1/2 ml-auto">
        <div>
            <div class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill mr-2 min-h-8 min-w-8 float-start my-auto" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                <div class="absolute top-0 left-0 min-h-8 min-w-8 rounded-full bg-white blur-lg"></div>

            </div>
            <h3 class="font-bold text-2xl">Envie uma mensagem</h3>
        </div>

        <div>
            <div class="flex">
                <label class="font-bold" for="from">Seu email</label>
                <p v-if="errorMessages.from" class="ml-auto my-auto text-sm text-red-500">{{ errorMessages.from }}</p>
            </div>
            <input class="mt-1 border border-white/20 bg-transparent rounded-lg p-1 w-full" id="from" v-model="email.from">
        </div>

        <div>
            <div class="flex">
                <label class="font-bold" for="subject">Assunto</label>
                <p v-if="errorMessages.subject" class="ml-auto my-auto text-sm text-red-500">{{ errorMessages.subject }}</p>
            </div>
            <input class="mt-1 border border-white/20 bg-transparent rounded-lg p-1 w-full" id="subject" v-model="email.subject">
        </div>

        <div>
            <div class="flex">
                <label class="font-bold" for="text">Mensagem</label>
                <p v-if="errorMessages.text" class="ml-auto my-auto text-sm text-red-500">{{ errorMessages.text }}</p>
            </div>
            <textarea class="mt-1 border border-white/20 bg-transparent rounded-lg p-1 resize-none w-full h-40" id="text" v-model="email.text">
            </textarea>
        </div>

        <div class="flex flex-col gap-2">
            <p class="font-bold">Orçamento do projeto:</p>
            <div v-for="opcao in opcoesOrcamento" class="flex">
                <div class="relative">
                    <input class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-white/20 text-white/20 transition-all checked:border-white" v-model="email.budget" :id="opcao" name="budget" :value="opcao" type="radio">
                    <span class="absolute top-1/2 right-0 -translate-x-[20%] -translate-y-[70%] text-white transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                    </span>
                </div>
                <label class="ml-2 cursor-pointer" :for="opcao">{{ opcao }}</label>
            </div>
        </div>

        <div class="mt-1">
            <p class="mb-1 font-bold">Sou de instituição acadêmica</p>
            <div class="flex">
                <div class="relative">
                    <input class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/20 transition-all checked:border-white checked:bg-white" v-model="email.academic" id="academic" type="checkbox">
                    <span class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-[65%] -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </span>
                </div>
                <label class="ml-2 cursor-pointer" for="academic">Sim</label>
            </div>
        </div>
        <button class="my-4 py-2 px-4 rounded-3xl transition-all text-black" :class="emailStatus == EmailState.READY || emailStatus == EmailState.LOADING ? 'bg-white hover:bg-neutral-400' : emailStatus == EmailState.SUCCESS ? 'text-white bg-green-900' : ' text-white bg-red-900'">
            {{ emailStatus == EmailState.LOADING ? "" : emailStatus == EmailState.READY ? 'Enviar mensagem' : responseMessage }}
            <div v-if="emailStatus == EmailState.LOADING" class="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            </div>
        </button>
    </form>
</template>