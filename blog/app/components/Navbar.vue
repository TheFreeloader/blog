<template>
     <nav :class="[
          'fixed top-0 w-full z-50 transition-all duration-300 px-6',
          isScrolled ? '!bg-transparent backdrop-blur-md' : 'bg-transparent'
     ]">
          <div class="max-w-full mx-auto flex justify-between items-center py-3 sm:py-4">
               <div class="flex items-center gap-2 sm:gap-3">
                    <img src="~/assets/svg/logo.svg" alt="Logo" class="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
                    <h1 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-notable"
                         style="color: var(--primary)">
                         <span class="hidden sm:inline">Dev-for-Hire</span>
                         <span class="sm:hidden">Dev</span>
                    </h1>
               </div>
          </div>
     </nav>
</template>

<script setup>
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
