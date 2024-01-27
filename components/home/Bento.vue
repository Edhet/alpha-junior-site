<template>
    <section class="my-28">
        <div>
            <div class="p-6 m-1 md:m-3 border border-zinc-900 rounded-lg">
                <p class="text-lg font-bold">Quem Somos?</p>
                <p class="font-light italic">
                    Alpha Junior é a Empresa Júnior do Bacharelado de Sistemas de Informação da Universidade Federal do Estado do Rio de Janeiro (UNIRIO).
                    Prestamos serviços de desenvolvimento de sistemas para plataformas Web e Mobile, consultoria em análise de sistemas e planejamento de TI.
                </p>
            </div>
        </div>
        <div class="flex flex-col md:grid md:grid-cols-3">
            <div class="p-6 m-1 md:m-3 border border-zinc-900 rounded-lg">
                <p class="text-lg font-bold">Missão</p>
                <p class="font-light italic">Capacitar nossos funcionários através da entrega de um serviço de qualidade na área.</p>
            </div>
            <div class="p-6 m-1 md:m-3 border border-zinc-900 rounded-lg">
                <p class="text-lg font-bold">Visão</p>
                <p class="font-light italic">Se tornar a referência em construção de soluções de TI das empresas juniores.</p>
            </div>
            <div class="p-6 m-1 md:m-3 border border-zinc-900 rounded-lg">
                <p class="text-lg font-bold">Valores</p>
                <p class="font-light italic">Inovação, compromisso, qualidade, agimos focados na experiência do cliente. </p>
            </div>
        </div>
        <div>
            <div class="flex col-span-2 p-6 m-1 md:m-3 border border-zinc-900 rounded-lg">
                <div>
                    <p class="text-lg font-bold">Conheça a equipe</p>
                    <p class="font-light italic">Veja quem são nossos colaboradores, suas áreas de atuação e quais projetos já realizamos. </p>
                </div>
                <NuxtLink class="ml-auto my-auto h-fit py-2 px-4 rounded-3xl text-black bg-white hover:bg-neutral-400 transition-all"
                to="/projects">Conhecer</NuxtLink>
            </div>

        </div>
    </section>
</template>