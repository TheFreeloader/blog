<template>
     <nav :class="[
          'fixed top-0 px-7 w-full z-50 transition-all duration-300',
          isScrolled ? '!bg-transparent backdrop-blur-md' : 'bg-theme'
     ]">
          <div class="max-w-full mx-auto px-5 py-2 flex justify-between items-center">
               <div class="flex items-center gap-2">
                    <img src="~/assets/svg/logo.svg" alt="Logo" class="w-8 h-8" />
                    <h1 class="text-xl font-bold text-primary font-notable">Dev-for-Hire</h1>
               </div>
               <button @click="toggleTheme"
                    class="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                    <div v-if="isDarkMode" class="flex items-center gap-2">
                         <img src="~/assets/svg/light-icon.svg" alt="Light" class="w-6 h-6" />
                         <span>Light</span>
                    </div>
                    <div v-else class="flex items-center gap-2">
                         <img src="~/assets/svg/dark-icon.svg" alt="Dark" class="w-6 h-6" />
                         <span>Dark</span>
                    </div>
               </button>
          </div>
     </nav>
</template>

<script setup>
const { isDarkMode, toggleTheme } = useDarkMode()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
     isScrolled.value = window.scrollY > 50
}

onMounted(() => {
     window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
     window.removeEventListener("scroll", handleScroll)
})
</script>
