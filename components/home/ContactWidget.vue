<template>
    <section class="relative p-4 md:p-10 flex flex-col gap-8 md:flex-row my-40 md:justify-between">

        <img class="absolute left-0 top-0 -z-10 object-cover w-full h-full rounded-lg brightness-50 overflow-hidden" src="~/assets/images/pexels-cottonbro-studio-7438102.jpg" alt="Pessoas em uma sala de reunião"> 
        
        <div class="flex flex-col justify-between min-h-full md:w-2/3">
            <div>
                <h2 class="text-4xl font-bold">Entre em Contato</h2>
                <p class="text-lg">Nos envie os detalhes de suas necessidades e responderemos o mais brevemente o possível</p>
            </div>
            <NuxtLink to="/contato" class="w-fit my-4 py-2 px-4 rounded-3xl text-black bg-white hover:bg-neutral-400 transition-all">Entre em Contato</NuxtLink>
        </div>

        <div class="flex flex-col gap-4 text-black bg-white p-6 rounded-lg md:w-full">
            <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-diagram-3-fill my-auto" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5z" />
                </svg>
                <h3 class="font-extrabold text-2xl md:ml-2">Como funciona nosso processo de desenvolvimento?</h3>
            </div>
            <div>
                <p class="text-lg font-bold">Análise</p>
                <p>Após o envio das informações, iremos fazer uma análise do projeto, faremos estimativas e responderemos com uma proposta.</p>
            </div>
            <div>
                <p class="text-lg font-bold">Planejamento</p>
                <p>Ao confirmar o prosseguimento do projeto daremos inicio ao breve processo de planejamento onde visaremos entender os apectos do projeto apresentado.</p>
            </div>
            <div>
                <p class="text-lg font-bold">Desenvolvimento</p>
                <p>Com uma visão geral do que precisa ser feito e como deveremos fazer, iniciaremos o processo de desenvolvimento seguindo metodologias ágeis,
                    onde também realizaremos testes rigorosos para garantir a qualidade do projeto.</p>
            </div>
            <div>
                <p class="text-lg font-bold">Entrega</p>
                <p>Após a conclusão do desenvolvimento, a entrega final será programada de acordo com os prazos acordados,
                    garantindo que todas as expectativas sejam atendidas.</p>
            </div>
        </div>

    </section>
</template>

