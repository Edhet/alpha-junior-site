<template>
    <section class="accent-black my-10 text-lg">
        <img class="absolute top-0 right-0 w-full h-full brightness-50 object-cover -z-10" src="/img/pexels-mikhail-nilov-9301872.jpg">
        <div class="flex flex-col md:flex-row gap-6">
            <div class="flex flex-col text-white min-h-full rounded-lg md:w-3/5">
                <div class="my-6">
                    <h1 class="text-4xl md:text-5xl font-bold mb-2">Entre em contato</h1>
                    <p class="text-lg">Aguardamos seu contato, confiantes em fornecer soluções precisas para suas necessidades.</p>
                </div>
                <div class="mt-auto flex flex-col gap-3">
                    <div class="font-light p-6 border backdrop-blur-lg bg-black/60 border-white/20 md:hover:border-white transition-all rounded-lg">
                        <div class="relative my-auto ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill mr-2 min-h-6 min-w-6 float-start my-auto" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                            </svg>
                            <div class="absolute top-0 left-0 min-h-6 min-w-6 rounded-full bg-white blur-lg"></div>
                        </div>
                        Atendimento de Segunda a Sexta de 9h às 21h
                    </div>
                    <div class="p-6 border backdrop-blur-lg bg-black/60 border-white/20 md:hover:border-white transition-all rounded-lg">
                        <div class="font-light">
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox2-flag mr-2 min-h-6 min-w-6 float-start my-auto" viewBox="0 0 16 16">
                                    <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8z" />
                                    <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m.585 4.157C4.836 7.264 5 7.334 5 7a1 1 0 0 0-2 0c0 .334.164.264.415.157C3.58 7.087 3.782 7 4 7s.42.086.585.157" />
                                </svg>
                                <div class="absolute top-0 left-0 min-h-6 min-w-6 rounded-full bg-white blur-lg"></div>
                            </div>
                            <h2 class="text-lg font-bold">Outros meios de contato</h2>
                            <p>Email: alphajunior@uniriotec.br</p>
                            <p>Telefone:</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm></ContactForm>
        </div>
    </section>
</template>