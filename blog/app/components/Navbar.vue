<template>
     <nav class="bg-card border-b" :style="{ borderColor: 'var(--border)' }">
          <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
               <div class="flex items-center gap-4">
                    <img src="../assets/svg/logo.svg" alt="Logo" class="w-10 h-10" />
                    <h1 class="text-xl font-bold text-primary font-notable">Dev-for-Hire</h1>
               </div>
               <ul class="flex items-center gap-4 font-poppins font-semibold text-xl">
                    <li>
                         <NuxtLink to="/services">Municipality</NuxtLink>
                    </li>
                    <li>
                         <NuxtLink to="/about">About</NuxtLink>
                    </li>
               </ul>
               <button @click="toggleTheme"
                    class="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                    <div v-if="isDarkMode" class="flex items-center gap-2">
                         <img src="../assets/svg/light-icon.svg" alt="Light" class="w-6 h-6" />
                         <span>Light</span>
                    </div>
                    <div v-else class="flex items-center gap-2">
                         <img src="../assets/svg/dark-icon.svg" alt="Dark" class="w-6 h-6" />
                         <span>Dark</span>
                    </div>
               </button>
          </div>
     </nav>
</template>

<script setup>
const { isDarkMode, toggleTheme } = useDarkMode()
</script>
