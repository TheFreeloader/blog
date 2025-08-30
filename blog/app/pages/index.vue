<template>
     <div class="relative">
          <!-- Fixed background with parallax effect -->
          <div
               class="fixed top-0 left-0 w-full h-screen bg-[url('~/assets/images/image.png')] bg-contain bg-center bg-no-repeat">
          </div>

          <!-- Content overlay that scrolls -->
          <div class="relative z-10">
               <!-- Hero section -->
               <div
                    class="h-screen flex flex-col items-start justify-center transition-all duration-700 ease-out sm:px-6 md:px-8">
                    <div class="text-white font-bold text-start transform transition-transform duration-1000 ease-out">
                         <h1 class="font-poppins text-4xl sm:text-6xl md:text-5xl lg:text-8xl leading-tight">
                              OCAMPO <br>CAMARINES<br>SUR
                         </h1>
                         <h1
                              class="text-sm sm:text-2xl md:text-3xl lg:text-4xl lg:mb-50 mt-4 sm:mt-6 md:mt-8 lg:mt-10 h-8 sm:h-10 md:h-12 lg:h-16 flex items-start max-w-full overflow-hidden">
                              <span class="typewriter break-words whitespace-normal leading-tight">{{ displayText
                                   }}</span>
                              <span class="cursor flex-shrink-0">|</span>
                         </h1>
                    </div>
               </div>

               <div class="min-h-screen bg-theme transition-all duration-500 ease-in-out">
                    <div class="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
                         <!-- Main Content -->
                         <main class="max-w-4xl mx-auto">
                              <div class="bg-card rounded-lg p-6 border" :style="{ borderColor: 'var(--border)' }">
                                   <h2 class="text-xl font-semibold text-foreground mb-4">Welcome to the Nordic Theme
                                   </h2>
                                   <p class="text-muted-foreground mb-4">
                                        This blog uses a beautiful Nordic-inspired color palette with support for both
                                        light and dark modes.
                                   </p>
                              </div>
                         </main>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup>
const phrases = [
     "Padagos Ocampo!",
     "Sulong Ocampo!",
     "Onward Ocampo!",
];

const { displayText } = useTypewriter(phrases);
</script>

<style scoped>
.cursor {
     animation: blink 1s infinite;
}

@keyframes blink {

     0%,
     50% {
          opacity: 1;
     }

     51%,
     100% {
          opacity: 0;
     }
}

.typewriter {
     font-family: "Poppins", sans-serif;
}
</style>